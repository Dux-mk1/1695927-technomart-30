const popup_basket = document.querySelector('.popup-basket');
const close_popup_basket = popup_basket.querySelectorAll('.close-popup-basket');
let open_popup_basket = document.querySelectorAll('.cart-btn');

for (let button of  open_popup_basket ) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup_basket.classList.add('show-popup');
  })
};

for (let close_button of close_popup_basket){
  close_button.addEventListener('click', function () {
    popup_basket.classList.remove('show-popup');
  })
};

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup_basket.classList.contains('show-popup')) {
      evt.preventDefault();
      popup_basket.classList.remove('show-popup');
    }
  }
});
