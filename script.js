document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < windowHeight * 0.9) {  // déclenche un peu avant le bas de la fenêtre
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // On lance une première fois au chargement
  checkVisibility();
});


document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.map-card');

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < windowHeight * 0.9) {
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility();
});
