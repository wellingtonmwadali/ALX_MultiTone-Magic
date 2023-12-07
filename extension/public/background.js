/// Background Script

let isExtensionEnabled = true; // Default state

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'setTheme') {
        // Update the stored theme
        chrome.storage.local.set({ 'currentTheme': request.theme }, function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
            } else {
                console.log('Stored theme updated:', request.theme);
            }
        });
    } else if (request.action === 'toggleExtension') {
        // Update the extension state
        isExtensionEnabled = request.isEnabled;

        // If the extension is now disabled, remove the stored theme
        if (!isExtensionEnabled) {
            chrome.storage.local.remove('currentTheme', function() {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                } else {
                    console.log('Stored theme removed.');
                }
            });
        }

        // Broadcast the state change to all tabs
        chrome.tabs.query({}, function(tabs) {
            tabs.forEach(function(tab) {
                // Send a message to the content script in each tab
                chrome.tabs.sendMessage(tab.id, { action: 'updateExtensionState', isEnabled: isExtensionEnabled }, function(response) {
                    // Handle response if needed
                    if (chrome.runtime.lastError) {
                        console.error('Error sending message:', chrome.runtime.lastError.message);
                    }
                });
            });
        });
    }
});

// Set the default theme based on user's selection or use a default value
chrome.storage.local.get(['currentTheme'], function(result) {
    const defaultTheme = result.currentTheme || 'default_theme';
    chrome.storage.local.set({ 'currentTheme': defaultTheme }, function() {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } else {
            console.log('Default theme set on page load:', defaultTheme);
        }
    });
});


