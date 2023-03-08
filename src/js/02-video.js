const iframe = document.querySelector('iframe');
const vPlayer = new Vimeo.Player(iframe);

function loadTime() {
  console.log('[loadTime 1] loading saved time');
  let parsedSettings = 0;
  try {
    parsedSettings = JSON.parse(
      localStorage.getItem('videoplayer-current-time')
    );
  } catch (error) {
    parsedSettings = 0;
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // Unexpected token W in JSON at position 0
  }

  console.log(`[loadTime 2] time loaded: ${parsedSettings}`);
  return parsedSettings;
}

function getCurrentPlayTime(valueOnError = 0) {
  let currentTime = valueOnError;
  vPlayer
    .getCurrentTime()
    .then(function (seconds) {
      // seconds = the current playback position
      currentTime = seconds;
      console.log(
        `[getCurrentPlayTime 1] played current time: ${currentTime} seconds: ${seconds}`
      );
      return seconds;
    })
    .catch(function (error) {
      // an error occurred
      console.log(
        '[getCurrentPlayTime 1] error while getting vimeo time from vPlayer'
      );
      return valueOnError;
    });
  console.log(`[getCurrentPlayTime 2] current time returning: ${currentTime}`);
  return currentTime;
}

function saveViewProgress(e = null) {
  if (e) {
    e.preventDefault();
    console.log('[saveViewProgress 0] on exit');
  }
  console.log('[saveViewProgress 1] saving progress');
  let time = getCurrentPlayTime(loadTime());
  console.log(`[saveViewProgress 2] saving time: ${time} on local storage`);
  localStorage.setItem('videoplayer-current-time', `${time}`);

  return 'Saved video progress. Exiting page.';
}
window.onbeforeunload = e => saveViewProgress(e);

vPlayer.on('play', function () {
  console.log('----------------PLAY-----------------');
  console.log('[vPlayer.on play 1] played the video!');
  console.log(`[vPlayer.on play 2] last saved time: ${loadTime()}`);
});

vPlayer.on('pause', function () {
  console.log('----------------PAUSE-----------------');
  console.log('[vPlayer.on pause 1] paused');
  saveViewProgress();
  console.log(`[vPlayer.on pause 2] last saved time: ${loadTime()}`);
});

vPlayer.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
