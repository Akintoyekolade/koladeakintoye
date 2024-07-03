document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.animation-card, .animated');
  
    function checkScroll() {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
  
        if (cardTop < window.innerHeight && cardBottom > 0) {
          card.classList.add('show');
        } else {
          card.classList.remove('show');
        }
      });
    }
  
    // Listen for scroll event and call checkScroll
    window.addEventListener('scroll', checkScroll);
  
    // Initially check scroll position to display elements on page load
    checkScroll();
  });
