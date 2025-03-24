const clock = document.getElementById("clock")
const toggleFormat = document.getElementById("toggleFormat")
let is24HourFormat = true;

function updateClock() {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    if (!is24HourFormat) {
        let period = hours >= 12 ? 'PM' : 'AM'
        hours = hours % 12 || 12
        clock.innerText = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${(period)}`
    } else {
        clock.innerText = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
    }

}

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

toggleFormat.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat
    toggleFormat.innerText = is24HourFormat ? "Switch to 12-Hour Format" : "Switch to 24-Hour Format";
    updateClock()
})

setInterval(updateClock, 1000);
updateClock(); // Initialize immediately
