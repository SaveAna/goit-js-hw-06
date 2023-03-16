const colorValue = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener('click', onBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorValue.textContent = color;
}
