const clockHands = document.querySelectorAll(".hand");

const startClock = () => {
    const date = new Date();
    const timeArray = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const hourHand = timeArray[1]/2 + timeArray[0] * 30;
    console.log(hourHand);
    clockHands[0].style.transform = `rotate(${hourHand}deg)`;
    clockHands[1].style.transform = `rotate(${timeArray[1] * 6}deg)`;
    clockHands[2].style.transform = `rotate(${timeArray[2] * 6}deg)`
}
startClock()
setInterval(startClock, 1000)