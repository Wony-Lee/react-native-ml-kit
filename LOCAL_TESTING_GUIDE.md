# Local Testing Guide for react-native-ml-kit

## Quick Start (Minimal Size)

### Option 1: Direct File Reference (Smallest)
In your test project's `package.json`:
```json
{
  "dependencies": {
    "@react-native-ml-kit/barcode-scanning": "file:../react-native-ml-kit/barcode-scanning",
    "@react-native-ml-kit/face-detection": "file:../react-native-ml-kit/face-detection"
    // Add only the modules you need
  }
}
```
Then run: `npm install`

### Option 2: Using npm pack (Small)
```bash
# In react-native-ml-kit directory
./pack-modules.sh

# In your test project
npm install ../react-native-ml-kit/dist/react-native-ml-kit-barcode-scanning-*.tgz
```

### Option 3: Using npm/yarn link (Medium)
```bash
# In react-native-ml-kit directory
./test-local.sh

# In your test project
npm link @react-native-ml-kit/barcode-scanning
```

## Size Optimization Tips

1. **Install only needed modules** - Don't install all 6 modules if you only need 1-2
2. **Skip example folder** - The example app adds ~500MB
3. **Clean after testing**:
   ```bash
   # In react-native-ml-kit
   rm -rf node_modules
   rm -rf example/node_modules
   rm -rf example/ios/Pods
   ```

4. **Use production builds**:
   ```bash
   npm install --production
   ```

## Testing Workflow

1. Make changes in react-native-ml-kit
2. Use one of the methods above to link to your test project
3. For iOS: Run `cd ios && pod install`
4. For Android: Run `cd android && ./gradlew clean`
5. Build and test your app

## Compatibility

- Firebase SDK: 11.15.0 ✅
- React Native: 0.72.4 - 0.75.3 ✅
- iOS: 15.5+ (GoogleMLKit 7.0.0)
- Android: API 21+

## Troubleshooting

### iOS Issues
- Ensure iOS deployment target is 15.5 or higher
- Delete `Pods` folder and `Podfile.lock`, then reinstall

### Android Issues
- Clean build: `cd android && ./gradlew clean`
- Ensure compileSdkVersion is 34 or higher

### Size Issues
- Use `npx depcheck` to find unused dependencies
- Consider using Metro bundler's resolver to exclude test files