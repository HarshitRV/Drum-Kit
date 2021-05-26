let keyPress;

//ARRAY OF DRUM SOUNDS
let soundArray = [
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
  "sounds/snare.mp3",
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
];

//ADD ON CLICK EVEN TO ALL 6 .drum class
for (let i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let audio = new Audio(soundArray[i]);
    audio.play();
  });
}

// REGISTER KEY ON KEY PRESS AND ASSIGNS IT TO keyPress variable
document.addEventListener("keydown",function(event){
    keyPress = event.key;
});


//PLAY AUDIO WHEN A PARTICULAR KEY IS PRESSED
document.addEventListener("keydown", function(event){
    switch(event.key){
        case "w":
            addAnimation(keyPress);
            let audio_w = new Audio(soundArray[0]);
            audio_w.play(); 
            break;
        case "a":
            addAnimation(keyPress);
            let audio_a = new Audio(soundArray[1]);
            audio_a .play();
            break;
        case "s":
            addAnimation(keyPress);
            let audio_s  = new Audio(soundArray[2]);
            audio_s .play();
            break;
        case "d":
            addAnimation(keyPress);
            let audio_d  = new Audio(soundArray[3]);
            audio_d .play();
            break;
        case "j":
            addAnimation(keyPress);
            let audio_j  = new Audio(soundArray[4]);
            audio_j .play();
            break;
        case "k":
            addAnimation(keyPress);
            let audio_k  = new Audio(soundArray[5]);
            audio_k .play();
            break;
        case "l":
            addAnimation(keyPress);
            let audio_l  = new Audio(soundArray[6]);
            audio_l .play();
            break;
        default:
            console.log("Invalid Key Press");
    }
});


// KEYPRESS ANIMATION FUNCTION
function addAnimation(keyPress){
    document.querySelector("."+keyPress).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("."+keyPress).classList.remove("pressed")
    },100); 
}


// ANIMATE CSS
document.querySelector("h1").style.setProperty('--animate-duration', '2s');
document.querySelector("h3").style.setProperty('--animate-duration', '3s');