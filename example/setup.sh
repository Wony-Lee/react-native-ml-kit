#!/bin/bash

echo "🚀 Setting up React Native ML Kit Example with Reanimated 3.16.5"
echo "================================================"

# Clean previous installations
echo "🧹 Cleaning previous installations..."
rm -rf node_modules
rm -rf ios/Pods
rm -f ios/Podfile.lock
rm -rf android/app/build
rm -rf android/build

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# iOS Setup
echo "🍎 Setting up iOS..."
cd ios
pod install
cd ..

# Android Setup
echo "🤖 Cleaning Android build..."
cd android
./gradlew clean
cd ..

echo "✅ Setup complete!"
echo ""
echo "To run the app:"
echo "  iOS: npm run ios"
echo "  Android: npm run android"
echo ""
echo "Compatibility:"
echo "  ✅ React Native 0.75.3"
echo "  ✅ Reanimated 3.16.5"
echo "  ✅ Firebase SDK 11.15.0"
echo "  ✅ Google ML Kit 7.0.0 (iOS)"