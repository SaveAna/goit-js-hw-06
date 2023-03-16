const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const formData = {
    email,
    password,
  };

  if (email === '') {
    alert('Enter your email!');
    return;
  }

  if (password === '') {
    alert('Enter your password!');
    return;
  }

  console.log(`email: ${email}`);
  console.log(`password: ${password}`);
  console.log(formData);
  form.reset();
}
