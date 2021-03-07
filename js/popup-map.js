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
