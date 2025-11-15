const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");
const timerE1 = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  timerE1.innerHTML = formattedTime;
}

function startTimer() {
  if (!interval) {
    interval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimer();
      } else {
        clearInterval(interval);
        interval = null;
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  timeLeft = 1500;
  updateTimer();
}

startE1.addEventListener("click", startTimer);
stopE1.addEventListener("click", stopTimer);
resetE1.addEventListener("click", resetTimer);
