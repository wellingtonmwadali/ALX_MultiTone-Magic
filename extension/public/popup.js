console.log("Popup script is running!");

document.addEventListener('DOMContentLoaded', function () {
  const themeSwitch = document.getElementById('themeSwitch');
  const colorOptions = document.querySelectorAll('.color-option');

  themeSwitch.addEventListener('change', function () {
      const colorSelector = document.getElementById('codeSnippet');

      if (themeSwitch.checked) {
          colorSelector.style.display = 'block';
      } else {
          colorSelector.style.display = 'none';
          resetTheme();
      }
  });

  colorOptions.forEach(function (colorOption) {
      colorOption.addEventListener('click', function () {
          const color = getColorName(this);
          setTheme(color);
      });
  });

  function setTheme(color) {
      resetTheme();
      const themeClassName = `theme-${color}`;
      document.body.classList.add(themeClassName);
      localStorage.setItem('currentTheme', color);
      console.log('Selected theme:', color);

   // Send a message to the background script
   chrome.runtime.sendMessage({action: 'setTheme', theme: color});
  }

  function resetTheme() {
      const themeColors = ['grey', 'light-green', 'midnight-blue', 'black', 'teal', 'dark-blue', 'purple', 'pink', 'light-blue', 'yellow', 'white', 'beige'];

      themeColors.forEach(function (color) {
          document.body.classList.remove(`theme-${color}`);
      });

      localStorage.removeItem('currentTheme');
  }

  function getColorName(element) {
      return element.classList.contains('color-option') ? element.classList[1] : '';
  }

  // Check if there's a saved theme in local storage
  const savedTheme = localStorage.getItem('currentTheme');
  if (savedTheme) {
      setTheme(savedTheme);
      themeSwitch.checked = true;
      document.getElementById('codeSnippet').style.display = 'block';
  }
});

