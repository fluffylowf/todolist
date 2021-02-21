const clock = document.querySelector(".clock");

function getTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerText = `${hours > 9 ? hours : `0${hours}`} : ${
    minutes > 9 ? minutes : `0${minutes}`
  } : ${seconds > 9 ? seconds : `0${seconds}`}`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
