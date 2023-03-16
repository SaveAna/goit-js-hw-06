const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', onFocusLosing);

function onFocusLosing() {
  if (inputField.value.length === Number(inputField.dataset.length)) {
    inputField.classList.remove('invalid');
    inputField.classList.add('valid');
  } else {
    inputField.classList.remove('valid');
    inputField.classList.add('invalid');
  }
}
