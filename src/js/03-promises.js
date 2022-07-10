const formRef = document.querySelector('.form');
const startActionBtnRef = document.querySelector('button[type="submit"]');
let initDelay = 0;
let step = 0;
let quantity = 0;
formRef.addEventListener('submit', onSubmitAction);

function onSubmitAction(evt) {
  console.log(evt.currentTarget.values);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
