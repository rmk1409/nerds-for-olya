const sliderButton2 = document.querySelector(`.js-slider-button--2`);
const sliderButton1 = document.querySelector(`.js-slider-button--1`);
const sliderButton3 = document.querySelector(`.js-slider-button--3`);
const promoSlider2 = document.querySelector(`.promo-slider-2`);
const promoSlider1 = document.querySelector(`.promo-slider-1`);
const promoSlider3 = document.querySelector(`.promo-slider-3`);

sliderButton2.addEventListener(`click`, function (evt) {

  evt.preventDefault();

  document.querySelector(`.slider-button--active`).classList.remove(`slider-button--active`);
  document.querySelector(`.promo-slider--active`).classList.remove(`promo-slider--active`);

  sliderButton2.classList.add(`slider-button--active`);
  promoSlider2.classList.add(`promo-slider--active`);
});

sliderButton1.addEventListener(`click`, function (evt) {

  evt.preventDefault();

  document.querySelector(`.slider-button--active`).classList.remove(`slider-button--active`);
  document.querySelector(`.promo-slider--active`).classList.remove(`promo-slider--active`);

  sliderButton1.classList.add(`slider-button--active`);
  promoSlider1.classList.add(`promo-slider--active`);
});

sliderButton3.addEventListener(`click`, function (evt) {

  evt.preventDefault();

  document.querySelector(`.slider-button--active`).classList.remove(`slider-button--active`);
  document.querySelector(`.promo-slider--active`).classList.remove(`promo-slider--active`);

  sliderButton3.classList.add(`slider-button--active`);
  promoSlider3.classList.add(`promo-slider--active`);
});
