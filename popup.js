// Popup script for the Always Open in New Tab extension
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-btn");
  const statusText = document.getElementById("status-text");

  // Get the current state of the extension
  chrome.storage.sync.get(["extensionEnabled"], function (result) {
    const isEnabled = result.extensionEnabled !== false; // Default to true
    updateUI(isEnabled);
  });

  // Toggle button click handler
  toggleBtn.addEventListener("click", function () {
    chrome.storage.sync.get(["extensionEnabled"], function (result) {
      const currentState = result.extensionEnabled !== false;
      const newState = !currentState;

      chrome.storage.sync.set({ extensionEnabled: newState }, function () {
        updateUI(newState);

        // Send message to content scripts to update their state
        chrome.tabs.query({}, function (tabs) {
          tabs.forEach(function (tab) {
            chrome.tabs
              .sendMessage(tab.id, {
                action: "toggleExtension",
                enabled: newState,
              })
              .catch(() => {
                // Ignore errors for tabs that don't have the content script
              });
          });
        });
      });
    });
  });

  // Update the UI based on extension state
  function updateUI(isEnabled) {
    if (isEnabled) {
      toggleBtn.textContent = "Disable Extension";
      toggleBtn.className = "toggle-btn enabled";
      statusText.textContent = "Extension is active";
    } else {
      toggleBtn.textContent = "Enable Extension";
      toggleBtn.className = "toggle-btn disabled";
      statusText.textContent = "Extension is disabled";
    }
  }

  // Options link handler (placeholder for future functionality)
  document
    .getElementById("options-link")
    .addEventListener("click", function (e) {
      e.preventDefault();
      // Future: Open options page
      console.log("Options page not yet implemented");
    });
});
