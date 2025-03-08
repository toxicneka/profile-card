const profileIcon = document.getElementById('profile-icon');
const originalImage = 'https://raw.githubusercontent.com/toxicneka/pictures/main/ava.jpg';
const newImage = 'https://i.pinimg.com/736x/a8/e4/bd/a8e4bd9411fa1dec31aa444ab06ac503.jpg';

let currentImage = localStorage.getItem('currentImage') || originalImage;

profileIcon.src = currentImage;

let isOriginalImage = currentImage === originalImage;
const waterElement = document.getElementById('vector');
const mainElement = document.getElementById('main');
const containerImg = document.querySelector('.container');

// Добавляем обработчик клика на иконку
profileIcon.addEventListener('click', () => {
    if (isOriginalImage) {
        waterElement.style.background = '#B2333D';
        mainElement.classList.add('light-theme');
        containerImg.style.backgroundImage = `url(${newImage})`;
        profileIcon.src = newImage;
        currentImage = newImage;

    } else {
        waterElement.style.background = '#FFFFFF';
        mainElement.classList.remove('light-theme');
        containerImg.style.backgroundImage = `url(${originalImage})`;
        profileIcon.src = originalImage;
        currentImage = originalImage;
    }

    localStorage.setItem('currentImage', currentImage);
    isOriginalImage = !isOriginalImage;
});

const followBtn = document.getElementById('follow-btn');
const messageBtn = document.getElementById('message-btn');
const numberFollow = document.querySelector('.number-follow');
const numberMsg = document.querySelector('.number-msg');

let followCount = localStorage.getItem('followCount') || 100;
let msgCount = localStorage.getItem('msgCount') || 20;

numberFollow.textContent = followCount;
numberMsg.textContent = msgCount;

// Функция для увеличения числа подписчиков
followBtn.addEventListener('click', () => {
    followCount = parseInt(numberFollow.textContent) + 1;
    numberFollow.textContent = followCount;
    localStorage.setItem('followCount', followCount);
});

// Функция для увеличения числа сообщений
messageBtn.addEventListener('click', () => {
    msgCount = parseInt(numberMsg.textContent) + 1;
    numberMsg.textContent = msgCount;
    localStorage.setItem('msgCount', msgCount);
});
