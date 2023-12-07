// content.js

function applyTheme(theme) {
    if (theme) {
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

// Function to update extension state
function updateExtensionState(isEnabled) {
    if (!isEnabled) {
        // Clear any applied theme when the extension is disabled
        document.body.classList.remove('defaultTheme', 'theme-red', 'theme-green', 'theme-navy-blue','theme-black','theme-teal',
        'theme-ocean','theme-purple','theme-pink','theme-orange', 'theme-yellow','theme-grey');
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







