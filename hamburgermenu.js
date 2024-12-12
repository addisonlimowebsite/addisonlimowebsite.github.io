
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

const closeMenu = () => {
  hamburger.classList.remove('active');
  menu.classList.remove('visible');
};

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburger.classList.toggle('active');
  menu.classList.toggle('visible');
});

document.body.addEventListener('click', closeMenu);
menu.addEventListener('click', closeMenu);
