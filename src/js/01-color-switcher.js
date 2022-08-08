function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

let timerId = null;

refs.btnStart.addEventListener('click', () => {
  refs.btnStart.setAttribute('disabled', '');
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  refs.btnStart.removeAttribute('disabled');
});
