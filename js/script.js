'use strict';

// ELEMENTOS
const btnMenu = document.querySelector('.nav__menu');
const iconMenu = document.querySelector('.nav__icon');
const navList = document.querySelector('.nav__list--mobile');
const overlay = document.querySelector('.overlay');
const circle = document.querySelector('.circle');
const btnUp = document.querySelector('.btn-up');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section');
const nav = document.querySelector('.nav--desktop');
const nav__link = document.querySelectorAll('.nav__link');
const nav__logo = document.querySelector('.nav__logo');

const headerObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      btnUp.classList.add('btn-up--active');
      nav.classList.add('nav--active');
      nav__link.forEach(link => {
        link.classList.add('nav__link--active');
      });
    } else {
      btnUp.classList.remove('btn-up--active');
      nav.classList.remove('nav--active');
      nav__link.forEach(link => {
        link.classList.remove('nav__link--active');
      });
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
headerObserver.observe(header);

const sectionObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');

    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0.25,
  }
);

sections.forEach(function (ele) {
  sectionObserver.observe(ele);
  ele.classList.add('section--hidden');
});

btnUp.addEventListener('click', function (e) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

btnMenu.addEventListener('click', function (e) {
  iconMenu.classList.toggle('nav__icon--active');
  navList.classList.toggle('nav__list--active');
  overlay.classList.toggle('hidden');
});

overlay.addEventListener('click', function (e) {
  iconMenu.classList.toggle('nav__icon--active');
  navList.classList.toggle('nav__list--active');
  overlay.classList.toggle('hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    overlay.classList.add('hidden');
    iconMenu.classList.remove('nav__icon--active');
    navList.classList.remove('nav__list--active');
  }
});
