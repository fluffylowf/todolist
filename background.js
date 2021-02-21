const body = document.querySelector("body");

const imageUrl = [
  "https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1563950708942-db5d9dcca7a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];
const imageNum = imageUrl.length;

function paintBackground(num) {
  body.style.backgroundImage = `url(${imageUrl[num]})`;
}
function getNum() {
  const num = Math.floor(Math.random() * imageNum);
  paintBackground(num);
}

function init() {
  getNum();
}
init();
