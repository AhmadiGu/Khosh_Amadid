const navButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

navButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  navButton.classList.toggle('open');
  console.log('Menu button clicked');
});

/* Filter in explore page */

