!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var o=n("1WSnx"),i=document.querySelector("iframe"),a=new Vimeo.Player(i);function l(){var e=0;try{e=JSON.parse(localStorage.getItem("videoplayer-current-time"))}catch(r){e=0}return e}a.setCurrentTime(l()),a.on("timeupdate",o.throttle((function(){a.getCurrentTime().then((function(e){var r=e||l();localStorage.setItem("videoplayer-current-time","".concat(r))}))})),1e3)}();
//# sourceMappingURL=02-video.be2a3d36.js.map
