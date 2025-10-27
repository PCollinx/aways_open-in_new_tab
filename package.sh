#!/bin/bash

# Package Chrome Extension for Chrome Web Store
# This script creates a zip file ready for upload

echo "📦 Packaging Always Open in New Tab Extension..."

# Create package directory
PACKAGE_NAME="always-open-in-new-tab-v1.0.0"
PACKAGE_DIR="/tmp/$PACKAGE_NAME"

# Clean up any existing package
rm -rf "$PACKAGE_DIR"
rm -f "$PACKAGE_NAME.zip"

# Create package directory
mkdir -p "$PACKAGE_DIR"

echo "📋 Copying required files..."

# Copy essential files only
cp manifest.json "$PACKAGE_DIR/"
cp content.js "$PACKAGE_DIR/"
cp background.js "$PACKAGE_DIR/"
cp popup.html "$PACKAGE_DIR/"
cp popup.js "$PACKAGE_DIR/"

# Copy icons if they exist
if [ -f "icon16.png" ]; then
    cp icon16.png "$PACKAGE_DIR/"
    echo "✅ icon16.png included"
else
    echo "⚠️  icon16.png missing - you'll need to add this"
fi

if [ -f "icon48.png" ]; then
    cp icon48.png "$PACKAGE_DIR/"
    echo "✅ icon48.png included"
else
    echo "⚠️  icon48.png missing - you'll need to create this"
fi

if [ -f "icon128.png" ]; then
    cp icon128.png "$PACKAGE_DIR/"
    echo "✅ icon128.png included"
else
    echo "⚠️  icon128.png missing - you'll need to create this"
fi

# Create zip file
cd /tmp
zip -r "$PACKAGE_NAME.zip" "$PACKAGE_NAME"

# Move back to original directory
cd - > /dev/null
mv "/tmp/$PACKAGE_NAME.zip" "./"

echo ""
echo "🎉 Package created: $PACKAGE_NAME.zip"
echo ""
echo "📝 Next steps:"
echo "1. Create missing icon files (48px and 128px versions)"
echo "2. Go to https://chrome.google.com/webstore/devconsole/"
echo "3. Upload $PACKAGE_NAME.zip"
echo "4. Fill out the store listing details"
echo "5. Submit for review"
echo ""
echo "💡 Tip: Take screenshots of your extension in action for the store listing!"

# Clean up temp directory
rm -rf "$PACKAGE_DIR"