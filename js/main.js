const popup_basket = document.querySelector('.popup-basket');
const close_popup_basket = popup_basket.querySelectorAll('.close-popup-basket');
let open_popup_basket = document.querySelectorAll('.cart-btn');

for (let button of  open_popup_basket ) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup_basket.classList.add('show-popup');
  })
}

for (let close_button of close_popup_basket){
  close_button.addEventListener('click', function () {
    popup_basket.classList.remove('show-popup');
  })
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup_basket.classList.contains('show-popup')) {
      evt.preventDefault();
      popup_basket.classList.remove('show-popup');
    }
  }
});

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

const open_popup_map = document.querySelector('.small-map-link');
const popup_map = document.querySelector('.popup-map');
const close_popup_map = popup_map.querySelector('.close-popup-map');

open_popup_map.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup_map.classList.add('show-popup');
});

close_popup_map.addEventListener('click', function () {
  popup_map.classList.remove('show-popup');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup_map.classList.contains('show-popup')) {
      evt.preventDefault();
      popup_map.classList.remove('show-popup');
    }
  }
});

const slider_tools = document.querySelector('.slider-tools');
const slide_tools_first = slider_tools.querySelector('.slide-tools-first');
const slide_tools_second = slider_tools.querySelector('.slide-tools-second')
const button_change_slide_prev = slider_tools.querySelector('.button-arrow-prev');
const button_change_slide_next = slider_tools.querySelector('.button-arrow-next');
const button_slide_circle_first = slider_tools.querySelector('.button-circle-first');
const button_slide_circle_second = slider_tools.querySelector('.button-circle-second');

button_change_slide_prev.addEventListener('click', function () {
  slide_tools_first.classList.add('slide-active');
  slide_tools_second.classList.remove('slide-active');
  button_slide_circle_first.classList.remove('button-current');
  button_slide_circle_second.classList.add('button-current');
});

button_change_slide_next.addEventListener('click',function () {
  slide_tools_first.classList.remove('slide-active');
  slide_tools_second.classList.add('slide-active');
  button_slide_circle_first.classList.add('button-current');
  button_slide_circle_second.classList.remove('button-current');
});

button_slide_circle_first.addEventListener('click', function () {
  slide_tools_first.classList.add('slide-active');
  slide_tools_second.classList.remove('slide-active');
  button_slide_circle_first.classList.remove('button-current');
  button_slide_circle_second.classList.add('button-current');
});

button_slide_circle_second.addEventListener('click', function () {
  slide_tools_first.classList.remove('slide-active');
  slide_tools_second.classList.add('slide-active');
  button_slide_circle_first.classList.add('button-current');
  button_slide_circle_second.classList.remove('button-current');
});

const slider_service = document.querySelector('.service');
const button_service_first = slider_service.querySelector('.button-service-first');
const button_service_second = slider_service.querySelector('.button-service-second');
const button_service_third = slider_service.querySelector('.button-service-third');
const service_slide_first = slider_service.querySelector('.service-slide-image-1');
const service_slide_second = slider_service.querySelector('.service-slide-image-2');
const service_slide_third = slider_service.querySelector('.service-slide-image-3');

button_service_first.addEventListener('click',function () {
  button_service_first.classList.add('button-service-current');
  button_service_second.classList.remove('button-service-current');
  button_service_third.classList.remove('button-service-current');
  service_slide_first.classList.add('slide-active');
  service_slide_second.classList.remove('slide-active');
  service_slide_third.classList.remove('slide-active');
});

button_service_second.addEventListener('click',function () {
  button_service_first.classList.remove('button-service-current');
  button_service_second.classList.add('button-service-current');
  button_service_third.classList.remove('button-service-current');
  service_slide_first.classList.remove('slide-active');
  service_slide_second.classList.add('slide-active');
  service_slide_third.classList.remove('slide-active');
});

button_service_third.addEventListener('click',function () {
  button_service_first.classList.remove('button-service-current');
  button_service_second.classList.remove('button-service-current');
  button_service_third.classList.add('button-service-current');
  service_slide_first.classList.remove('slide-active');
  service_slide_second.classList.remove('slide-active');
  service_slide_third.classList.add('slide-active');
});
