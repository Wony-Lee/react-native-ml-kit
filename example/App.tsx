import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

// ML Kit imports
import {
  BarcodeScanning,
  BarcodeFormat,
  BarcodeValueType,
} from '@react-native-ml-kit/barcode-scanning';
import { FaceDetection } from '@react-native-ml-kit/face-detection';
import { ImageLabeling } from '@react-native-ml-kit/image-labeling';
import { TextRecognition } from '@react-native-ml-kit/text-recognition';
import { IdentifyLanguages } from '@react-native-ml-kit/identify-languages';
import { TranslateText } from '@react-native-ml-kit/translate-text';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

function App(): React.JSX.Element {
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    // Test Reanimated 3.16.5 animations
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 3000,
        easing: Easing.linear,
      }),
      -1,
      false
    );

    opacity.value = withRepeat(
      withTiming(0.3, {
        duration: 1500,
      }),
      -1,
      true
    );
  }, []);

  const animatedLogoStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { rotate: `${rotation.value}deg` },
      ],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handleButtonPress = (feature: string) => {
    scale.value = withSpring(0.95, {}, () => {
      scale.value = withSpring(1);
    });

    Alert.alert(
      `${feature} Test`,
      `Testing ${feature} with Reanimated 3.16.5`,
      [{ text: 'OK' }]
    );
  };

  const testBarcodeScanning = async () => {
    try {
      console.log('Testing Barcode Scanning...');
      // Add barcode scanning test logic here
      handleButtonPress('Barcode Scanning');
    } catch (error) {
      console.error('Barcode scanning error:', error);
    }
  };

  const testFaceDetection = async () => {
    try {
      console.log('Testing Face Detection...');
      // Add face detection test logic here
      handleButtonPress('Face Detection');
    } catch (error) {
      console.error('Face detection error:', error);
    }
  };

  const testImageLabeling = async () => {
    try {
      console.log('Testing Image Labeling...');
      // Add image labeling test logic here
      handleButtonPress('Image Labeling');
    } catch (error) {
      console.error('Image labeling error:', error);
    }
  };

  const testTextRecognition = async () => {
    try {
      console.log('Testing Text Recognition...');
      // Add text recognition test logic here
      handleButtonPress('Text Recognition');
    } catch (error) {
      console.error('Text recognition error:', error);
    }
  };

  const testLanguageIdentification = async () => {
    try {
      console.log('Testing Language Identification...');
      const result = await IdentifyLanguages.identifyLanguage('Hello world');
      Alert.alert('Language Identified', `Language: ${result}`);
    } catch (error) {
      console.error('Language identification error:', error);
    }
  };

  const testTranslation = async () => {
    try {
      console.log('Testing Translation...');
      // Add translation test logic here
      handleButtonPress('Translation');
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.header}>
          <Animated.View style={[styles.logo, animatedLogoStyle]}>
            <Text style={styles.logoText}>ML</Text>
          </Animated.View>
          <Animated.Text style={[styles.title, animatedTextStyle]}>
            React Native ML Kit
          </Animated.Text>
          <Text style={styles.subtitle}>
            with Reanimated 3.16.5 ✨
          </Text>
          <Text style={styles.versionInfo}>
            React Native 0.75.3 | Firebase SDK 11.15.0
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>ML Kit Features</Text>
          
          <AnimatedTouchableOpacity
            style={[styles.button, animatedButtonStyle]}
            onPress={testBarcodeScanning}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>📊 Barcode Scanning</Text>
          </AnimatedTouchableOpacity>

          <AnimatedTouchableOpacity
            style={[styles.button, animatedButtonStyle]}
            onPress={testFaceDetection}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>😊 Face Detection</Text>
          </AnimatedTouchableOpacity>

          <AnimatedTouchableOpacity
            style={[styles.button, animatedButtonStyle]}
            onPress={testImageLabeling}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>🏷️ Image Labeling</Text>
          </AnimatedTouchableOpacity>

          <AnimatedTouchableOpacity
            style={[styles.button, animatedButtonStyle]}
            onPress={testTextRecognition}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>📝 Text Recognition</Text>
          </AnimatedTouchableOpacity>

          <AnimatedTouchableOpacity
            style={[styles.button, animatedButtonStyle]}
            onPress={testLanguageIdentification}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>🌍 Language Detection</Text>
          </AnimatedTouchableOpacity>

          <AnimatedTouchableOpacity
            style={[styles.button, animatedButtonStyle]}
            onPress={testTranslation}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>🔄 Translation</Text>
          </AnimatedTouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Reanimated animations are working! ✅
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  versionInfo: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
  },
  featuresContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '500',
  },
});

export default App;