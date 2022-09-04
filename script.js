'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openBox = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openBox);
}

const closeBox = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeBox);
overlay.addEventListener('click', closeBox);

const escFun = e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeBox();
  }
};

document.addEventListener('keydown', escFun);
//Add your Info in the open Model
