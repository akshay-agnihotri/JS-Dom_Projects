myContainer = document.querySelector(".container");


let currentlyPlayingAudio = null; // Variable to keep track of currently playing audio

myContainer.addEventListener("click" , function(event){
    
    const clickedBtn = event.target.closest(".btn") // Find the closest child element of the clicked element
    if (clickedBtn){

        if(currentlyPlayingAudio){
            currentlyPlayingAudio.pause();
        }
        currentlyPlayingAudio = clickedBtn.querySelector("audio"); //assigning the currently playing audio
        currentlyPlayingAudio.currentTime = 0; // Rewind the audio to the beginning
        clickedBtn.querySelector("audio").play();

    }

});