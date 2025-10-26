// Content script to modify all links to open in new tabs
(function () {
  "use strict";

  let isEnabled = true;
  let observer = null;

  // Check initial state from storage
  chrome.storage.sync.get(["extensionEnabled"], function (result) {
    isEnabled = result.extensionEnabled !== false; // Default to true
    if (isEnabled) {
      initializeExtension();
    }
  });

  // Listen for messages from popup
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.action === "toggleExtension") {
      isEnabled = request.enabled;
      if (isEnabled) {
        initializeExtension();
      } else {
        disableExtension();
      }
    }
  });

  function initializeExtension() {
    processExistingLinks();
    if (observer) {
      observer.disconnect();
    }
    observer = observeNewLinks();
    console.log("Always Open in New Tab extension is active");
  }

  function disableExtension() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    console.log("Always Open in New Tab extension is disabled");
  }

  // Function to modify a single link
  function modifyLink(link) {
    if (isEnabled && !link.hasAttribute("data-new-tab-modified")) {
      link.setAttribute("data-new-tab-modified", "true");

      // Store original target in case we need to restore it
      const originalTarget = link.target;

      link.addEventListener(
        "click",
        function (event) {
          if (!isEnabled) return;

          // Check if user is already trying to open in new tab
          if (event.ctrlKey || event.metaKey || event.button === 1) {
            // User is already trying to open in new tab, don't interfere
            return;
          }

          // Prevent the default link behavior
          event.preventDefault();
          event.stopPropagation();

          // Get the URL
          const url = link.href;
          if (
            url &&
            url !== "#" &&
            !url.startsWith("javascript:") &&
            !url.startsWith("mailto:") &&
            !url.startsWith("tel:")
          ) {
            // Send message to background script to open in background tab
            chrome.runtime.sendMessage(
              {
                action: "openInBackgroundTab",
                url: url,
              },
              (response) => {
                if (chrome.runtime.lastError) {
                  console.error("Extension error:", chrome.runtime.lastError);
                  // Fallback: open normally if extension fails
                  window.location.href = url;
                } else if (!response || !response.success) {
                  console.error(
                    "Failed to open in background tab:",
                    response?.error
                  );
                  // Fallback: open normally if background script fails
                  window.location.href = url;
                }
                // If successful, do nothing - tab opened in background
              }
            );
          }
        },
        true // Use capture phase to ensure we catch it first
      );
    }
  }

  // Function to process all existing links
  function processExistingLinks() {
    if (!isEnabled) return;

    const links = document.querySelectorAll("a[href]");
    links.forEach(modifyLink);
  }

  // Function to handle dynamically added links
  function observeNewLinks() {
    const obs = new MutationObserver(function (mutations) {
      if (!isEnabled) return;

      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if the added node is a link
            if (node.tagName === "A" && node.href) {
              modifyLink(node);
            }

            // Check for links within the added node
            const links = node.querySelectorAll
              ? node.querySelectorAll("a[href]")
              : [];
            links.forEach(modifyLink);
          }
        });
      });
    });

    obs.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return obs;
  }

  // Handle cases where the DOM might still be loading
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      chrome.storage.sync.get(["extensionEnabled"], function (result) {
        isEnabled = result.extensionEnabled !== false;
        if (isEnabled) {
          processExistingLinks();
        }
      });
    });
  }
})();
