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


