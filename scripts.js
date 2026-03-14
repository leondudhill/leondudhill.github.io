window.addEventListener('load', () => {
  // Splash removal on homepage only
  const splash = document.getElementById('splash');
  if (splash) {
    setTimeout(() => {
      splash.style.display = 'none';
    }, 2000);
  }

  // Animate cards and sections on scroll
  const cards = document.querySelectorAll('.card');
  const sections = document.querySelectorAll('section');

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if(cardTop < triggerBottom){
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }
    });

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if(sectionTop < triggerBottom){
        section.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});
