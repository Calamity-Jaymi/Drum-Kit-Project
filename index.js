for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    keySound(buttonInnerHtml);
    animateButtons(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function(event) {
  keySound(event.key);
  animateButtons(event.key);
});

function keySound(key) {
  switch (key) {
    case "w":
      var audio = new Audio ("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio ("sounds/snare.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio ("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio ("sounds/tom-2.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio ("sounds/tom-3.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio ("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio ("sounds/tom-4.mp3");
      audio.play();
      break;
  }

}

function animateButtons(currentkey) {
    var activeBtn = document.querySelector("." + currentkey);
    activeBtn.classList.add("pressed");
    setTimeout(function() {
      activeBtn.classList.remove("pressed");
    }, 100);
}
