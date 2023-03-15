const refs = {
  textValue: document.querySelector('#value'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
};

refs.incrementBtn.addEventListener('click', increment);
refs.decrementBtn.addEventListener('click', decrement);

let counterValue = 0;

function increment() {
  counterValue += 1;
  refs.textValue.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  refs.textValue.textContent = counterValue;
}
