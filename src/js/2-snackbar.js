import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// іконки імпортовані з макету технічного завдання
import errorIcon from '../img/izitoast-icon.svg';
import closeIcon from '../img/izitoast-close.svg';
import okIcon from '../img/izitoast-ok.svg';

const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]').value;
  const stateInputs = document.querySelectorAll('input[name="state"]');
  const selectedState = [...stateInputs].find(input => input.checked);

  if (!delayInput || !selectedState) {
    showCustomToast(
      'warning',
      'Please fill the fields',
      'warning-message',
      '#FFA000',
      warningIcon
    );
    return;
  }

  const delay = parseInt(delayInput);
  const promise = new Promise((resolve, reject) => {
    let timeoutId = setTimeout(() => {
      if (selectedState.value === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      showCustomToast(
        'OK',
        `Fulfilled promise in ${delay}ms`,
        'success-message',
        '#59A10D',
        okIcon
      );
      form.reset();
    })
    .catch(delay => {
      showCustomToast(
        'Error',
        `Rejected promise in ${delay}ms`,
        'warning-message',
        '#ef4040',
        errorIcon
      );
      form.reset();
    });
});

function showCustomToast(title, message, className, backgroundColor, iconUrl) {
  iziToast.show({
    messageSize: 'auto',
    title: title,
    message: message,
    class: className,
    position: 'topCenter',
    titleColor: '#ffffff',
    titleSize: '16px',
    titleLineHeight: '1.5',
    messageColor: '#ffffff',
    messageSize: '16px',
    messageLineHeight: '1.5',
    backgroundColor: backgroundColor,
    iconColor: '#ffffff',
    iconUrl: iconUrl,
    imageWidth: 50,
    timeout: 10000,
    close: false,
    buttons: [
      [
        `<button type="button" style="background-color: ${backgroundColor}"><img src=${closeIcon}></button>`,
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast);
        },
      ],
    ],
    closeOnEscape: true,
    pauseOnHover: false,
  });
}
