const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("min");
const secondEl = document.getElementById("second");
const yearEl = document.querySelector(".year");

const yearNext = new Date().getFullYear() + 1;
console.log(yearNext);

const newYearDate = new Date(`Jan 1, ${yearNext} 00:00:00`).getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap/day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  yearEl.innerText = yearNext;
  dayEl.innerText = d;
  hourEl.innerText = h;
  minEl.innerText = m;
  secondEl.innerText = s;

  setTimeout(updateCountdown, 1000);
}