const refs = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  const amount = refs.input.value;
  createBoxes(amount);
}

function onDestroyBtnClick() {
  refs.boxes.innerHTML = '';
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');

    newBox.setAttribute(
      'style',
      `width: ${30 + i * 10}px; 
      height: ${30 + i * 10}px; 
      background-color: ${getRandomHexColor()};`
    );

    refs.boxes.appendChild(newBox);
    refs.boxes.setAttribute('style', 'display: flex; gap: 30px; flex-wrap: wrap;');
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
