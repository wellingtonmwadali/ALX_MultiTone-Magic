document.addEventListener('DOMContentLoaded', () => {
  const colorSelectors = document.querySelectorAll('.color-option');
  const chrome = window.chrome;

  // Add click event listeners to all color selectors
  colorSelectors.forEach((colorSelector) => {
    colorSelector.addEventListener('click', (event) => {
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
  });

  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
});
