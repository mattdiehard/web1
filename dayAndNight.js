'use strict';
const dayBtn = document.querySelector('.js-dayBtn'),
    nightBtn = document.querySelector('.js-nightBtn'),
    body = document.querySelector('body');
const BRIGHT_CN = 'bright',
    DARK_CN = 'dark';
function changeToBright() {
    body.classList.add(BRIGHT_CN);
    body.classList.remove(DARK_CN);
}

function changeToDark() {
    body.classList.add(DARK_CN);
    body.classList.add(BRIGHT_CN);
}

function init() {
    dayBtn.addEventListener('click', changeToBright);
    nightBtn.addEventListener('click', changeToDark);
}

init();