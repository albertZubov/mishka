var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var notJs = document.querySelector('.page');

notJs.classList.remove('page--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--closed');
});

