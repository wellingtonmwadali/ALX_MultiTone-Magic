// background.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'changeBackgroundColor') {
      // Forward the message to the content script of the active tab
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tabId = tabs[0]?.id; // Use optional chaining to handle undefined tabs[0]
        if (tabId) {
          // Execute your script in the tab with tabId
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: (color) => {
              document.body.style.backgroundColor = color;
            },
            args: [message.color],
          });
        };
      });
  }});
  