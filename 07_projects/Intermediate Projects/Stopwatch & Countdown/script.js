let time = 0;
let timer = null;
let countdownMode = false;

function updateDisplay() {
    let hrs = Math.floor(time / 3600);
    let mins = Math.floor((time % 3600) / 60);
    let secs = time % 60;
    document.getElementById("display").textContent =
        `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
    if (timer) return;
    countdownMode = false;
    timer = setInterval(() => {
        time++;
        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    time = 0;
    updateDisplay();
}

function startCountdown() {
    let hrs = parseInt(document.getElementById("hours").value) || 0;
    let mins = parseInt(document.getElementById("minutes").value) || 0;
    let secs = parseInt(document.getElementById("seconds").value) || 0;
    time = hrs * 3600 + mins * 60 + secs;
    updateDisplay();
    countdownMode = true;
    clearInterval(timer);
    timer = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timer);
            timer = null;
            alert("Countdown finished!");
        }
    }, 1000);
}

updateDisplay();