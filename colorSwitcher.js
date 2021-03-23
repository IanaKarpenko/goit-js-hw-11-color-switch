const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startButton: document.querySelector('[data-action="start"]'),
    stopButton: document.querySelector('[data-action="stop"]'),
    bodyElem: document.querySelector("body"),
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function changeColorStartButtonHandler(event) {
  sessionStorage.setItem("intervalId", setInterval(() => {
    refs.bodyElem.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000));
  refs.startButton.disabled = true;
}

function stopChangingColorsButtonHandler(event) {
  clearInterval(sessionStorage.getItem("intervalId"));
  sessionStorage.removeItem("intervalId");
  refs.startButton.disabled = false;
}

refs.startButton.addEventListener("click", changeColorStartButtonHandler);
refs.stopButton.addEventListener("click", stopChangingColorsButtonHandler);
