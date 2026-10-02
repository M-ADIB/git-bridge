(() => {
  const track = document.getElementById('career-track');
  const toggle = document.querySelector('.ticker-toggle');
  if (!track || !toggle) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  const update = () => {
    track.classList.toggle('is-animated', !reducedMotion.matches);
    track.classList.toggle('is-paused', paused);
    toggle.hidden = reducedMotion.matches;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Resume logos' : 'Pause logos';
  };
  toggle.addEventListener('click', () => { paused = !paused; update(); });
  reducedMotion.addEventListener('change', update);
  update();
})();
