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
        themeToggle.innerHTML = '<img src="assets/moon-icon.svg" alt="Dark Mode">';
        logoImage.src = 'assets/Logo_Light.png'; // Change the logo to the light version
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<img src="assets/sun-icon.svg" alt="Light Mode">';
        logoImage.src = 'assets/Logo_Dark.png'; // Change the logo to the dark version
    }
});