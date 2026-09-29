(() => {
  const video = document.querySelector('.vsl-player');
  const error = document.querySelector('.vsl-error');
  if (!video || !error) return;
  const streamUrl = '/assets/podcast-development/index.m3u8';
  const showError = () => { error.hidden = false; };
  video.addEventListener('error', showError);
  if (window.Hls && Hls.isSupported()) {
    const player = new Hls({ autoStartLoad: false });
    player.loadSource(streamUrl);
    player.attachMedia(video);
    video.addEventListener('play', () => player.startLoad(), { once: true });
    player.on(Hls.Events.ERROR, (_, data) => {
      if (data.fatal) showError();
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = streamUrl;
  } else {
    showError();
  }
})();
