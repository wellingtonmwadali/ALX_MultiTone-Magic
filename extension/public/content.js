// content.js

function applyTheme(theme) {
    if (theme) {
        document.body.classList.add(`theme-${theme}`);
    }
    else {
        console.log("error in loading theme");
    }
}

// Listen for changes in the theme or mode
chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (changes.currentTheme) {
        applyTheme(changes.currentTheme.newValue);
    }
});

// Apply theme on page load
chrome.storage.local.get(['currentTheme'], function(result) {
    applyTheme(result.currentTheme);
});







