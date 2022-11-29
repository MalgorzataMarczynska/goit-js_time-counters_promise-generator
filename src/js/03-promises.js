import Notiflix from 'notiflix';
const form = document.querySelector('.form');
const createPromiseBtn = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        return { position, delay };
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function savingData() {
  const {
    elements: { delay, step, amount },
  } = form;
  const promiseSettings = {
    delay: delay.value,
    step: step.value,
    amount: amount.value,
  };
  return promiseSettings;
}

function generatePromises(number) {
  const promiseSettings = savingData();
  let firstDelay = Number(promiseSettings.delay);
  let step = Number(promiseSettings.step);
  for (let i = 1; i <= number; i++) {
    const wholeDelay = firstDelay + i * step;
    createPromise(i, wholeDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  savingData(event);
  const promiseSettings = savingData();
  let number = Number(promiseSettings.amount);
  generatePromises(number);
});
