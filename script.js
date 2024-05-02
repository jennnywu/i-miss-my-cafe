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

const audioElements = {
    cups: {
        audio: document.getElementById('cups-audio'),
        volumeIcon: document.getElementById('cups-play-button')
    },
    customers: {
        audio: document.getElementById('customers-audio'),
        volumeIcon: document.getElementById('customers-play-button').querySelector('.fa-volume-high, .fa-volume-low, .fa-volume-off')
    },
    drinks: {
        audio: document.getElementById('drinks-audio'),
        volumeIcon: document.getElementById('drinks-play-button').querySelector('.fa-volume-high, .fa-volume-low, .fa-volume-off')
    },
    coffee: {
        audio: document.getElementById('coffee-audio'),
        volumeIcon: document.getElementById('coffee-play-button').querySelector('.fa-volume-high, .fa-volume-low, .fa-volume-off')
    },
    fireplace: {
        audio: document.getElementById('fireplace-audio'),
        volumeIcon: document.getElementById('fireplace-play-button').querySelector('.fa-volume-high, .fa-volume-low, .fa-volume-off')
    },
    rain: {
        audio: document.getElementById('rain-audio'),
        volumeIcon: document.getElementById('rain-play-button').querySelector('.fa-volume-high, .fa-volume-low, .fa-volume-off')
    },
    sun: {
        audio: document.getElementById('sun-audio'),
        volumeIcon: document.getElementById('sun-play-button').querySelector('.fa-volume-high, .fa-volume-low, .fa-volume-off')
    }
};

const drinksIcon = document.getElementById('drinks-icon');
const cupsIcon = document.getElementById('cups-icon');
const customersIcon = document.getElementById('customers-icon');
const coffeeIcon = document.getElementById('coffee-icon');
const fireplaceIcon = document.getElementById('fireplace-icon');
const rainIcon = document.getElementById('rain-icon');
const sunIcon = document.getElementById('sun-icon');

const input = document.getElementById('to-do-input');
const incompleteList = document.getElementById('incomplete-list');
const completeList = document.getElementById('complete-list');

function moveToComplete(checkbox) {
    const listItem = checkbox.parentElement;
    if(checkbox.checked) {
        completeList.appendChild(listItem);
    } else {
        incompleteList.appendChild(listItem);
    }
}

document.addEventListener('change', function(event) {
    if(event.target.type === 'checkbox') {
        moveToComplete(event.target);
    } else {

    }
});

input.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        const task = input.value.trim();
        if(task !== '') {
            const listItem = document.createElement('ul');
            const trashIcon = document.createElement('i');

            listItem.innerHTML = `<input type="checkbox">${task}`;
            incompleteList.appendChild(listItem);
            input.value = '';
            
            trashIcon.className = 'fa-solid fa-trash';
            trashIcon.classList.add('trash');
            listItem.appendChild(trashIcon);
        }
    }
});

document.addEventListener('click', function(event) {
    if(event.target.classList.contains('trash')) {
        event.target.parentElement.remove();
    }
});

drinksPlayButton.addEventListener('click', toggleAudio.bind(null, drinksAudio, drinksIcon));
cupsPlayButton.addEventListener('click', toggleAudio.bind(null, cupsAudio, cupsIcon));
customersPlayButton.addEventListener('click', toggleAudio.bind(null, customersAudio, customersIcon));
coffeePlayButton.addEventListener('click', toggleAudio.bind(null, coffeeAudio, coffeeIcon));
fireplacePlayButton.addEventListener('click', toggleAudio.bind(null, fireplaceAudio, fireplaceIcon));
rainPlayButton.addEventListener('click', toggleAudio.bind(null, rainAudio, rainIcon));
sunPlayButton.addEventListener('click', toggleAudio.bind(null, sunAudio, sunIcon));

function toggleAudio(audio, icon) {
    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

document.querySelectorAll('.slider').forEach(slider => {
    slider.addEventListener('input', () => {
        const audioId = slider.getAttribute('data-audio-id');
        const audioElement = document.getElementById(audioId);
        const volumeIcon = slider.parentElement.querySelector('.fa-volume-high, .fa-volume-low, .fa-volume-off');

        console.log(slider.value);

        audioElement.volume = slider.value / 100;

        if(slider.value == 0 || slider.value == null) {
            volumeIcon.className = 'fa-solid fa-volume-off';
        } else if(slider.value <= 50) {
            volumeIcon.className = 'fa-solid fa-volume-low';
        } else {
            volumeIcon.className = 'fa-solid fa-volume-high';
        }
    });
});