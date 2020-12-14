let menuBtn = document.querySelector('.menu__button');
let menuContainer = document.querySelector('.menu__container');
menuBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('menu__container--active');
  menuBtn.classList.toggle('menu__button--show');
});


let dateInput = document.querySelector('.date-input');
let todayDate = new Date();
var targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 14);
let tdd = todayDate.getDate();
let tmm = todayDate.getMonth() + 1;
let tyy = todayDate.getFullYear();
let fdd = targetDate.getDate();
let fmm = targetDate.getMonth() + 1;
let fyy = targetDate.getFullYear();

let dateTodayString = tyy + "-" + (tmm < 10 ? '0' + tmm : tmm) + "-" + (tdd < 10 ? '0' + tdd : tdd);
let dateTargetString = fyy + "-" + (fmm < 10 ? '0' + fmm : fmm) + "-" + (fdd < 10 ? '0' + fdd : fdd);


dateInput.value = dateTodayString;
dateInput.min = dateTodayString;
dateInput.max = dateTargetString;