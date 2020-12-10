let menuBtn = document.querySelector('.menu-btn');
let menuContainer = document.querySelector('.menu-container');
menuBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('show');
  menuBtn.classList.toggle('show');
});

