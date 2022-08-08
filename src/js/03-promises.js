import Notiflix from 'notiflix';

const elementForm = document.querySelector('.form');

elementForm.addEventListener('submit', formValue);

function formValue(e) {
  e.preventDefault();
  let counter = 0;
  let delay = Number(e.target.delay.value);
  const step = Number(e.target.step.value);
  const amount = Number(e.target.amount.value);

  setTimeout(() => {
    const setIntervalId = setInterval(() => {
      if (amount === counter) {
        clearInterval(setIntervalId);
      } else {
        counter++;
        createPromise(counter, delay)
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
        delay += step;
      }
    }, step);
  }, delay);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const response = { position, delay };
  if (shouldResolve) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}
