
const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    bodyEl: document.querySelector('body')
};

console.log(refs.btnStop)
let timerId = null;
refs.btnStart.disabled = false;
refs.btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

refs.btnStart.addEventListener('click', () => {
   timerId = setInterval(() => {
       const currColor = getRandomHexColor();
       refs.bodyEl.style.backgroundColor = currColor;
       console.log('тицьнула');
   }, 1000);
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
});

refs.btnStop.addEventListener('click', () => {
    console.log('тепер тут тицьнула')
    clearInterval(timerId);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
    
});

