(function() {
    // Securely store the start time
    let startTime = null;
  
    // Function to create and display the popup
    function displayPopup() {
      const popup = document.createElement('div');
      popup.id = 'yapper-popup'; // Unique ID for styling
     
      popup.textContent = 'kyu nahi ho rahi padai???';
      //meme injected
      const img = document.createElement('img') ;
      img.setAttribute('src', 'https://pbs.twimg.com/media/GGcG_gFW0AAoz1V?format=jpg&name=medium') ;
      popup.appendChild(img) ;
      
      // Button to close the popup
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.id = 'closeButton' ;
     
      closeButton.addEventListener('click', () => popup.remove());
      popup.appendChild(closeButton);
  
      document.body.appendChild(popup);
    }

    function createNew() {
      const buttonPopup = document.createElement('div');
      buttonPopup.id = 'yapper-popup-buttons'; // Different ID
      buttonPopup.style.cssText = `
        display: flex;
        justify-content: space-between; /* Center buttons horizontally */
        padding: 10px;
        background-color: #f0f0f0;
        border: 1px solid #ddd;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      `;
  
      // Add your three buttons with desired styles and functionality here
      const button1 = document.createElement('button');
      button1.textContent = 'Button 1';
      button1.style.cssText = `
        padding: 5px 10px;
        background-color: #ddd;
        border: none;
        cursor: pointer;
      `;
      // Add event listener for button 1 functionality
  
      const button2 = document.createElement('button');
      button2.textContent = 'Button 2';
      button2.style.cssText = `
        padding: 5px 10px;
        background-color: #ddd;
        border: none;
        cursor: pointer;
      `;
      // Add event listener for button 2 functionality
  
      const button3 = document.createElement('button');
      button3.textContent = 'Button 3';
      button3.style.cssText = `
        padding: 5px 10px;
        background-color: #ddd;
        border: none;
        cursor: pointer;
      `;
      // Add event listener for button 3 functionality
  
      buttonPopup.appendChild(button1);
      buttonPopup.appendChild(button2);
      buttonPopup.appendChild(button3);
  
      return buttonPopup;
    }

    popup.addEventListener('mouseover', ()=>{
      const link = createNew() ;
      popup.parentNode.replaceChild(link, popup) ;
    })

   
  
    // Function to check for 10 minutes and display popup
    function checkTime() {
      if (startTime && (Date.now() - startTime) >=  60 * 1000) { // 10 minutes in milliseconds
        displayPopup();
        startTime = null; // Reset start time after displaying popup
      }
    }
  
    // Start timer on page load
    startTime = Date.now();
  
    // Run check every minute for efficiency
    setInterval(checkTime, 60 * 1000);
  })();
  