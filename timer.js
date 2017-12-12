// countdown to
var countTo = new Date("Dec 12, 2017 18:30:00").getTime();
var x = 0;

// update timer every second
setInterval(function() {

  var timeNow = new Date().getTime();
  var diff = countTo - timeNow;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}, 1000);
