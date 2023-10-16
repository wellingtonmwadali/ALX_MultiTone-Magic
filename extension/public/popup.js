console.log("Popup script is running!");
document.addEventListener('DOMContentLoaded', function () {
  const colorOptions = document.querySelectorAll('.color-option');
  const switchElement = document.getElementById('theme-switch');
  const codeSnippetElement = document.getElementById('codeSnippet');

  // Retrieve the stored theme switch state and selected theme from localStorage
  const themeSwitchState = localStorage.getItem('themeSwitchState');
  const selectedTheme = localStorage.getItem('selectedTheme');

  // Apply the stored theme switch state and selected theme on page load
  if (themeSwitchState === 'on') {
    codeSnippetElement.style.display = 'block';
    switchElement.checked = true;
    if (selectedTheme) {
      setTheme(selectedTheme); // Apply the saved theme
    }
  } else {
    codeSnippetElement.style.display = 'none';
    switchElement.checked = false;
  }

  // Add an event listener to the theme switch
  switchElement.addEventListener('change', function () {
    if (this.checked) {
      codeSnippetElement.style.display = 'block';
      localStorage.setItem('themeSwitchState', 'on');
      if (selectedTheme) {
        setTheme(selectedTheme); // Apply the saved theme when the switch is turned on
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

  // When the user selects a theme
  function setTheme(themeName) {
    document.documentElement.className = themeName;
    localStorage.setItem('selectedTheme', themeName); // Save the selected theme
  }

  // When the page loads, check the extension's storage for the saved theme
  if (selectedTheme && themeSwitchState === 'on') {
    setTheme(selectedTheme);
  }

  function showColorName(color) {
    document.getElementById('color-name').innerText = `Color: ${color}`;
  }

  function hideColorName() {
    document.getElementById('color-name').innerText = '';
  }
});


