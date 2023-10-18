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
  const colorOptions = document.querySelectorAll(".color-option");
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

