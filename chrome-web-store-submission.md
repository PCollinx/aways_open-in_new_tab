# Chrome Web Store Submission Content

## 🔒 Privacy Policy

**Privacy Policy for Always Open in New Tab Extension**

Last updated: October 30, 2025

### Data Collection

This extension does NOT collect, store, or transmit any personal user data, browsing history, or personally identifiable information.

### Information We Do NOT Collect:

- Browsing history
- Personal information
- Website content
- User behavior tracking
- Analytics data
- Cookies or tracking pixels

### Local Storage Only:

The extension only stores one piece of information locally on your device:

- User preference (extension enabled/disabled state)
  This setting never leaves your device and is not shared with anyone.

### Permissions Explanation:

- **activeTab**: Required to modify link behavior on the current webpage
- **storage**: Required to remember your on/off preference
- **tabs**: Required to create new background tabs

### Third-Party Services:

This extension does not connect to any external servers or third-party services.

### Contact:

For questions about this privacy policy, contact: [your-email@domain.com]

---

## 🌐 Host Permission Justification

**Host Permission:** `<all_urls>`

**Justification:**
The extension requires host permission for all URLs because users expect the link modification functionality to work consistently across every website they visit. The extension needs to inject a content script that can:

1. **Detect all link elements** (`<a>` tags) on any webpage
2. **Add event listeners** to intercept click events on these links
3. **Modify link behavior** to open in new background tabs instead of the current tab
4. **Handle dynamically loaded content** on single-page applications and AJAX-heavy sites

Without broad host permissions, the extension would only work on pre-defined websites, which would severely limit its utility and create an inconsistent user experience. The functionality is purely client-side and does not send any data to external servers.

**Security Measures:**
- No data extraction or transmission
- Only modifies link target behavior locally
- Uses minimal DOM interaction
- Implements proper event handling with security attributes (`noopener noreferrer`)

---

## 💻 Remote Code Justification

**Remote Code Use:** This extension does NOT use any remote code.

**Justification:**
This extension does not load, execute, or fetch any remote code from external sources. All extension functionality is contained within the packaged extension files:

- **content.js**: Static content script bundled with the extension
- **background.js**: Static service worker bundled with the extension  
- **popup.js**: Static popup script bundled with the extension

**No Remote Dependencies:**
- No external JavaScript libraries loaded from CDNs
- No remote API calls or external service connections
- No dynamic code fetching or evaluation
- No external resources loaded at runtime

**Code Verification:**
All code is static, reviewable, and packaged within the extension ZIP file submitted to the Chrome Web Store. The extension operates entirely offline using only the bundled JavaScript files.

If Chrome Web Store is detecting potential remote code usage, this may be a false positive due to the extension's ability to interact with web content, but all execution happens locally with pre-packaged code only.

---

## 🎯 Single Purpose Description

**Primary Purpose:** Automatically open all clicked links in new background tabs while keeping the user on their current page.

**Detailed Explanation:**
This extension serves one specific purpose: to modify the default link-clicking behavior so that all links open in new background tabs instead of navigating away from the current page. This allows users to stay focused on their current content while collecting links to read later, improving browsing productivity and workflow efficiency.

The extension does not perform any other functions beyond this core link modification behavior and providing a simple toggle to enable/disable this functionality.

---

## 🔑 Permission Justifications

### 1. "activeTab" Permission

**What it does:** Allows the extension to access and modify the currently active webpage
**Why needed:** Required to detect and modify link elements (`<a>` tags) on the current page to change their target behavior
**How it's used:** The content script uses this permission to find all links on the page and add event listeners that prevent default navigation and instead open links in new tabs

### 2. "storage" Permission

**What it does:** Allows the extension to save settings locally on the user's device
**Why needed:** Required to remember the user's preference for whether the extension is enabled or disabled
**How it's used:** Stores a single boolean value (extensionEnabled: true/false) that persists between browser sessions, so the user doesn't have to re-enable the extension every time they start Chrome

### 3. "tabs" Permission

**What it does:** Allows the extension to create and manage browser tabs
**Why needed:** Required to programmatically create new background tabs when links are clicked
**How it's used:** The background script uses chrome.tabs.create() with {active: false} to open new tabs in the background without switching focus from the current tab

### Host Permission: "<all_urls>"

**What it does:** Allows the extension to run on all websites
**Why needed:** Users expect the extension to work on every website they visit
**How it's used:** The content script needs to modify link behavior across all websites to provide consistent functionality regardless of the domain

---

## 📝 Store Listing Content

### Short Description (132 characters max):

"Automatically opens all links in new background tabs. Stay focused while browsing and collect links for later reading."

### Detailed Description:

Always Open in New Tab enhances your browsing experience by automatically opening all clicked links in new background tabs, allowing you to stay focused on your current page while building a collection of content to explore later.

**🎯 Perfect For:**
• Research and article reading
• Shopping and price comparison  
• Social media browsing
• News consumption
• Academic research
• Job searching

**✨ Key Features:**
• All links automatically open in background tabs
• Stay on your current page (no unwanted tab switching)  
• One-click toggle to enable/disable
• Works on every website
• Lightweight and fast
• Privacy-focused (no data collection)

**🔒 Privacy & Security:**
• Zero data collection
• No tracking or analytics
• Minimal permissions required
• Secure link handling
• Open source code available

**🚀 How It Works:**

1. Install the extension
2. Browse any website normally
3. Click any link - it opens in a background tab
4. You stay on your current page
5. Switch to new tabs when ready

Perfect for multitaskers, researchers, and anyone who wants to browse more efficiently without losing their place on the current page.

### Categories:

**Primary:** Productivity
**Secondary:** Tools

### Keywords:

new tab, background tabs, productivity, browsing, links, focus, research, multitasking

---

## 🛡️ Content Guidelines Compliance

### Functionality:

✅ Single, clear purpose (link management)
✅ Does exactly what it promises
✅ No misleading features or hidden functionality

### Privacy:

✅ No data collection
✅ Clear privacy policy
✅ Transparent about permissions

### User Experience:

✅ Simple, intuitive interface
✅ Clear on/off toggle
✅ Works consistently across all sites

### Quality:

✅ No bugs or errors
✅ Clean, professional code
✅ Proper error handling
