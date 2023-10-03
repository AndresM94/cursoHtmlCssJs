const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const amPmEl = document.getElementById('ampm');

function updateClock() {
  let hh = new Date().getHours();
  let mm = new Date().getMinutes();
  let ss = new Date().getSeconds();
  let ampm = "AM";

  if (hh > 12) {
    hh = hh - 12;
    ampm = "PM";
  }

  hh = hh < 10 ? '0' + hh : hh;
  mm = mm < 10 ? '0' + mm : mm;
  ss = ss < 10 ? '0' + ss : ss;

  hourEl.innerText = hh;
  minuteEl.innerText = mm;
  secondEl.innerText = ss;
  amPmEl.innerText = ampm;
}

// updateClock();
setInterval(updateClock, 1000);