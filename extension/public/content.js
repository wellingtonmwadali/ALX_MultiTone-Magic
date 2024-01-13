// content.js

// List of all possible themes
const themes = ['defaultTheme', 'theme-red', 'theme-green', 'theme-navy-blue','theme-black','theme-teal',
'theme-ocean','theme-purple','theme-pink','theme-orange', 'theme-yellow','theme-grey'];


// Function to remove all theme classes
function removeThemes() {
    themes.forEach(theme => document.body.classList.remove(theme));
}

// Updated applyTheme function
function applyTheme(theme) {
    if (theme) {
        removeThemes();
        document.body.classList.add(`theme-${theme}`);
    } else {
        console.log("Error in loading theme");
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

// Updated function to update extension state
function updateExtensionState(isEnabled) {
    if (!isEnabled) {
        // Clear any applied theme when the extension is disabled
        removeThemes();
    }
}

// Listen for changes in the extension state
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'updateExtensionState') {
        updateExtensionState(request.isEnabled);
    }
});

// Assume the initial extension state is enabled
updateExtensionState(true);
