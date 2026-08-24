/* ============================================================
   First Class Auto Glass — v3 inner-page motion
   Loaded synchronously in <head> so `js-anim` is set before first
   paint (no flash of un-hidden content). If this file ever fails to
   load, `js-anim` is never added and every .reveal element simply
   renders visible and static — same failsafe the home page uses.

   ponytail: IntersectionObserver + CSS classes, no animation library.
   ============================================================ */
(function () {
  'use strict';

  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) return;

  /* `io-anim`, NOT `js-anim` — the home page's GSAP timeline owns js-anim.
     Keying on a separate class lets the home page load motion.css for the
     button trace without this file's reveal rules touching its timeline. */
  document.documentElement.classList.add('io-anim');

  var SEL = '.reveal,.reveal-d,.reveal-l,.reveal-r,.reveal-s';

  /* Count a stat up to the number already written in the HTML, so the
     markup stays the source of truth and reads correctly with JS off. */
  function countUp(el) {
    var m = el.textContent.trim().match(/^([\d,]+)(.*)$/);
    if (!m) return;

    var grouped = m[1].indexOf(',') !== -1;
    var target = parseInt(m[1].replace(/,/g, ''), 10);
    var suffix = m[2];
    var start = null;
    var DUR = 1400;

    function fmt(n) {
      return grouped ? n.toLocaleString('en-US') : String(n);
    }

    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / DUR);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }

    el.textContent = fmt(0) + suffix;
    requestAnimationFrame(frame);
  }

  function init() {
    var els = document.querySelectorAll(SEL);
    if (!els.length) return;

    /* Stagger siblings so grids cascade instead of snapping in together. */
    var seen = new Map();
    Array.prototype.forEach.call(els, function (el) {
      var parent = el.parentNode;
      var i = seen.get(parent) || 0;
      seen.set(parent, i + 1);
      if (i) el.style.transitionDelay = Math.min(i * 70, 420) + 'ms';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add('in');
        if (el.hasAttribute('data-count')) {
          var b = el.querySelector('b');
          if (b) countUp(b);
        }
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.01 });

    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
