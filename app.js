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


  document.addEventListener('DOMContentLoaded', function() {
    // Select top elements
    const topElements = document.querySelectorAll('.hero-section');
    
    // Trigger the fade-in effect
    topElements.forEach(function(element) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    });
  });




  // Scrolling icons
  const scrollContent = document.querySelector('.scroll-content');

// Clone the content to create the infinite effect
scrollContent.innerHTML += scrollContent.innerHTML + scrollContent.innerHTML;