function updateClock() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour12: false };
    const formattedDate = currentDate.toLocaleString('en-US', options);
    document.getElementById('clock').innerHTML = formattedDate + ' ' + currentDate.toLocaleTimeString('en-US');
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock immediately
  updateClock();