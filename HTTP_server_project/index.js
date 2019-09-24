// These are variables to tell the computer where to find the images of the second, minute, and hour hands
const minuteHand = document.getElementById('second-hand');
const secondHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

// This variable keeps track of how many seconds have passed
let seconds = 0;

// This command tells the computer to run the moveTheClockHands and addSeconds functions one time every 1000 milliseconds, or once a second
setInterval(() => {
  moveTheClockHands();
  addSeconds();
}, 1000);

// This function tells the computer how much to add to the seconds timer each time the function is called.  This function is called once each second in the setInterval command above.
function addSeconds() {
  seconds = seconds + 25;
}

// This function tells the computer how many degrees to rotate each hand of the clock each time the function is called. This function is called once each second in the setInterval command above
function moveTheClockHands() {
  // rotate the second hand by 6 degrees
  secondHand.style.transform = `rotate(${seconds*(6)}deg)`;
  // rotate the minute hand by half of 6 degrees, or 3 degrees
  minuteHand.style.transform =  `rotate(${seconds*(6/2)}deg)`;
  // rotate the hour hand by a quarter of 6 degrees, or 1.5 degrees
  hourHand.style.transform = `rotate(${seconds*(6/4)}deg)`;
}
