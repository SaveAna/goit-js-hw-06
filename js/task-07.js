const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

slider.addEventListener('input', onInputChange);

function onInputChange() {
  text.style.fontSize = `${slider.value}px`;
}

onInputChange();
