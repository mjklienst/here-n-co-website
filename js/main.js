const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('#nav-links');
const year = document.querySelector('#year');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}
