// Background script for handling tab creation
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openInBackgroundTab") {
    // Create new tab in background (active: false ensures user stays on current tab)
    chrome.tabs
      .create({
        url: request.url,
        active: false, // This is the key - opens in background
        openerTabId: sender.tab.id, // Link the new tab to the current one
      })
      .then((tab) => {
        sendResponse({ success: true, tabId: tab.id });
      })
      .catch((error) => {
        console.error("Failed to create tab:", error);
        sendResponse({ success: false, error: error.message });
      });

    // Return true to indicate we'll send response asynchronously
    return true;
  }
});

console.log("Always Open in New Tab background script loaded");
