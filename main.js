document.addEventListener('DOMContentLoaded', (event) => {
  const display = document.getElementById('display');
  const startBtn = document.getElementById('startBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const resetBtn = document.getElementById('resetBtn');

  let timer;
  let elapsedTime = 0;
  let isRunning = false;

  function updateDisplay() {
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  }

  function start() {
    if (!isRunning) {
      isRunning = true;
      const startTime = Date.now() - elapsedTime;
      timer = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
      }, 10);
    }
  }

  function pause() {
    if (isRunning) {
      isRunning = false;
      clearInterval(timer);
    }
  }

  function reset() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    updateDisplay();
  }

  startBtn.addEventListener('click', start);
  pauseBtn.addEventListener('click', pause);
  resetBtn.addEventListener('click', reset);
});