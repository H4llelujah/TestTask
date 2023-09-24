import '../styles/css/styles.css';
import formSubmit from './form/formSubmit';

const button = document.querySelector('.feedback__button');

const modal = document.querySelector('.modal');

const modalContent = document.querySelector('.modal__content');

const form = document.querySelector('.form');

const inputsAndTextarea = form.querySelectorAll('input, textarea');

function toogleModal() {
    modal.classList.toggle('modal-active');
}

button.addEventListener('click', toogleModal);

modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
});

modal.addEventListener('click', toogleModal);

form.addEventListener('submit', (event) => {
    formSubmit(event, inputsAndTextarea);
});
