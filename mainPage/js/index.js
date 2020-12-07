'use strict';

// loading spinner

const renderSpinner = function (parentEl) {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="../img/icons.svg#icon-loader"></use>
    </svg>
  </div> 
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// SMOOTH SCROLLING

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  //Matching strategy
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// CARDS

const card = document.querySelectorAll('[id=cd]');
console.log(card);
const btn = document.querySelectorAll('[id=flip]');
console.log(btn);
// const flipCard = function () {
//   card.classList.toggle('is-flipped');
// };

const btnClose = document.querySelectorAll('[id=closeCard]');
console.log(btnClose);
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    let id = i;
    card[id].classList.toggle('is-flipped');
  });
  //     card[i].classList.toggle('is-flipped');
  //   });
}

for (let i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener('click', function () {
    card[i].classList.toggle('is-flipped');
  });

  document.addEventListener('keydown', function (event) {
    if (
      event.key === 'Escape' &&
      card[i].classList.contains('is-flipped') &&
      !btnClose[i].classList.contains('is-flipped')
    ) {
      card[i].classList.toggle('is-flipped');
    }
  });
}
// console.log('test');
// const modal = document.querySelector('[id=popupmodal]', ':target');
// console.log(modal);
// const closeModal = function () {
//   modal.classList.remove(':target');
// };
// console.log(closeModal());
// document.addEventListener('keydown', function (event) {
//   if (event.key === 'Escape' && modal.classList.contains(':target')) {
//     closeModal();
//   }
// });
