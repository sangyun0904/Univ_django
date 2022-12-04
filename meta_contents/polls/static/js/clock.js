const clock = document.querySelector("#time");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ap = hours >= 12? 'PM' : 'AM';
    clock.innerText = `Time: ${hours} : ${minutes} ${ap}`;
}

getClock()
setInterval(getClock, 1000);