var intervalID = window.setInterval(displayClock, 1000);

function displayClock(time) {
  // var sydney = toLocaleTimeString(timeZone: "Asia/Shanghai")

  var currentTime = new Date();
  var period = (currentTime.getHours() > 12) ? "PM" : "AM";

  var hour = hours(currentTime.getHours());
  var minute = addZero(currentTime.getMinutes());
  var second = addZero(currentTime.getSeconds());

  var timeFormat = hour + ":" + minute + ":" + second + period

  function hours(hours) {
    if (hours <= 12) {
      return hours;
    } else
      {return hours - 12;}
  }

  function addZero(unit) {
    stringUnit = unit.toString();
    unit = stringUnit.length < 2 ? "0" + stringUnit : stringUnit;
    return unit;
  }

  var clockDiv = document.getElementById("clock")

  clockDiv.innerText = timeFormat;
}

displayClock();
var intervalID = setInterval(displayClock, 1000);
