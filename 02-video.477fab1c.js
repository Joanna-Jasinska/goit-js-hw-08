const e=document.querySelector("iframe"),t=new Vimeo.Player(e);function r(){let e=0;try{e=JSON.parse(localStorage.getItem("videoplayer-current-time"))}catch(t){e=0}return e}t.setCurrentTime(r()),t.on("timeupdate",(function(){t.getCurrentTime().then((function(e){let t=e||r();localStorage.setItem("videoplayer-current-time",`${t}`)}))}));
//# sourceMappingURL=02-video.477fab1c.js.map
