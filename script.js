"use strict";
window.addEventListener("load", calculateTime);

function calculateTime() {
  let date = new Date();
  let dayNumber = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hour >= 12 ? "PM" : "AM";
  let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  hour = hour % 12;
  hour = hour ? hour : "12";
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("day").innerHTML = dayNames[dayNumber];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("ampm").innerHTML = ampm;

  setTimeout(calculateTime, 200);
}

calculateTime();
