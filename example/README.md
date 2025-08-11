# React Native ML Kit Example App

This example app demonstrates all the React Native ML Kit modules in a single comprehensive application.

## Features Demonstrated

- **Language Detection**: Detect the language of input text
- **Text Translation**: Translate text to different languages (Spanish in this example)
- **Barcode Scanning**: Ready for camera integration to scan barcodes
- **Face Detection**: Ready for camera integration to detect faces in images
- **Image Labeling**: Ready for camera integration to identify objects in images
- **Text Recognition (OCR)**: Ready for camera integration to extract text from images

## Dependencies

This example includes the following key dependencies:

- **React Native**: 0.73.6
- **React Native Reanimated**: ^3.10.1
- All React Native ML Kit modules (barcode-scanning, face-detection, identify-languages, image-labeling, text-recognition, translate-text)

## Setup Instructions

### Prerequisites
- Node.js 18+
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Navigate to the example directory:
   ```bash
   cd example
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. For iOS, install CocoaPods dependencies:
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

#### iOS
```bash
npm run ios
```

#### Android
```bash
npm run android
```

## Project Structure

```
example/
├── App.js                 # Main application component
├── package.json          # Project dependencies and scripts
├── babel.config.js       # Babel configuration with Reanimated plugin
├── metro.config.js       # Metro bundler configuration
├── index.js              # Entry point
├── app.json              # App configuration
├── ios/
│   └── Podfile           # iOS dependencies
└── android/
    ├── build.gradle      # Android build configuration
    ├── settings.gradle   # Android project settings
    ├── gradle.properties # Android gradle properties
    └── app/
        └── build.gradle  # App-level Android build config
```

## Key Features

### Language Detection
- Detects the primary language of input text
- Shows possible languages with confidence scores
- Uses the `@react-native-ml-kit/identify-languages` module

### Text Translation
- Translates text to Spanish (can be configured for other languages)
- Uses the `@react-native-ml-kit/translate-text` module

### Camera-Based Features
The app is set up for camera integration but shows placeholder functionality:
- **Barcode Scanning**: Ready for QR code and barcode detection
- **Face Detection**: Ready for face recognition in photos
- **Image Labeling**: Ready for object identification in images
- **Text Recognition**: Ready for OCR from camera images

## React Native Reanimated Integration

This example app includes React Native Reanimated v3.10.1 with proper configuration:

- Babel plugin configured in `babel.config.js`
- Ready for smooth animations and gestures
- Compatible with all ML Kit modules

## Troubleshooting

### iOS Issues
- Ensure iOS deployment target is 15.5 or higher
- Delete `Pods` folder and `Podfile.lock`, then reinstall with `pod install`
- Make sure Xcode is properly configured

### Android Issues
- Clean build: `cd android && ./gradlew clean`
- Ensure compileSdkVersion is 34 or higher
- Check that Android SDK and build tools are properly installed

## Next Steps

To extend this example:

1. **Add Camera Integration**: Implement camera functionality for barcode scanning, face detection, image labeling, and OCR
2. **Add More Languages**: Extend translation support to multiple target languages
3. **Add UI Enhancements**: Use React Native Reanimated for smooth animations
4. **Add Persistence**: Save results using AsyncStorage or a database
5. **Add Camera Permissions**: Implement proper permission handling for camera access

## License

This example is part of the React Native ML Kit project and follows the same license terms.