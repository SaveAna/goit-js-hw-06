const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', enterName);

function enterName() {
  if (nameInput.value === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameInput.value;
  }
}
