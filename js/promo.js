let SliderButton2 = document.querySelector(".slider-button--2");
console.log(SliderButton2)
let SliderButton1 = document.querySelector(".slider-button--1");
let SliderButton3 = document.querySelector(".slider-button--3");
let PromoSlider2 = document.querySelector(".promo-slider-2");
let PromoSlider1 = document.querySelector(".promo-slider-1");
let PromoSlider3 = document.querySelector(".promo-slider-3");

SliderButton2.addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".slider-button--active").classList.remove("slider-button--active");
  document.querySelector(".promo-slider--active").classList.remove("promo-slider--active");
  SliderButton2.classList.add("slider-button--active");
  PromoSlider2.classList.add("promo-slider--active");
});

SliderButton1.addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".slider-button--active").classList.remove("slider-button--active");
  document.querySelector(".promo-slider--active").classList.remove("promo-slider--active");
  SliderButton1.classList.add("slider-button--active");
  PromoSlider1.classList.add("promo-slider--active");
});

SliderButton3.addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".slider-button--active").classList.remove("slider-button--active");
  document.querySelector(".promo-slider--active").classList.remove("promo-slider--active");
  SliderButton3.classList.add("slider-button--active");
  PromoSlider3.classList.add("promo-slider--active");
});
