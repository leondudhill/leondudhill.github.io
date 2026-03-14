// Remove splash after 2 seconds
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  setTimeout(() => {
    splash.style.display = 'none';
  }, 2000);

  // Animate cards when in viewport
  const cards = document.querySelectorAll('.card');

  function checkCards() {
    const triggerBottom = window.innerHeight * 0.9;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if(cardTop < triggerBottom){
        card.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', checkCards);
  checkCards();
});
