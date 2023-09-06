console.log("Popup script is running!");
document.addEventListener('DOMContentLoaded', function () {
  const colorOptions = document.querySelectorAll('.color-option');

  // Add a click event listener to each color circle
  colorOptions.forEach((colorOption) => {
    colorOption.addEventListener('click', function () {
      // Get the background color of the clicked color circle
      const backgroundColor = window.getComputedStyle(colorOption).backgroundColor;

      // Send a message to the background script to change the background color
      chrome.runtime.sendMessage({ action: 'changeBackgroundColor', color: backgroundColor });
    });
  });
});


