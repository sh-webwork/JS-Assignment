// let countdown;
// let isRunning = false;

// function startTimer() {
//     if (isRunning) return;

//     isRunning = true;
//     let minutes = 1;
//     let seconds = 0;
//     const endTime = Date.now() + (minutes * 60 + seconds) * 1000;

//     countdown = setInterval(() => {
//         const timeLeft = endTime - Date.now();
//         if (timeLeft <= 0) {
//             clearInterval(countdown);
//             isRunning = false;
//             document.getElementById('minutes').textContent = '00';
//             document.getElementById('seconds').textContent = '00';
//             alert('Time is up!');
//             return;
//         }
//         const minutesLeft = Math.floor((timeLeft / 1000) / 60);
//         const secondsLeft = Math.floor((timeLeft / 1000) % 60);

//         document.getElementById('minutes').textContent = String(minutesLeft).padStart(2, '0');
//         document.getElementById('seconds').textContent = String(secondsLeft).padStart(2, '0');
//     }, 1000);
// }

// function resetTimer() {
//     clearInterval(countdown);
//     isRunning = false;
//     document.getElementById('minutes').textContent = '00';
//     document.getElementById('seconds').textContent = '00';
// }


var startTime;
var updatedTime;
var difference;
var tInterval;
var running = false;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function getFormattedTime() {
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 1);

    document.getElementById('minutes').innerText = (minutes < 10) ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = (seconds < 10) ? '0' + seconds : seconds;
    document.getElementById('milliseconds').innerText = (milliseconds < 100) ? '0' + milliseconds : milliseconds;
}

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTimer, 1);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    document.getElementById('milliseconds').innerText = '000';
}

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    getFormattedTime();
}










