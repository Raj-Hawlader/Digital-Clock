function updateClock() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${day}/${month}/${year}`;

    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');

    const hourDeg = ((now.getHours() % 12) / 12) * 360 + (minutes / 60) * 30;
    const minuteDeg = (minutes / 60) * 360;
    const secondDeg = (seconds / 60) * 360;

    hourElement.style.transform = `rotate(${hourDeg}deg)`;
    minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
    secondElement.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
