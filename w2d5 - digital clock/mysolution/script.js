// set variables for each span
const firstHour = document.getElementById("first-hour");
const secondHour = document.getElementById("second-hour");
const firstMin = document.getElementById("first-min");
const secondMin = document.getElementById("second-min");
const firstSec = document.getElementById("first-sec");
const secondSec = document.getElementById("second-sec");

function translate(arg, place) {
  // arg as single char

  if (arg === "0") {
    place.className = "";
    place.classList.add("digit", "digit0");
  } else if (arg === "1") {
    place.className = "";
    place.classList.add("digit", "digit1");
  } else if (arg === "2") {
    place.className = "";
    place.classList.add("digit", "digit2");
  } else if (arg === "3") {
    place.className = "";
    place.classList.add("digit", "digit3");
  } else if (arg === "4") {
    place.className = "";
    place.classList.add("digit", "digit4");
  } else if (arg === "5") {
    place.className = "";
    place.classList.add("digit", "digit5");
  } else if (arg === "6") {
    place.className = "";
    place.classList.add("digit", "digit6");
  } else if (arg === "7") {
    place.className = "";
    place.classList.add("digit", "digit7");
  } else if (arg === "8") {
    place.className = "";
    place.classList.add("digit", "digit8");
  } else if (arg === "9") {
    place.className = "";
    place.classList.add("digit", "digit9");
  }
}

function showTime() {
  const today = new Date();

  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let strHour = hour.toString();
  let strMinutes = minutes.toString();
  let strSeconds = seconds.toString();

  if (strHour.length == 1) {
    strHour = "0" + strHour;
  }
  if (strMinutes.length == 1) {
    strMinutes = "0" + strMinutes;
  }
  if (strSeconds.length == 1) {
    strSeconds = "0" + strSeconds;
  }

  let finalTime = strHour + strMinutes + strSeconds;
  console.log(finalTime);
  translate(finalTime[0], firstHour);
  translate(finalTime[1], secondHour);
  translate(finalTime[2], firstMin);
  translate(finalTime[3], secondMin);
  translate(finalTime[4], firstSec);
  translate(finalTime[5], secondSec);
  setTimeout(showTime, 500);
}

showTime();
