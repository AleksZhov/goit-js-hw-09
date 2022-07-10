import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const flatpickrImportRef = document.querySelector('#datetime-picker');
const timerStartButtonRef = document.querySelector('button[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
let timerSetPoint = new Date();
let difference = -1;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let timeDifference = selectedDates[0].getTime() - Date.now();
    if (timeDifference <= 0) {
      Notify.failure('Please choose a date in the future');
    } else {
      timerStartButtonRef.removeAttribute('disabled');
    }
  },
};

timerStartButtonRef.setAttribute('disabled', 'true');
timerStartButtonRef.addEventListener('click', onStartBtnHandle);
flatpickrImportRef.addEventListener('input', timerInputHandle);

flatpickr(flatpickrImportRef, options);

function timerInputHandle(evt) {
  timerSetPoint = new Date(evt.target.value);
}

const timer = {
  start() {
    const timerStart = setInterval(() => {
      difference = timerSetPoint.getTime() - Date.now();
      const { days, hours, minutes, seconds } = convertMs(difference);
      daysRef.textContent = days;
      hoursRef.textContent = hours;
      minutesRef.textContent = minutes;
      secondsRef.textContent = seconds;
      if (
        days === '00' &&
        hours === '00' &&
        minutes === '00' &&
        seconds === '00'
      ) {
        clearInterval(timerStart);
      }
    }, 1000);
  },
};

function onStartBtnHandle() {
  timer.start();
  timerStartButtonRef.setAttribute('disabled', 'true');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
