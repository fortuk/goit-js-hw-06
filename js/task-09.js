const bodyEl = document.body;
const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', onButtonClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick() {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
    spanEl.textContent = color;
}