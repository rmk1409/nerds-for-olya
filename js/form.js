const buttonWrite = document.querySelector(`.button--write-to-us`);
const formSection = document.querySelector(`.form-section`);
const buttonClose = formSection.querySelector(`.button-modal-close`);
const inputName = formSection.querySelector(`.input-text--name`);
const inputEmail = formSection.querySelector(`.input-text--email`);
const formWrite = formSection.querySelector(`.write-to-us-form`);

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem(`name`);
} catch (err) {
  isStorageSupport = false;
}

buttonWrite.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  formSection.classList.add(`form-section--show`);

  if (storage) {
    inputName.value = storage;
    inputEmail.focus();
  } else {
    inputName.focus();
  }
});

buttonClose.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  formSection.classList.remove(`form-section--show`);
  formSection.classList.remove("form-section--error");
});

formWrite.addEventListener(`submit`, function (evt) {
  console.log(`Попытка`)
  if (!(inputName.value && inputEmail.value)) {
    evt.preventDefault();
    formSection.classList.remove("form-section--error");
    formSection.offsetWidth = formSection.offsetWidth;
    formSection.classList.add("form-section--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem(`name`, inputName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formSection.classList.contains(`form-section--show`)) {
      evt.preventDefault();
      formSection.classList.remove(`form-section--show`);
      formSection.classList.remove("form-section--error");
    }
  }
});
