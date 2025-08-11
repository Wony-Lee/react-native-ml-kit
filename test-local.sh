#!/bin/bash

# Script to link react-native-ml-kit modules for local testing

echo "Setting up local testing for react-native-ml-kit modules..."

# Build all packages first
echo "Building packages..."
yarn install
yarn build

# Create links for each module
modules=(
  "barcode-scanning"
  "face-detection" 
  "image-labeling"
  "text-recognition"
  "translate-text"
  "identify-languages"
)

for module in "${modules[@]}"; do
  echo "Creating link for @react-native-ml-kit/$module..."
  cd "$module" && npm link && cd ..
done

echo "✅ All modules linked successfully!"
echo ""
echo "To use in your project, run:"
echo "  cd your-project"
echo "  npm link @react-native-ml-kit/barcode-scanning"
echo "  npm link @react-native-ml-kit/face-detection"
echo "  # ... link other modules as needed"