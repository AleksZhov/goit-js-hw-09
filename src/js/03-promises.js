import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formRef = document.querySelector('.form');
const startActionBtnRef = document.querySelector('button[type="submit"]');
let initDelay = 0;
let step = 0;
let quantity = 0;
formRef.addEventListener('submit', onSubmitAction);

function onSubmitAction(evt) {
  evt.preventDefault();
  initDelay = Number(evt.target.delay.value);
  step = Number(evt.target.step.value);
  quantity = Number(evt.target.amount.value);

  for (let i = 1; i <= quantity; i += 1) {
    let delay = initDelay + (i - 1) * step;
    createPromise(i, delay);
    console.log(i, delay);
  }
}

// function createPromise() {
//   const timer = setTimeout(() => {
//     const shouldResolve = Math.random() > 0.3;

//     if (shouldResolve) {
//       Notify.success(`Promise ${position}Everything going well`);
//     } else {
//       Notify.failure(`Promise ${position} rejected`);
//     }
//   }, delay);
// }
function createPromise(position, delay) {
  const promise = new Promise((fulfill, reject) => {
    const timer = setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        Notify.success(`Fulfilled promise${position}  in${delay}ms`);
      } else {
        Notify.failure(`Rejected promise${position}  in${delay}ms`);
      }
    }, delay);
  });
}
