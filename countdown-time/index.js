 const daysEl = document.getElementById('days')
 const hoursEl = document.getElementById('hours')
 const minutsEl = document.getElementById('minutes')
 const secondsEl = document.getElementById('seconds')

const newYears = '1 jan 2022';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const totalSeconds = (newYearsDate-currentDate) /1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minuts = Math.floor(totalSeconds /60) %60;
    const seconds =  Math.floor(totalSeconds) %60;

    daysEl.innerHTML =  days;
    hoursEl.innerHTML =  formatTime(hours);
    minutsEl.innerHTML =  formatTime(minuts);
    secondsEl.innerHTML = formatTime(seconds);
    
    // console.log(days , hours , minuts , seconds);
}
function formatTime(time){
    return time<10 ? (`0${time}`) : time;
}
// initial call 

countdown();
setInterval(countdown,1000);
