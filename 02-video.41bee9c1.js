var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequired7c6=o);var n=o("kEUo3");const i=document.querySelector("iframe"),l=new Vimeo.Player(i);function a(){let e=JSON.parse(localStorage.getItem("videoplayer-current-time"));return e||0}l.setCurrentTime(a()),l.on("timeupdate",n.throttle((()=>(l.getCurrentTime().then((function(e){let r=e||a();localStorage.setItem("videoplayer-current-time",`${r}`)})),"Saved video progress. Exiting page.")),1e3));
//# sourceMappingURL=02-video.41bee9c1.js.map
