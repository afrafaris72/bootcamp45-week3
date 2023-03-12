const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-nav');

const showNav = () => {
  if (hamburgerMenu.classList.contains('hidden')) {
    hamburgerMenu.classList.remove('hidden');
    hamburger.children.icon.classList.remove('fa-bars');
    hamburger.children.icon.classList.add('fa-xmark');
  } else {
    hamburgerMenu.classList.add('hidden');
    hamburger.children.icon.classList.remove('fa-xmark');
    hamburger.children.icon.classList.add('fa-bars');
  }
};

hamburger.addEventListener('click', () => {
  showNav();
});
