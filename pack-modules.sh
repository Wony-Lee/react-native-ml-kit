#!/bin/bash

# Create lightweight tarballs for testing

echo "Creating lightweight packages for local testing..."

# Create a dist directory
mkdir -p dist

# Pack only the modules you need
modules=(
  "barcode-scanning"
  "face-detection"
  "image-labeling" 
  "text-recognition"
  "translate-text"
  "identify-languages"
)

for module in "${modules[@]}"; do
  echo "Packing @react-native-ml-kit/$module..."
  cd "$module"
  npm pack --pack-destination ../dist
  cd ..
done

echo "✅ All packages created in ./dist/"
echo ""
echo "To use in your project:"
echo "  npm install /path/to/react-native-ml-kit/dist/react-native-ml-kit-barcode-scanning-*.tgz"
echo "  # Install other modules as needed"