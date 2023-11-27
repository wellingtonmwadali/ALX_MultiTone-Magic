// content.js

// Function to apply the theme
function applyTheme(theme) {
    if (theme) {
        document.body.classList.add(`theme-${theme}`);
    }
    else {
        console.log('No theme found in localStorage.');
    }
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'applyTheme') {
        applyTheme(request.theme);
    }
});

// Apply theme on page load
applyTheme(localStorage.getItem('currentTheme'));





  