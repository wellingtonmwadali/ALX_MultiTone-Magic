console.log("Popup script is running!");
document.addEventListener("DOMContentLoaded", function () {
  // Check if a theme is already selected in Local Storage
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme) {
    applyTheme(selectedTheme);
  }

  // Activate the extension when the icon is clicked
  const extensionIcon = document.getElementById("theme-switch");
  extensionIcon.addEventListener("click", function () {
    const codeSnippet = document.getElementById("codeSnippet");
    codeSnippet.style.display = "block";
  });

  // Theme Selection
  const colorOptions = document.querySelector(".color-option");
  colorOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const selectedTheme = option.getAttribute("data-theme");
      applyTheme(selectedTheme);
      // Store the selected theme in Local Storage
      localStorage.setItem("selectedTheme", selectedTheme);
    });
  });

  // Function to apply the selected theme to the webpage
  function applyTheme(theme) {
    const body = document.body;

    // Remove existing theme classes
    const themeClasses = ["brown-theme", "light-green-theme", /* Add other theme classes */];
    body.classList.remove(...themeClasses);

    // Apply the selected theme class
    body.classList.add(theme);
  }
});


// When the user selects a theme
function setTheme(themeName) {
  document.documentElement.className = themeName;
  chrome.storage.sync.set({ 'theme': themeName }); //  save selected theme
}

// WheAn the page loads, it checks the extension's storage for the saved theme
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get(['theme'], function(result) {
    const savedTheme = result.theme;
    if (savedTheme) {
      setTheme(savedTheme); // If a theme is found, it applies the saved theme
    }
    else {
      setTheme('light'); // If no theme is found, it applies the light theme
    }
  });
});



