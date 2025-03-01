// Получаем элемент иконки
const profileIcon = document.getElementById('profile-icon');

// Исходная и новая картинки
const originalImage = 'https://raw.githubusercontent.com/toxicneka/pictures/main/ava.jpg';
const newImage = 'https://i.pinimg.com/736x/a8/e4/bd/a8e4bd9411fa1dec31aa444ab06ac503.jpg';

// Загружаем сохраненное значение картинки из localStorage
let currentImage = localStorage.getItem('currentImage') || originalImage;

// Устанавливаем начальное значение картинки
profileIcon.src = currentImage;

// Флаг для отслеживания текущего состояния
let isOriginalImage = currentImage === originalImage;

// Добавляем обработчик клика на иконку
profileIcon.addEventListener('click', () => {
  if (isOriginalImage) {
    // Меняем картинку на новую
    profileIcon.src = newImage;
    currentImage = newImage;
  } else {
    // Возвращаем исходную картинку
    profileIcon.src = originalImage;
    currentImage = originalImage;
  }
  // Сохраняем текущую картинку в localStorage
  localStorage.setItem('currentImage', currentImage);
  // Меняем состояние флага
  isOriginalImage = !isOriginalImage;
});


// Получаем элементы DOM
const followBtn = document.getElementById('follow-btn');
const messageBtn = document.getElementById('message-btn');
const numberFollow = document.querySelector('.number-follow');
const numberMsg = document.querySelector('.number-msg');

// Загружаем сохраненные значения из localStorage (если они есть)
let followCount = localStorage.getItem('followCount') || 100; // Значение по умолчанию 100
let msgCount = localStorage.getItem('msgCount') || 20; // Значение по умолчанию 20

// Устанавливаем начальные значения
numberFollow.textContent = followCount;
numberMsg.textContent = msgCount;

// Функция для увеличения числа подписчиков
followBtn.addEventListener('click', () => {
  followCount = parseInt(numberFollow.textContent) + 1;
  numberFollow.textContent = followCount;
  // Сохраняем новое значение в localStorage
  localStorage.setItem('followCount', followCount);
});

// Функция для увеличения числа сообщений
messageBtn.addEventListener('click', () => {
  msgCount = parseInt(numberMsg.textContent) + 1;
  numberMsg.textContent = msgCount;
  // Сохраняем новое значение в localStorage
  localStorage.setItem('msgCount', msgCount);
});

// localStorage.clear();


// Получаем элементы DOM
// const followBtn = document.getElementById('follow-btn');
// const messageBtn = document.getElementById('message-btn');
// const numberFollow = document.querySelector('.number-follow');
// const numberMsg = document.querySelector('.number-msg');

// Функция для увеличения числа подписчиков
// followBtn.addEventListener('click', () => {
//   let currentFollow = parseInt(numberFollow.textContent);
//   numberFollow.textContent = currentFollow + 1;
// });

// Функция для увеличения числа сообщений
// messageBtn.addEventListener('click', () => {
//   let currentMsg = parseInt(numberMsg.textContent);
//   numberMsg.textContent = currentMsg + 1;
// });