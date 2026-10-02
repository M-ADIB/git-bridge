const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const read = name => fs.readFileSync(path.join(__dirname, '..', 'public', name), 'utf8');

function bookingContext(blockStorage = false) {
  const stored = new Map();
  const navigations = [];
  const context = {
    window: { location: { assign: url => navigations.push(url) } },
    document: { getElementById: () => null },
    sessionStorage: { setItem: (key, value) => {
      if (blockStorage) throw new Error('Storage blocked');
      stored.set(key, value);
    } },
    Date, JSON
  };
  vm.runInNewContext(read('assets/booking.js'), context);
  return { context, stored, navigations };
}

test('booking redirect preserves Arabic and keeps contact details out of the URL', () => {
  const { context, stored, navigations } = bookingContext();
  context.window.tncBooking.continueToCalendar({ name: 'Test Guest', email: 'test@example.com', lang: 'ar' });
  assert.deepEqual(navigations, ['/schedule.html?lang=ar']);
  assert.equal(JSON.parse(stored.get('tnc-booking-prefill')).email, 'test@example.com');
});

test('booking redirect still works when browser storage is blocked', () => {
  const { context, navigations } = bookingContext(true);
  context.window.tncBooking.continueToCalendar({ name: 'Test Guest' });
  assert.deepEqual(navigations, ['/schedule.html']);
});

for (const expired of [false, true]) {
  test(`calendar ${expired ? 'discards expired' : 'uses and clears fresh'} prefill`, () => {
    const stored = new Map([['tnc-booking-prefill', JSON.stringify({
      name: 'Test Guest', email: 'test@example.com',
      savedAt: Date.now() - (expired ? 31 * 60 * 1000 : 1000)
    })]]);
    const elements = new Map();
    let script;
    let options;
    const context = {
      window: {
        location: { search: '' }, addEventListener() {},
        Calendly: { initInlineWidget: value => { options = value; } }
      },
      document: {
        getElementById(id) {
          if (!elements.has(id)) elements.set(id, {});
          return elements.get(id);
        },
        createElement: () => ({}), head: { appendChild: value => { script = value; } }
      },
      sessionStorage: { getItem: key => stored.get(key), removeItem: key => stored.delete(key) },
      Date, JSON, URL, URLSearchParams
    };
    vm.runInNewContext(read('assets/booking.js'), context);
    script.onload();
    assert.equal(stored.size, 0);
    assert.equal(options.prefill.email, expired ? undefined : 'test@example.com');
    assert.equal(options.parentElement, elements.get('calendly-embed'));
    assert.match(options.url, /^https:\/\/calendly.com\/rania-thenextchapter\/30min/);
  });
}

function callForm({ result = { error: null }, valid = true, readiness = 'top_priority' } = {}) {
  const { context, navigations } = bookingContext();
  const elements = new Map();
  const element = id => {
    if (!elements.has(id)) elements.set(id, {
      value: '', textContent: '', hidden: true, disabled: false, style: {},
      classList: { add() {}, remove() {}, toggle() {} },
      addEventListener(type, listener) { this[type] = listener; },
      setAttribute() {}, querySelectorAll: () => []
    });
    return elements.get(id);
  };
  const form = element('book-form');
  form.checkValidity = () => valid;
  form.reportValidity = () => {};
  form.querySelector = selector => selector.includes('readiness') ? { value: readiness } : { value: 'in_range' };
  element('book-topic').value = 'coaching';
  element('book-topic').options = [{ text: 'Coaching' }];
  element('book-topic').selectedIndex = 0;
  element('book-fullname').value = 'Test Guest';
  element('book-email').value = 'test@example.com';
  context.document.getElementById = element;
  const writes = [];
  context.window.supabase = { createClient: () => ({ from: table => ({
    insert: payload => ({ abortSignal: async () => { writes.push({ table, payload }); return result; } })
  }) }) };
  Object.assign(context, {
    console: { error() {} }, AbortController,
    setTimeout: () => 1, clearTimeout() {}, URLSearchParams
  });
  const source = read('book-call.html');
  const start = source.indexOf('    // Form: save the request');
  vm.runInNewContext(source.slice(start, source.indexOf('</script>', start)), context);
  return { submit: () => form.submit({ preventDefault() {} }), navigations, writes, elements };
}

test('saved qualified call requests redirect immediately to the embedded calendar', async () => {
  const flow = callForm();
  await flow.submit();
  assert.deepEqual(flow.navigations, ['/schedule.html']);
  assert.equal(flow.writes[0].table, 'rania_submissions');
  assert.equal(flow.writes[0].payload[0].name, 'Test Guest');
});

test('failed saves keep the visitor on the form, show an error, and allow retry', async () => {
  const flow = callForm({ result: { error: new Error('Save failed') } });
  await flow.submit();
  assert.equal(flow.navigations.length, 0);
  assert.equal(flow.elements.get('book-save-error').hidden, false);
  assert.equal(flow.elements.get('book-submit-btn').disabled, false);
});

test('invalid call requests are neither saved nor redirected', async () => {
  const flow = callForm({ valid: false });
  await flow.submit();
  assert.equal(flow.writes.length, 0);
  assert.equal(flow.navigations.length, 0);
});

test('existing coaching qualification is preserved', async () => {
  const flow = callForm({ readiness: 'exploring' });
  await flow.submit();
  assert.equal(flow.writes.length, 1);
  assert.equal(flow.navigations.length, 0);
});

test('guest and sponsor save-success callbacks continue to the calendar', () => {
  const source = read('app.js');
  for (const [name, end] of [['handleSuccess', 'handleFailure'], ['handleSponsorSuccess', 'handleSponsorFailure']]) {
    const calls = [];
    const node = { style: {} };
    const context = {
      window: { tncBooking: { continueToCalendar: data => calls.push(data) } },
      currentLang: 'en', fullName: 'Test Guest', contactName: 'Test Sponsor', email: 'test@example.com',
      translations: { en: {} }, topicsList: [], tier: 'Test tier',
      submitSpinner: node, submitBtn: node, submitText: node,
      sponsorSubmitSpinner: node, sponsorSubmitBtn: node, sponsorSubmitText: node,
      applyForm: { reset() {} }, sponsorFormEl: { reset() {} },
      phonePrefixInput: node, countrySelect: node, mediaLinksGroup: node,
      agreementCheck: node, agreementCheckLabel: node,
      sponsorPhonePrefixInput: node, sponsorCountrySelect: node
    };
    const start = source.indexOf(`        const ${name} =`);
    const callback = source.slice(start, source.indexOf(`        const ${end} =`, start));
    vm.runInNewContext(callback + `\n${name}();`, context);
    assert.equal(calls.length, 1);
    assert.equal(calls[0].email, 'test@example.com');
  }
});
