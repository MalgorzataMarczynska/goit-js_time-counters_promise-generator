import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('.value[data-days]');
const dataHours = document.querySelector('.value[data-hours]');
const dataMinutes = document.querySelector('.value[data-minutes]');
const dataSeconds = document.querySelector('.value[data-seconds]');
let timerId = null;
startBtn.disabled = true;
const flatpick = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const now = new Date();
    const dateNow = now.getTime();
    const selectedDate = selectedDates[0].getTime();
    startBtn.disabled = false;
    if (selectedDate < dateNow) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }

    function timeCounter() {
      const now = new Date();
      const dateNow = now.getTime();
      const selectedDate = selectedDates[0].getTime();
      const ms = selectedDate - dateNow;
      if (ms <= 0) {
        clearInterval(timerId);
        startBtn.disabled = false;
        return;
      }
      if (ms < 60000) {
        dataSeconds.style.color = 'red';
      }
      const counter = convertMs(ms);
      return counter;
    }

    startBtn.addEventListener('click', () => {
      timerId = setInterval(() => {
        timeCounter();
        startBtn.disabled = true;
      }, 1000);
    });
  },
});
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  dataDays.textContent = addLeadingZero(days, 2);
  dataHours.textContent = addLeadingZero(hours, 2);
  dataMinutes.textContent = addLeadingZero(minutes, 2);
  dataSeconds.textContent = addLeadingZero(seconds, 2);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value, targetLength) {
  return value.toString().padStart(targetLength, 0);
}
