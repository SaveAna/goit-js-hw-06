const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', statusCheck);

function statusCheck() {
  if (inputField.value.length === Number(inputField.dataset.length)) {
    inputField.classList.remove('invalid');
    inputField.classList.add('valid');
  } else {
    inputField.classList.add('invalid');
  }
}
