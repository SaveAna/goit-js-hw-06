const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  if (formData.get('email') === '') {
    alert('Enter your email!');
    return;
  }

  if (formData.get('password') === '') {
    alert('Enter your password!');
    return;
  }

  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });

  form.reset();
}
