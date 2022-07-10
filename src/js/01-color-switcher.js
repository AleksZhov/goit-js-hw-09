const btnStartColorChangeRef = document.querySelector('button[data-start]');
const btnStopColorChangeRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');
let timerId = null;

function startChangeBodyColor() {
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStartColorChangeRef.setAttribute('disabled', 'true');
}

function stopChangeBodyColor() {
  clearInterval(timerId);
  btnStartColorChangeRef.removeAttribute('disabled');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStartColorChangeRef.addEventListener('click', startChangeBodyColor);
btnStopColorChangeRef.addEventListener('click', stopChangeBodyColor);
