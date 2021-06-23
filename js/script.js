const mobileMenuToggle = document.querySelector('#mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobie-nav-close');

// Open Menu
mobileMenuToggle.addEventListener('click', function() {

  mobileMenu.classList.add('is-active');
});

// Close Menu
mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('is-active');
});