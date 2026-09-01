/*
 * The Next Chapter — Meta Pixel (single source of truth).
 *
 * Loaded with <script src="/pixel.js" defer> on the public pages only:
 * index, btl, no2ta, apply, book-call. It is deliberately NOT loaded on
 * dashboard-home.html, 404.html or landing.html.
 *
 * Rules this file lives by:
 *   1. Analytics must never break a page — every call is wrapped in try/catch.
 *   2. Init + PageView fire exactly once per page load (double-include guard).
 *   3. No PII ever leaves the page. Only form type / topic / tier are sent.
 */
(function () {
  'use strict';

  var PIXEL_ID = '1477957434364263';

  // --- Double-include guard -------------------------------------------------
  // If this file is somehow requested twice (cached copy, stray tag), the
  // second run must not re-init or re-fire PageView.
  if (window.__tncPixelLoaded) return;
  window.__tncPixelLoaded = true;

  // Pages that must never carry the pixel, even if a tag sneaks in.
  var BLOCKED = ['/dashboard-home', '/dashboard', '/404', '/landing'];

  // Normalise the path so clean URLs (/apply) and flat files (/apply.html)
  // and directory mirrors (/btl/) all resolve to the same key.
  function pageKey() {
    var p = '/';
    try {
      p = (window.location.pathname || '/').toLowerCase();
    } catch (e) {}
    p = p.replace(/\/+$/, '');            // trailing slash(es)
    p = p.replace(/\.html?$/, '');        // .html / .htm
    p = p.replace(/\/index$/, '');        // /btl/index -> /btl
    return p === '' ? '/' : p;
  }

  var PATH = pageKey();

  if (BLOCKED.indexOf(PATH) !== -1) return;

  // --- Base snippet ---------------------------------------------------------
  try {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  } catch (e) {}

  // --- Public helper --------------------------------------------------------
  // window.tncTrack('Lead', { form_type: 'guest_application' })
  // Never pass name/email/phone or anything else that identifies a person.
  function tncTrack(event, params) {
    try {
      if (!event || typeof window.fbq !== 'function') return false;
      if (params) fbq('track', event, params);
      else fbq('track', event);
      return true;
    } catch (e) {
      return false;
    }
  }
  window.tncTrack = tncTrack;

  // --- Init + PageView ------------------------------------------------------
  try {
    fbq('init', PIXEL_ID);
    fbq('track', 'PageView');
  } catch (e) {}

  // --- Page-level funnel events --------------------------------------------
  // ViewContent  -> a podcast page (top of funnel, real intent signal)
  // InitiateCheckout -> a page whose whole job is to start an application
  var FUNNEL = {
    '/btl': ['ViewContent', { content_name: 'Between the Lines', content_category: 'podcast' }],
    '/no2ta': ['ViewContent', { content_name: 'No2ta 3al Sater', content_category: 'podcast' }],
    '/apply': ['InitiateCheckout', { content_category: 'application' }],
    '/book-call': ['InitiateCheckout', { content_category: 'discovery_call' }]
  };

  var funnel = FUNNEL[PATH];
  if (funnel) tncTrack(funnel[0], funnel[1]);

  // --- Delegated mailto: click -> Contact ----------------------------------
  try {
    document.addEventListener('click', function (ev) {
      try {
        var el = ev.target && ev.target.closest ? ev.target.closest('a[href^="mailto:"]') : null;
        if (!el) return;
        tncTrack('Contact', { content_category: 'email_click' });
      } catch (e) {}
    }, true);
  } catch (e) {}
})();
