console.log("this is a digital clock project");

function updateClock(){

    // get the current date 
    let currentTime = new Date();
    
    // Extract hour , minutes and seconds from the date 
    // let currentDay = currenTime.getDay();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSecodes = currentTime.getSeconds();

    // pad 0 if minute or second is less than 10 (single digit )
    currentHour = (currentHour < 10 ? "0" : "") + currentHour ;
    currentMinutes = (currentMinutes < 10 ? "0": " ") + currentMinutes ;
    currentSecodes = (currentSecodes < 10 ? "0": " ") + currentSecodes;


    // convert railway clock to Am/PM clock 
    let timeOfDay = (currentHour < 12) ? "AM" : "PM" ;
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour ;
     
    // prepare the time string form hour , minute and seconds 
    let currentTimeStr = currentHour+":"+currentMinutes+":"+currentSecodes+" "+timeOfDay;


    // insert the time string the dom 
    document.getElementById("clock").innerHTML = currentTimeStr;

}

