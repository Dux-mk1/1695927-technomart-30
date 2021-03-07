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
