const p = document.querySelector(".container1");
const newH1 = document.createElement("h1");
const newH2 = document.createElement("h1");

newH1.classList.add("ok","okk");
p.append(newH1);

newH2.classList.add("ok");
p.prepend(newH2);

let futureDate = new Date(2024, 7, 12, 4 , 40, 1);

let year  = futureDate.getFullYear();
let month = futureDate.toLocaleString('default', { month: 'long' });
let day = futureDate.getDate();
let hours = futureDate.getHours();

function formatTime(seconds) {
    let currentDate = new Date();
    let currentTime = currentDate.getTime();
    let futureTime = futureDate.getTime();

    let diff = futureTime - currentTime;

    const days = 24 * 60 * 60 * 1000;
    const hrs = 60 * 60 * 1000;
    const mins = 60 * 1000;
    const secs = 1000;

    let day = Math.floor(diff / days);
    let hr = Math.floor(diff % days / hrs);
    let min = Math.floor(diff % hrs / mins);
    let sec = Math.floor(diff % mins / secs);

    return `${day}d ${hr}h ${min}m ${sec}s`;
}

function updateTime() {    
    newH2.innerText = `Giveaway ends in ${day}th ${month}, ${year} at ${hours}pm`; 
    newH1.innerText = formatTime();
}

setInterval(updateTime,100);