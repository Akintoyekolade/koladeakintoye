function updateClock() {
    const currentDate = new Date();
  
    // Format date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
    
    // Format time with local GMT offset
    const offsetHours = -currentDate.getTimezoneOffset() / 60; // Calculate local GMT offset
    const formattedTime = currentDate.toTimeString().slice(0, 8); // Extract HH:MM:SS from time
  
    // Combine the date, time, and local GMT offset
    const clockDisplay = formattedDate + "<br>" + formattedTime + " GMT" + (offsetHours >= 0 ? "+" : "") + offsetHours;
  
    // Update the clock display
    document.getElementById('clock').innerHTML = clockDisplay;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock immediately
  updateClock();



  // Theme Toggle

  const logoImage = document.getElementById('logoImage');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1758 4.49992H16.6998C14.9869 6.09153 13.8859 8.23305 13.5882 10.5522C13.2905 12.8714 13.8148 15.2216 15.0701 17.1942C16.3254 19.1669 18.2323 20.6373 20.4593 21.3499C22.6863 22.0625 25.0925 21.9721 27.2598 21.0946C26.4261 23.1006 25.0635 24.8426 23.3174 26.1349C21.5713 27.4272 19.5071 28.2213 17.345 28.4324C15.183 28.6436 13.0042 28.2639 11.041 27.3338C9.07784 26.4037 7.40397 24.9582 6.19793 23.1514C4.9919 21.3446 4.29895 19.2443 4.193 17.0746C4.08704 14.9048 4.57206 12.747 5.59631 10.8313C6.62056 8.91557 8.14563 7.31382 10.0088 6.1969C11.872 5.07998 14.0035 4.48978 16.1758 4.48926V4.49992Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `;
        logoImage.src = 'assets/Logo_Light.png'; // Change the logo to the light version
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.17578 16.5H5.50911M16.1758 4.5V5.83333M26.8424 16.5H28.1758M16.1758 27.1667V28.5M7.64245 7.96667L8.57578 8.9M24.7091 7.96667L23.7758 8.9M23.7758 24.1L24.7091 25.0333M8.57578 24.1L7.64245 25.0333M10.8424 16.5C10.8424 17.9145 11.4044 19.271 12.4045 20.2712C13.4047 21.2714 14.7613 21.8333 16.1758 21.8333C17.5903 21.8333 18.9468 21.2714 19.947 20.2712C20.9472 19.271 21.5091 17.9145 21.5091 16.5C21.5091 15.0855 20.9472 13.729 19.947 12.7288C18.9468 11.7286 17.5903 11.1667 16.1758 11.1667C14.7613 11.1667 13.4047 11.7286 12.4045 12.7288C11.4044 13.729 10.8424 15.0855 10.8424 16.5Z" 
        stroke="var(--icon-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
        logoImage.src = 'assets/Logo_Dark.png'; // Change the logo to the dark version
    }
});















$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        $(document).off("scroll");

        $('.scroll-to-section a').each(function () {
            $(this).removeClass('active');
        });

        $(this).addClass('active');

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
            var width = $(window).width();

            if (width < 991) {
                $('.scroll-to-section').removeClass('active');
                $('.mainHeader .main-nav').slideUp(200); // $('.mainHeader .nav').slideUp(200);
            }

            // Adjust the scrollTop to factor in the height of the header
            var headerHeight = $('.mainHeader').height(); 
            $('html, body').stop().animate({
                scrollTop: (target.offset().top - 430)
            }, 800, 'easeInOutExpo', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        }
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.scroll-to-section a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.scroll-to-section a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}