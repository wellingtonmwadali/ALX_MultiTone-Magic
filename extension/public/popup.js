console.log("Popup script is running!");
document.addEventListener('DOMContentLoaded', function () {
  const colorOptions = document.querySelectorAll('.color-option');
  const switchElement = document.getElementById('theme-switch');
  const codeSnippetElement = document.getElementById('codeSnippet');

  // Function to set the theme and save it to localStorage
  function setThemeAndStore(themeName) {
    document.documentElement.className = themeName;
    localStorage.setItem('selectedTheme', themeName);
  }

  // Function to retrieve the stored theme from localStorage
  function getStoredTheme() {
    return localStorage.getItem('selectedTheme');
  }

  // Function to apply the stored theme on page load
  function applyStoredTheme() {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      setThemeAndStore(storedTheme);
    }
  }

  // Apply the stored theme on page load
  applyStoredTheme();

  // Add an event listener to the theme switch
  switchElement.addEventListener('change', function () {
    if (this.checked) {
      codeSnippetElement.style.display = 'block';
      localStorage.setItem('themeSwitchState', 'on');
      const selectedTheme = getStoredTheme();
      if (selectedTheme) {
        setThemeAndStore(selectedTheme);
      }
    } else {
      codeSnippetElement.style.display = 'none';
      localStorage.setItem('themeSwitchState', 'off');
    }
  });

  // Add a click event listener to each color circle
  colorOptions.forEach((colorOption) => {
    colorOption.addEventListener('click', function () {
      const backgroundColor = window.getComputedStyle(colorOption).backgroundColor;
      chrome.runtime.sendMessage({ action: 'changeBackgroundColor', color: backgroundColor });
      localStorage.setItem('backgroundColor', backgroundColor);
    });
  });

  // Function to show the name of the selected color (not provided in the code).
  function showColorName(color) {
    document.getElementById('color-name').innerText = `Color: ${color}`;
  }

  // Function to hide the name of the selected color (not provided in the code).
  function hideColorName() {
    document.getElementById('color-name').innerText = '';
  }
});
