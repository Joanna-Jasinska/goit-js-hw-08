const _ = require('lodash');

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageInput = form.querySelector('textarea');
const submitBtn = form.querySelector('button');

function saveForm() {
  const email = emailInput.value;
  const message = messageInput.value;
  const savingData = { email, message };
  localStorage.setItem('feedback-form-state', JSON.stringify(savingData));
}

function loadForm() {
  let loaded = {};
  try {
    let { email, message } = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    loaded = { email, message };
  } catch (error) {
    email = '';
    message = '';
    loaded = { email, message };
    // console.log(`error parsing ` + localStorage.getItem('feedback-form-state'));
  }
  emailInput.value = loaded.email;
  messageInput.value = loaded.message;
}

function submit(e) {
  e.preventDefault();
  const email = emailInput.value;
  const message = messageInput.value;
  const sendingData = { email, message };
  console.log(sendingData);
  emailInput.value = '';
  messageInput.value = '';
  // saveForm();
  localStorage.clear();
}

form.addEventListener(
  'input',
  _.throttle(() => saveForm(), 500)
);
submitBtn.addEventListener('click', submit);
loadForm();
