document.addEventListener('DOMContentLoaded', () => {
    const colorGrid = document.getElementById('color-grid');
  
    colorGrid.addEventListener('click', (event) => {
      const color = event.target.style.backgroundColor;
      if (color) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: changeBackgroundColor,
            args: [color],
          });
        });
      }
    });
  
    function changeBackgroundColor(color) {
      document.body.style.backgroundColor = color;
    }
  });
  