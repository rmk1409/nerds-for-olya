let ButtonWrite=document.querySelector(".button--write-to-us");
let FormSection=document.querySelector(".form-section");
let ButtonClose=FormSection.querySelector(".button-modal-close");
let TextName=FormSection.querySelector(".input-text--name");
let TextEmail=FormSection.querySelector(".input-text--email")
let FormWrite=FormSection.querySelector(".write-to-us-form");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

ButtonWrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  FormSection.classList.add("form-section--show");

  if (storage) {
    TextEmail.value = storage;
    TextName.focus();
  } else {
    TextEmail.focuse();
  }
});

ButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  FormSection.classList.remove("form-section--show");
  FormSection.classList.remove("form-section--error")
});

FormWrite.addEventListener("submit", function (evt) {
  if (!TextName.value || !TextEmail.value) {
    evt.preventDefault();
    FormSection.classList.add("form-section--error");
  }else {
    localStorage.setItem("login", TextEmail.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (FormSection.classList.contains("form-section--show")) {
      evt.preventDefault();
      FormSection.classList.remove("form-section--show");
      FormSection.classList.remove("form-section--error");
    }
  }
});
