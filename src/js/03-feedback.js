import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

function saveValues(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  );
}

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log({
    email: email.value,
    message: message.value,
  });
  event.currentTarget.reset();
  localStorage.clear();
}

form.addEventListener('input', throttle(saveValues, 500));
form.addEventListener('submit', handleSubmit);

const parsedValues = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
  input.value = parsedValues.email;
  textarea.value = parsedValues.message;
}
