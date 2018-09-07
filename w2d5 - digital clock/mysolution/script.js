const firstHour = document.querySelector(".first-hour");
const secondtHour = document.querySelector(".second-hour");
const firstMin = document.querySelector(".first-min");
const secondtMin = document.querySelector(".second-min");
const firsSec = document.querySelector(".first-sec");
const secondSec = document.querySelector(".second-sec");

const today = new Date();

let hour = today.getHours(); // number - int
let minutes = today.getMinutes();
let seconds = today.getSeconds();
