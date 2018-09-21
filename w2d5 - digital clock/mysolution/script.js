const firstHour = document.getElementById("first-hour");
const secondHour = document.getElementById("second-hour");
const firstMin = document.getElementById("first-min");
const secondMin = document.getElementById("second-min");
const firsSec = document.getElementById("first-sec");
const secondSec = document.getElementById("second-sec");

const secSpan = document.querySelector(".seconds");
const minSpan = document.querySelector(".minutes");
const hourSpan = document.querySelector(".hours");

let today = new Date();
console.log(today);

let hour = today.getHours(); // number - int
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let str; // for making zeros
let timeStr; // for display particular class with digit

window.setTimeout(makeNewTime, 1000);

function makeNewTime() {
  let secStr = seconds.toString();
  let minStr = minutes.toString();
  let hourStr = hour.toString();

  makeZero(secStr);
  console.log(secStr);
  makeZero(minStr);
  console.log(minStr);
  makeZero(hourStr);
  console.log(hourStr);
  function makeZero(str) {
    if (str.length < 10) {
      console.log(str);
      str.padStart(2, "0");
    }
  }

  // display for seconds
  for (let i = 0; i < secStr.length; i++) {
    if (secStr[0] === "0") {
      firstSec.className = " "; // clean classes
      firstSec.classList.add("digit digit0");
    } else if (secStr[1] === "0") {
      secondSec.className = "";
      secondSec.classList.add("digit", "digit0");
    } else if (secStr[1] === "1") {
      secondSec.className = "";
      secondSec.classList.add("digit", "digit1");
    } else if (secStr[1] === "2") {
      secondSec.className = "";
      secondSec.classList.add("digit", "digit2");
    } else if (secStr[1] === "3") {
      secondSec.className = "";
      secondSec.classList.add("digit", "igit3");
    } else if (secStr[1] === "4") {
      secondSec.className = "";
      secondSec.classList.add("digit", "digit4");
    } else if (secStr[1] === "5") {
      secondSec.className = "";
      secondSec.classList.add("digit", "digit5");
    } else if (secStr[1] === "6") {
      secondSec.className = "";
      secondSec.classList.add("digit", "digit6");
    } else if (secStr[1] === "7") {
      secondSec.className = "";
      secondSec.classList.add("digit", "digit7");
    } else if (secStr[1] === "8") {
      secondSec.className = " ";
      secondSec.classList.add("digit", "digit8");
    } else if (secStr[1] === "9") {
      secondSec.className = "";
      secondSec.classList.add("digit", "digit9");
    }
  }

  //display for minutes
  for (let i = 0; i < minStr.length; i++) {
    if (minStr[0] === "0") {
      firstMin.className = " "; // clean classes
      firstMin.classList.add("digit", "digit0");
    } else if (minStr[1] === "0") {
      secondMin.className = "";
      secondMin.classList.add("digit", "digit0");
    } else if (minStr[1] === "1") {
      secondMin.className = "";
      secondMin.classList.add("digit", "digit1");
    } else if (minStr[1] === "2") {
      secondMin.className = "";
      secondMin.classList.add("digit", "digit2");
    } else if (minStr[1] === "3") {
      secondMin.className = "";
      secondMin.classList.add("digit", "digit3");
    } else if (minStr[1] === "4") {
      secondMin.className = "";
      secondMin.classList.add("digit", "digit4");
    } else if (minStr[1] === "5") {
      secondMin.className = "";
      secondMin.classList.add("digit", "digit5");
    } else if (minStr[1] === "6") {
      secondMin.className = "";
      secondMin.classList.add("digit", "digit6");
    } else if (minStr[1] === "7") {
      secondMin.className = "";
      secondMin.classList.add("digit", "digit7");
    } else if (minStr[1] === "8") {
      secondMin.className = "";
      secondMin.classList.add("digit", "digit8");
    } else if (minStr[1] === "9") {
      secondMin.className = "";
      secondMin.classList.add("digit", "digit9");
    }
  }

  //display for hours
  for (let i = 0; i < hourStr.length; i++) {
    if (hourStr[0] === "0") {
      firstHour.className = ""; // clean classes
      firstHour.classList.add("digit", "digit0");
    } else if (hourStr[1] === "0") {
      secondHour.className = "";
      secondHour.classList.add("digit", "digit0");
    } else if (hourStr[1] === "1") {
      secondHour.className = "";
      secondHour.classList.add("digit", "digit1");
    } else if (hourStr[1] === "2") {
      secondHour.className = "";
      secondHour.classList.add("digit", "digit2");
    } else if (hourStr[1] === "3") {
      secondHour.className = "";
      secondHour.classList.add("digit", "digit3");
    } else if (hourStr[1] === "4") {
      secondHour.className = "";
      secondHour.classList.add("digit", "digit4");
    } else if (hourStr[1] === "5") {
      secondHour.className = "";
      secondHour.classList.add("digit", "digit5");
    } else if (hourStr[1] === "6") {
      secondHour.className = " ";
      secondHour.classList.add("digit", "digit6");
    } else if (hourStr[1] === "7") {
      secondHour.className = "";
      secondHour.classList.add("digit", "digit7");
    } else if (hourStr[1] === "8") {
      secondHour.className = "";
      secondHour.classList.add("digit", "digit8");
    } else if (hourStr[1] === "9") {
      secondHour.className = "";
      secondMin.classList.add("digit", "digit9");
    }
  }
}
