const _ = require('lodash');
const iframe = document.querySelector('iframe');
const vPlayer = new Vimeo.Player(iframe);
function loadTime() {
  let parsedSettings = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  return parsedSettings ? parsedSettings : 0;
}
function saveViewProgress() {
  //e = null) {
  //   if (e) e.preventDefault(); console.log('throttled save..');
  vPlayer.getCurrentTime().then(function (seconds) {
    let time = seconds ? seconds : loadTime();
    localStorage.setItem('videoplayer-current-time', `${time}`);
  });
  return 'Saved video progress. Exiting page.';
}
vPlayer.setCurrentTime(loadTime());
vPlayer.on(
  'timeupdate',
  _.throttle(() => saveViewProgress(), 1000)
);

// localStorage.clear();
// vPlayer.on(
//   'timeupdate',
//   _.throttle(() => {
//     saveViewProgress(); // console.log('throttled..');
//   }),
//   1000
// );

// window.onbeforeunload = e => saveViewProgress(e);
// vPlayer.on('pause', function () {
//   saveViewProgress();
// });
// vPlayer.on('play', function () {
// });
// vPlayer.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
