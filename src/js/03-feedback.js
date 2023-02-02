import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

function saveValues() {
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({ email: input.value, message: textarea.value })
  );
}

function handleSubmit(event) {
  event.preventDefault();
  console.log({ email: input.value, message: textarea.value });
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function fillForm() {
  const values = localStorage.getItem(LOCALSTORAGE_KEY);

  if (values) {
    const parsedValues = JSON.parse(values);
    input.value = parsedValues.email;
    textarea.value = parsedValues.message;
  }
}

form.addEventListener('input', throttle(saveValues, 500));
form.addEventListener('submit', handleSubmit);

fillForm();
