const text = document.querySelector(".sec-text")
const textLoad = () =>{
  setTimeout(() => {
    text.textContent = "STUDY BETTER" 
  }, 0);
  setTimeout(() => {
    text.textContent = "IMAGINE BETTER" 
  }, 4000);
}
textLoad()
setInterval(textLoad, 8000)


function changeMode(){
    var element = document.body
    element.classList.toggle('dark-mode')
}

// play pause button

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}