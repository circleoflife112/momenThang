const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username); // greeting.innerText = `Hello ${username}`; greeting.classList.remove(HIDDEN_CLASSNAME); >> 함수 하나로 생략해서 작성. 이 함수에 username을 매개변수로 받는다.. >> 이해 필요.
}

function paintGreetings(username) {
  //여기서 username은 onLoginSubmit 함수에 있는 const username이 아니고 localStorage에서 값을 받은 savedUsername 이다.
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}
