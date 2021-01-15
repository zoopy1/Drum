
//Detecting Button Clicks
for (let i = 0; i < document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

var buttonInnerHTML = this.innerHTML;

buttonCheck(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);
  });
}


// Detecting key press
document.addEventListener("keydown", function(event){
let keyPress = event.key;
buttonCheck(keyPress);
buttonAnimation(keyPress);
});


// function that chack value of output
function buttonCheck(key){
  switch (key) {

    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
                      audio.play();
                    break;

    case "a":
      var tom1 = new Audio('sounds/tom-2.mp3');
          tom1.play();
        break;

    case "s":
      var tom2 = new Audio('sounds/tom-3.mp3');
            tom2.play();
          break;

    case "d":
      var tom3 = new Audio('sounds/tom-4.mp3');
              tom3.play();
            break;

    case "j":
      var tom4 = new Audio('sounds/snare.mp3');
                tom4.play();
              break;

    case "k":
       var crash = new Audio('sounds/crash.mp3');
                  crash.play();
                break;

    case "l":
      var kickBass = new Audio('sounds/kick-bass.mp3');
                    kickBass.play();
                  break;


    default: console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey){
var activeButton =  document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
setTimeout(function () {
  activeButton.classList.remove("pressed");
}, 100);
}
