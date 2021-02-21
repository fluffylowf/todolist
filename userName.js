const userNameForm = document.querySelector(".form--username"),
  input = userNameForm.querySelector(".username__input");
const userName = document.querySelector(".userName");
const greeeting = document.querySelector(".greeting");

function userNameFormHandler(e) {
  e.preventDefault();
  setUserName();
}

userNameForm.addEventListener("submit", userNameFormHandler);

function setUserName() {
  localStorage.setItem("USERNAME", input.value);
  userName.innerText = input.value;
  greeeting.classList.add("show");
  userNameForm.classList.add("hide");
}

function checkUserNameExist() {
  if (localStorage.getItem("USERNAME")) {
    userName.innerText = localStorage.getItem("USERNAME");
    greeeting.classList.add("show");
    userNameForm.classList.add("hide");
  } else {
    userNameForm.classList.remove("hide");
  }
}

function init() {
  checkUserNameExist();
}
init();
