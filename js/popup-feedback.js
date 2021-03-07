const popup_feedback = document.querySelector('.popup-feedback-wrapper-form');
const close_popup_feedback = popup_feedback.querySelector('.close-popup-feedback');
const open_popup_feedback = document.querySelector('.contacts-button');
const feedback_form = popup_feedback.querySelector('.popup-feedback');
const user_name = popup_feedback.querySelector('.user-name');
const user_email = popup_feedback.querySelector('.user-email');
const text_letter = popup_feedback.querySelector('.text-letter');


let isStorageSupport = true;
let storage_name = '';
let storage_email = '';

try {
  storage_name = localStorage.getItem('name');
  storage_email = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

open_popup_feedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup_feedback.classList.add('show-popup');
  if(storage_name){
    user_name.value = storage_name;
    user_email.focus();
  } else {
    user_name.focus();
  }
  if(storage_email){
    user_email.value = storage_email;
    text_letter.focus();
  } else {
    user_email.focus();
  }
});

close_popup_feedback.addEventListener('click', function () {
  popup_feedback.classList.remove('show-popup');
  popup_feedback.classList.remove('error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup_feedback.classList.contains('show-popup')) {
      evt.preventDefault();
      popup_feedback.classList.remove('show-popup');
      popup_feedback.classList.remove('error');
    }
  }
});

feedback_form.addEventListener('submit', function (evt) {
  if (!user_name.value || !user_email.value || !text_letter.value){
    evt.preventDefault();
    popup_feedback.classList.remove("error");
    popup_feedback.offsetWidth;
    popup_feedback.classList.add('error');
  } else {
    if (isStorageSupport){
      localStorage.setItem('name', user_name.value);
      localStorage.setItem('email', user_email.value);
    }
  }
});

