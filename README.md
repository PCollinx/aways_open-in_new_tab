A Chrome extension that automatically opens all links in new tabs, giving you better control over your browsing experience.

## Features

- 🚀 Automatically opens all links in new tabs
- 🔄 Toggle functionality to enable/disable the extension
- 🛡️ Secure implementation with `noopener noreferrer` attributes
- 📱 Works with dynamically loaded content (AJAX, SPAs)
- 🎨 Clean, modern popup interface

## Installation

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
├── popup.html         # Popup interface
├── popup.js          # Popup functionality
├── icon16.svg        # Extension icon (16x16)
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
