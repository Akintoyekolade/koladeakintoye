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