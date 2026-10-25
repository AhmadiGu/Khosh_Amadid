const navButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

navButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  navButton.classList.toggle('open');
  console.log('Menu button clicked');
});

/* Filter in explore page */
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.cards');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    console.log(`Filter button clicked: ${filter}`);
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
     filterButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    console.log(`Active filter button:`);
  });
});
