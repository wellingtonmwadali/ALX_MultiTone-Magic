//Set receiving end for popup.js when user changes theme
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


