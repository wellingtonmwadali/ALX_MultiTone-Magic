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

// switch icon toggle
const switchElement = document.getElementById('theme-switch');
const codeSnippetElement = document.getElementById('codeSnippet');

switchElement.addEventListener('change', function() {
  if (this.checked) {
    codeSnippetElement.style.display = 'block';
  } else {
    codeSnippetElement.style.display = 'none';
  }
});

// When the user selects a theme
function setTheme(themeName) {
  document.documentElement.className = themeName;
  chrome.storage.sync.set({ 'theme': themeName }); //  save selected theme
}

// When the page loads, the exent it checks the extension's storage for the saved theme
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get(['theme'], function(result) {
    const savedTheme = result.theme;
    if (savedTheme) {
      setTheme(savedTheme); // If a theme is found, it applies the saved theme
    }
  });
});


// // Get the current URL.
// var url = window.location.href;
// // Get the background color that the user has selected.
// var color = localStorage.getItem("backgroundColor");
// // If the user has not selected a background color, use the default color.
// if (color === null) {
//   color = "#ffffff";
// }
// // Set the background color of the webpage.
// document.body.style.backgroundColor = color;
// // Listen for the user to refresh the page.
// window.addEventListener("beforeunload", function() {
//   // Save the background color that the user has selected.
//   localStorage.setItem("backgroundColor", color);
// });
