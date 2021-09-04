const setHours = document.getElementById('hours')
const setMinute = document.getElementById('minitue');
const setSecond = document.getElementById('second');
const isAM = document.getElementById('amPm');

const showTime = () => {
    let time = new Date();
    let hour = time.getHours();
    let minitue = time.getMinutes();
    let second = time.getSeconds();
    let date = time.getDate();
  
    let isAm = "AM";

    if(hour > 12){
        hour -= 12;
        isAm = 'PM'
    }
    if(hour == 0){
        isAm = 'AM'
    }
    hour = hour < 10 ? "0" + hour : hour;
    minitue = minitue < 10? "0" + minitue : minitue;
    second = second < 10 ? '0' + second : second; 

    setHours.innerText = hour;
    setMinute.innerText = minitue;
    setSecond.innerText = second;
    isAM.innerText = isAm;
}
showTime();
setInterval(showTime, 1000);
