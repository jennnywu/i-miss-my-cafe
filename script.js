// script.js

const playButton = document.getElementById('play-button');
const audioPlayer = document.getElementById('fireplace-audio');

playButton.addEventListener('click', () => {
    if(audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});