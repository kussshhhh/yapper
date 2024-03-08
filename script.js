(function() {
    // Securely store the start time
    let startTime = null;
  
    // Function to create and display the popup
    function displayPopup() {
      const popup = document.createElement('div');
      popup.id = 'yapper-popup'; // Unique ID for styling
      popup.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        padding: 10px;
        background-color: black ;
        border: 1px solid #ddd;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        font-family: sans-serif;
        display : flex ; 
        flex-direction: column ; 
        z-index: 9999; /* Ensure popup is on top */
      `;
      popup.textContent = 'kyu nahi ho rahi padai???';
      //meme injected
      const img = document.createElement('img') ;
      img.setAttribute('src', 'https://pbs.twimg.com/media/GGcG_gFW0AAoz1V?format=jpg&name=360x360') ;
      popup.appendChild(img) ;
      
      // Button to close the popup
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.style.cssText = `
        margin-top: 5px;
        padding: 5px 10px;
        background-color: black;
        border: none;
        cursor: pointer;
      `;
      closeButton.addEventListener('click', () => popup.remove());
      popup.appendChild(closeButton);
  
      document.body.appendChild(popup);
    }
  
    // Function to check for 10 minutes and display popup
    function checkTime() {
      if (startTime && (Date.now() - startTime) >=  6 * 1000) { // 10 minutes in milliseconds
        displayPopup();
        startTime = null; // Reset start time after displaying popup
      }
    }
  
    // Start timer on page load
    startTime = Date.now();
  
    // Run check every minute for efficiency
    setInterval(checkTime, 6 * 1000);
  })();
  