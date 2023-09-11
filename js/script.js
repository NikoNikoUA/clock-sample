// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)
const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];

const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const elements = {
  day: document.querySelector(".date-day"),
  date: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  digitalClock: document.querySelector(".digital-clock"),
  secondsArrow: document.querySelector(".clock-seconds__arrow"),
  minutesArrow: document.querySelector(".clock-minutes__arrow"),
  hoursArrow: document.querySelector(".clock-hours__arrow"),
};

setInterval(() => {
  const currentTime = new Date();

  const current = {
    day: arrDay[currentTime.getDay()],
    date: currentTime.getDate(),
    month: namesOfMonth[currentTime.getMonth()],
    year: currentTime.getFullYear(),
    hours: currentTime.getHours(),
    minutes: currentTime.getMinutes(),
    seconds: currentTime.getSeconds(),
    milli: currentTime.getMilliseconds(),
  };

  elements.day.textContent = current.day;
  elements.date.textContent = current.date;
  elements.month.textContent = current.month;
  elements.year.textContent = current.year;

  elements.digitalClock.textContent = `Поточний час ${formatTime(
    current.hours
  )} : ${formatTime(current.minutes)} : ${formatTime(current.seconds)}`;

  const secondsDeg = (360 / 60) * current.seconds; //+ (360 / 60 /1000) * current.milli;
  const minutesDeg = (360 / 60) * current.minutes;
  const hoursDeg =
    (360 / 12) * current.hours + (360 / 12 / 60) * current.minutes;

  elements.secondsArrow.style.transform = `rotate(${secondsDeg}deg)`;
  elements.minutesArrow.style.transform = `rotate(${minutesDeg}deg)`;
  elements.hoursArrow.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);

function formatTime(value) {
  return value.toString().padStart(2, "0");
}

// const form = document.querySelector(".feedback-form");
// const KEY_LS = "feedback-form-state";

// form.addEventListener("input", handlerInput);
// form.addEventListener("submit", handlerSubmit);

// let data = JSON.parse(localStorage.getItem(KEY_LS)) ?? {};
// const { email, message } = form.elements;

// email.value = data.email ?? "";
// message.value = data.message ?? "";

// function handlerInput(evt) {
//   data[evt.target.name] = evt.target.value;
//   localStorage.setItem(KEY_LS, JSON.stringify(data));
// }

// function handlerSubmit(evt) {
//   evt.preventDefault();
//   console.log(data);

//   form.reset();
//   data = {};
//   localStorage.removeItem(KEY_LS);
// }
