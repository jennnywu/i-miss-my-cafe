// script.js

const drinksPlayButton = document.getElementById('drinks-play-button');
const cupsPlayButton = document.getElementById('cups-play-button');
const customersPlayButton = document.getElementById('customers-play-button');
const coffeePlayButton = document.getElementById('coffee-play-button');
const fireplacePlayButton = document.getElementById('fireplace-play-button');
const rainPlayButton = document.getElementById('rain-play-button');
const sunPlayButton = document.getElementById('sun-play-button');

const drinksAudio = document.getElementById('drinks-audio');
const cupsAudio = document.getElementById('cups-audio');
const customersAudio = document.getElementById('customers-audio');
const coffeeAudio = document.getElementById('coffee-audio');
const fireplaceAudio = document.getElementById('fireplace-audio');
const rainAudio = document.getElementById('rain-audio');
const sunAudio = document.getElementById('sun-audio');

const drinksIcon = document.getElementById('drinks-icon');
const cupsIcon = document.getElementById('cups-icon');
const customersIcon = document.getElementById('customers-icon');
const coffeeIcon = document.getElementById('coffee-icon');
const fireplaceIcon = document.getElementById('fireplace-icon');
const rainIcon = document.getElementById('rain-icon');
const sunIcon = document.getElementById('sun-icon');

cupsPlayButton.addEventListener('click', () => {
    if(cupsAudio.paused) {
        cupsAudio.play();
        cupsIcon.classList.remove('fa-play');
        cupsIcon.classList.add('fa-pause');
    } else {
        cupsAudio.pause();
        cupsIcon.classList.remove('fa-pause');
        cupsIcon.classList.add('fa-play');
    }
})

customersPlayButton.addEventListener('click', () => {
    if(customersAudio.paused) {
        customersAudio.play();
        customersIcon.classList.remove('fa-play');
        customersIcon.classList.add('fa-pause');
    } else {
        customersAudio.pause();
        customersIcon.classList.remove('fa-pause');
        customersIcon.classList.add('fa-play');
    }
});

drinksPlayButton.addEventListener('click', () => {
    if(drinksAudio.paused) {
        drinksAudio.play();
        drinksIcon.classList.remove('fa-play');
        drinksIcon.classList.add('fa-pause');
    } else {
        drinksAudio.pause();
        drinksIcon.classList.remove('fa-pause');
        drinksIcon.classList.add('fa-play');
    }
});

coffeePlayButton.addEventListener('click', () => {
    if(coffeeAudio.paused) {
        coffeeAudio.play();
        coffeeIcon.classList.remove('fa-play');
        coffeeIcon.classList.add('fa-pause');
    } else {
        coffeeAudio.pause();
        coffeeIcon.classList.remove('fa-pause');
        coffeeIcon.classList.add('fa-play');
    }
});

coffeePlayButton.addEventListener('click', () => {
    if(coffeeMachineAudio.paused) {
        coffeeMachineAudio.play();
        coffeeIcon.classList.remove('fa-play');
        coffeeIcon.classList.add('fa-pause');
    } else {
        coffeeMachineAudio.pause();
        coffeeIcon.classList.remove('fa-pause');
        coffeeIcon.classList.add('fa-play');
    }
});

fireplacePlayButton.addEventListener('click', () => {
    if(fireplaceAudio.paused) {
        fireplaceAudio.play();
        fireplaceIcon.classList.remove('fa-play');
        fireplaceIcon.classList.add('fa-pause');
    } else {
        fireplaceAudio.pause();
        fireplaceIcon.classList.remove('fa-pause');
        fireplaceIcon.classList.add('fa-play');
    }
});

rainPlayButton.addEventListener('click', () => {
    if(rainAudio.paused) {
        rainAudio.play();
        rainIcon.classList.remove('fa-play');
        rainIcon.classList.add('fa-pause');
    } else {
        rainAudio.pause();
        rainIcon.classList.remove('fa-pause');
        rainIcon.classList.add('fa-play');
    }
});

sunPlayButton.addEventListener('click', () => {
    if(sunAudio.paused) {
        sunAudio.play();
        sunIcon.classList.remove('fa-play');
        sunIcon.classList.add('fa-pause');
    } else {
        sunAudio.pause();
        sunIcon.classList.remove('fa-pause');
        sunIcon.classList.add('fa-play');
    }
});

document.querySelectorAll('.slider').forEach(slider => {
    const cupsAudioElement = document.getElementById('cups-audio');
    const customersAudioElement = document.getElementById('customers-audio');
    const drinksAudioElement = document.getElementById('drinks-audio');
    const coffeeAudioElement = document.getElementById('coffee-audio');
    const fireplaceAudioElement = document.getElementById('fireplace-audio');
    const rainAudioElement = document.getElementById('rain-audio');
    const sunAudioElement = document.getElementById('sun-audio');

    slider.addEventListener('input', () => {
        cupsAudioElement.volume = slider.value / 100;
        customersAudioElement.volume = slider.value / 100;
        drinksAudioElement.volume = slider.value / 100;
        coffeeAudioElement.volume = slider.value / 100;
        fireplaceAudioElement.volume = slider.value / 100;
        rainAudioElement.volume = slider.value / 100;
        sunAudioElement.volume = slider.value / 100;
    });
});