const form = document.querySelector('.form');
const submitBtn = document.querySelector('button');
// const delay = () => {
//   delayFirst + position * step;
// };
// console.log(delay);
let delay = 2000;
let step = 500;
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  //savingData();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject('Error!');
      }
    }, delay);
  });
}

createPromise(2, 2500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
// function savingData(event) {
//   //event.preventDefault();
//   const {
//     elements: { delay, step, amount },
//   } = form;
//   const promiseSettings = {
//     delay: delay.value,
//     step: step.value,
//     amount: amount.value,
//   };
//   return { delay, step, amount };
// }
//form.addEventListener('input', savingData);
function generatePromises(number) {
  //const promiseSettings = savingData();
  // if (
  //   form.delayFirst.value === '' ||
  //   form.step.value === '' ||
  //   form.amount.value === ''
  // ) {
  //   return console.log('Please fill in all the fields!');
  // }
  for (let position = 1; position <= number; position++) {
    // const delay = promiseSettings.delay + position * promiseSettings.step;
    createPromise(position, delay);
  }
}
//form.reset();

generatePromises(6);
// submitBtn.addEventListener('submit', event => {
//   //event.preventDefault();
//   const promiseSettings = savingData();
//   generatePromises(6);
// });
