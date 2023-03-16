const refs = {
  textValue: document.querySelector('#value'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
};

refs.incrementBtn.addEventListener('click', onIncrementClick);
refs.decrementBtn.addEventListener('click', onDecrementClick);

let counterValue = 0;

function onIncrementClick() {
  counterValue += 1;
  refs.textValue.textContent = counterValue;
}

function onDecrementClick() {
  counterValue -= 1;
  refs.textValue.textContent = counterValue;
}
