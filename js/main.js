let menuBtn = document.querySelector('.menu__button');
let menuContainer = document.querySelector('.menu__container');
menuBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('menu__container--active');
  menuBtn.classList.toggle('menu__button--show');
});

