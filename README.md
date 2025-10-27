A Chrome extension that automatically opens all links in new tabs, giving you better control over your browsing experience.

## Features

- 🚀 Automatically opens all links in new tabs
- 🔄 Toggle functionality to enable/disable the extension
- 🛡️ Secure implementation with `noopener noreferrer` attributes
- 📱 Works with dynamically loaded content (AJAX, SPAs)
- 🎨 Clean, modern popup interface

## Installation

### From Chrome Web Store (Recommended)
*Coming soon - extension will be available on the Chrome Web Store*

### From Source (Developer Mode)

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the folder containing the extension files
6. The extension should now appear in your extensions list

### Usage

1. Click the extension icon in the Chrome toolbar to open the popup
2. Use the toggle button to enable/disable the extension
3. When enabled, all links on web pages will automatically open in new tabs
4. The extension works on all websites (`<all_urls>`)

## Files Structure

```
chrome-new-tab-extension/
├── manifest.json       # Extension configuration
├── content.js         # Main content script
├── background.js      # Background service worker
├── popup.html         # Popup interface
├── popup.js          # Popup functionality
├── icon16.png        # Extension icons (16x16, 48x48, 128x128)
├── icon48.png
├── icon128.png
└── README.md         # This file
```

## How It Works

The extension uses:

- **Content Scripts**: Injected into all web pages to modify link behavior
- **Storage API**: Saves user preferences (enabled/disabled state)
- **Mutation Observer**: Watches for dynamically added links
- **Message Passing**: Communication between popup and content scripts

## Security

- Uses `noopener noreferrer` attributes for security
- Minimal permissions required (`activeTab`, `storage`)
- No external network requests
- No data collection

## Browser Compatibility

- Chrome (Manifest V3)
- Other Chromium-based browsers (Edge, Brave, etc.)

## Development

To modify the extension:

1. Make your changes to the source files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test your changes

## Publishing to Chrome Web Store

To publish this extension for other users:

### Prerequisites
1. **Google Developer Account**: Register at [Chrome Web Store Developer Console](https://chrome.google.com/webstore/devconsole/)
2. **One-time fee**: $5 USD registration fee
3. **All required assets**: Icons, screenshots, descriptions

### Publishing Steps

1. **Prepare Your Extension Package**
   ```bash
   # Create a zip file with all extension files
   zip -r always-open-in-new-tab.zip . -x "*.git*" "*.DS_Store*" "README.md"
   ```

2. **Required Assets for Store Listing**
   - **Icons**: 16x16, 48x48, 128x128 PNG files ✅
   - **Screenshots**: 1280x800 or 640x400 pixels (recommended)
   - **Promotional images**: 440x280 pixels (optional)
   - **Detailed description**: Clear explanation of functionality

3. **Upload to Chrome Web Store**
   - Go to [Chrome Web Store Developer Console](https://chrome.google.com/webstore/devconsole/)
   - Click "Add new item"
   - Upload your zip file
   - Fill out store listing details
   - Set privacy policy (if collecting data)
   - Submit for review

4. **Review Process**
   - Initial review: 1-3 days
   - Subsequent updates: Few hours to 1 day
   - Extensions are automatically scanned for malicious code

### Store Listing Optimization

**Title**: "Always Open in New Tab"

**Short Description**: 
"Open all links in background tabs automatically. Stay on your current page while links load silently in the background."

**Detailed Description**:
```
🚀 STAY FOCUSED WHILE BROWSING

Always Open in New Tab automatically opens every link in a background tab, letting you stay on your current page. Perfect for research, reading articles, or browsing search results without losing your place.

✨ KEY FEATURES:
• All links open in background tabs automatically
• Stay on your current page - no interruptions
• Toggle on/off with one click
• Works on all websites
• Lightweight and fast
• No data collection

🎯 PERFECT FOR:
• Research and fact-checking
• Reading news and articles  
• Browsing search results
• Social media browsing
• Online shopping

🔒 PRIVACY & SECURITY:
• No data collection or tracking
• Minimal permissions required
• Open source code available
• Secure implementation

Simply install and browse normally - the extension handles everything automatically!
```

**Category**: Productivity

**Screenshots Needed**:
- Extension popup interface
- Before/after demonstration
- Settings/toggle functionality

### Post-Publication

1. **Monitor Reviews**: Respond to user feedback
2. **Regular Updates**: Fix bugs and add features
3. **Analytics**: Track usage via Chrome Web Store insights
4. **Promotion**: Share on social media, GitHub, etc.

## License

This project is open source. Feel free to modify and distribute as needed.

## Troubleshooting

**Extension not working on some sites?**

- Some sites may have Content Security Policies that restrict modifications
- Try refreshing the page after enabling the extension

**Toggle button not working?**

- Check that the extension has proper permissions
- Refresh the page after toggling

**Need to create PNG icons?**

- Convert the SVG file to PNG format in sizes 16x16, 48x48, and 128x128
- Update the manifest.json to reference PNG files instead of SVG
