let soundArray = [
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
  "sounds/snare.mp3",
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
];
for (let i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let audio = new Audio(soundArray[i]);
    audio.play();
  });
}


document.addEventListener("keydown", function(event){
    switch(event.key){
        case "w":
            let audio_w = new Audio(soundArray[0]);
            audio_w.play(); 
            break;
        case "a":
            let audio_a = new Audio(soundArray[1]);
            audio_a .play();
            break;
        case "s":
            let audio_s  = new Audio(soundArray[2]);
            audio_s .play();
            break;
        case "d":
            let audio_d  = new Audio(soundArray[3]);
            audio_d .play();
            break;
        case "j":
            let audio_j  = new Audio(soundArray[4]);
            audio_j .play();
            break;
        case "k":
            let audio_k  = new Audio(soundArray[5]);
            audio_k .play();
            break;
        case "l":
            let audio_l  = new Audio(soundArray[6]);
            audio_l .play();
            break;
        default:
            alert("Invalid Key Press");
    }
});
