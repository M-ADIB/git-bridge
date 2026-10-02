(function () {
  const storageKey = 'tnc-booking-prefill';
  const calendarUrl = 'https://calendly.com/rania-thenextchapter/30min';

  window.tncBooking = {
    continueToCalendar({ name = '', email = '', lang = 'en' } = {}) {
      try {
        sessionStorage.setItem(storageKey, JSON.stringify({ name, email, savedAt: Date.now() }));
      } catch (error) {
        // Scheduling remains available if browser storage is blocked.
      }
      window.location.assign('/schedule.html' + (lang === 'ar' ? '?lang=ar' : ''));
    }
  };

  const embed = document.getElementById('calendly-embed');
  if (!embed) return;

  let prefill = {};
  try {
    const saved = JSON.parse(sessionStorage.getItem(storageKey) || 'null');
    sessionStorage.removeItem(storageKey);
    if (saved && Date.now() - saved.savedAt < 30 * 60 * 1000) {
      prefill = { name: saved.name, email: saved.email };
    }
  } catch (error) {}

  const isArabic = new URLSearchParams(window.location.search).get('lang') === 'ar';
  if (isArabic) {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.getElementById('schedule-kicker').textContent = 'الخطوة التالية';
    document.getElementById('schedule-title').textContent = 'اختاري موعداً للحديث مع رانيا';
    document.getElementById('schedule-description').textContent = 'اختاري اليوم والوقت المناسبين لك من التقويم أدناه.';
    document.getElementById('calendar-loading').textContent = 'جارٍ تحميل التقويم…';
    document.getElementById('calendar-fallback-text').textContent = 'لا يظهر التقويم؟';
    document.getElementById('calendar-fallback').textContent = 'افتحي التقويم في نافذة جديدة';
    document.getElementById('schedule-home').textContent = 'العودة إلى الموقع';
  }

  const fallbackUrl = new URL(calendarUrl);
  if (prefill.name) fallbackUrl.searchParams.set('name', prefill.name);
  if (prefill.email) fallbackUrl.searchParams.set('email', prefill.email);
  document.getElementById('calendar-fallback').href = fallbackUrl.href;

  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  script.onload = () => {
    if (!window.Calendly) return;
    window.Calendly.initInlineWidget({
      url: calendarUrl + '?hide_landing_page_details=1&primary_color=b8862e',
      parentElement: embed,
      prefill
    });
  };
  script.onerror = () => {
    document.getElementById('calendar-loading').textContent = isArabic
      ? 'تعذّر تحميل التقويم. استخدمي الرابط أدناه.'
      : 'The calendar could not load. Use the link below to choose a time.';
  };
  document.head.appendChild(script);

  window.addEventListener('message', (event) => {
    const frame = embed.querySelector('iframe');
    if (event.origin !== 'https://calendly.com' || event.source !== frame?.contentWindow) return;
    if (typeof event.data?.event !== 'string' || !event.data.event.startsWith('calendly.')) return;
    document.getElementById('calendar-loading').hidden = true;
    if (event.data.event === 'calendly.event_scheduled') {
      document.getElementById('schedule-title').textContent = isArabic ? 'تم تأكيد موعدك' : 'Your call is booked';
      document.getElementById('schedule-description').textContent = isArabic
        ? 'ستصلك رسالة تأكيد بالبريد الإلكتروني تتضمن تفاصيل الموعد.'
        : 'Look out for the confirmation email with your call details.';
    }
  });
})();
