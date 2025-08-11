import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

// Import all ML Kit modules
import BarcodeScanning from '@react-native-ml-kit/barcode-scanning';
import FaceDetection from '@react-native-ml-kit/face-detection';
import IdentifyLanguages from '@react-native-ml-kit/identify-languages';
import ImageLabeling from '@react-native-ml-kit/image-labeling';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import TranslateText from '@react-native-ml-kit/translate-text';

const App = () => {
  const [inputText, setInputText] = useState('Hello World! This is a sample text for ML Kit demonstration.');
  const [results, setResults] = useState({
    language: '',
    translation: '',
    barcodeText: 'No barcode scanned yet',
    faceCount: 'No face detection performed',
    imageLabels: 'No image labeled yet',
    ocrText: 'No text recognized yet',
  });

  const handleLanguageDetection = async () => {
    try {
      const language = await IdentifyLanguages.identify(inputText);
      const possibleLanguages = await IdentifyLanguages.identifyPossible(inputText);
      
      setResults(prev => ({
        ...prev,
        language: `Primary: ${language}, Possible: ${possibleLanguages.map(l => l.language).join(', ')}`
      }));
    } catch (error) {
      Alert.alert('Error', 'Language detection failed: ' + error.message);
    }
  };

  const handleTranslation = async () => {
    try {
      // Translate to Spanish (es)
      const translatedText = await TranslateText.translate(inputText, 'es');
      setResults(prev => ({
        ...prev,
        translation: translatedText
      }));
    } catch (error) {
      Alert.alert('Error', 'Translation failed: ' + error.message);
    }
  };

  const handleBarcodeScanning = () => {
    Alert.alert(
      'Barcode Scanning',
      'In a real app, this would open the camera for barcode scanning. This example shows the integration setup.',
      [{ text: 'OK' }]
    );
    setResults(prev => ({
      ...prev,
      barcodeText: 'Camera integration ready for barcode scanning'
    }));
  };

  const handleFaceDetection = () => {
    Alert.alert(
      'Face Detection',
      'In a real app, this would analyze images for face detection. This example shows the integration setup.',
      [{ text: 'OK' }]
    );
    setResults(prev => ({
      ...prev,
      faceCount: 'Camera integration ready for face detection'
    }));
  };

  const handleImageLabeling = () => {
    Alert.alert(
      'Image Labeling',
      'In a real app, this would analyze images and return labels. This example shows the integration setup.',
      [{ text: 'OK' }]
    );
    setResults(prev => ({
      ...prev,
      imageLabels: 'Camera integration ready for image labeling'
    }));
  };

  const handleTextRecognition = () => {
    Alert.alert(
      'Text Recognition (OCR)',
      'In a real app, this would extract text from images. This example shows the integration setup.',
      [{ text: 'OK' }]
    );
    setResults(prev => ({
      ...prev,
      ocrText: 'Camera integration ready for OCR'
    }));
  };

  const MLKitButton = ({ title, onPress, style }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  const ResultSection = ({ title, content }) => (
    <View style={styles.resultSection}>
      <Text style={styles.resultTitle}>{title}</Text>
      <Text style={styles.resultContent}>{content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.content}>
          <Text style={styles.header}>React Native ML Kit Demo</Text>
          <Text style={styles.subheader}>
            Demonstrating all ML Kit modules with React Native Reanimated {require('react-native-reanimated/package.json').version}
          </Text>

          <View style={styles.inputSection}>
            <Text style={styles.sectionTitle}>Input Text</Text>
            <TextInput
              style={styles.textInput}
              multiline
              numberOfLines={3}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Enter text for language detection and translation"
            />
          </View>

          <View style={styles.buttonsContainer}>
            <Text style={styles.sectionTitle}>ML Kit Features</Text>
            
            <MLKitButton
              title="🌐 Detect Language"
              onPress={handleLanguageDetection}
              style={styles.languageButton}
            />
            
            <MLKitButton
              title="🔄 Translate Text"
              onPress={handleTranslation}
              style={styles.translateButton}
            />
            
            <MLKitButton
              title="📱 Scan Barcode"
              onPress={handleBarcodeScanning}
              style={styles.barcodeButton}
            />
            
            <MLKitButton
              title="👤 Detect Faces"
              onPress={handleFaceDetection}
              style={styles.faceButton}
            />
            
            <MLKitButton
              title="🏷️ Label Images"
              onPress={handleImageLabeling}
              style={styles.imageButton}
            />
            
            <MLKitButton
              title="📝 Recognize Text (OCR)"
              onPress={handleTextRecognition}
              style={styles.ocrButton}
            />
          </View>

          <View style={styles.resultsContainer}>
            <Text style={styles.sectionTitle}>Results</Text>
            
            <ResultSection 
              title="Language Detection" 
              content={results.language || 'No language detected yet'} 
            />
            
            <ResultSection 
              title="Translation (to Spanish)" 
              content={results.translation || 'No translation performed yet'} 
            />
            
            <ResultSection 
              title="Barcode Scanning" 
              content={results.barcodeText} 
            />
            
            <ResultSection 
              title="Face Detection" 
              content={results.faceCount} 
            />
            
            <ResultSection 
              title="Image Labeling" 
              content={results.imageLabels} 
            />
            
            <ResultSection 
              title="Text Recognition" 
              content={results.ocrText} 
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  subheader: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  inputSection: {
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  buttonsContainer: {
    marginBottom: 24,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  languageButton: {
    backgroundColor: '#4CAF50',
  },
  translateButton: {
    backgroundColor: '#2196F3',
  },
  barcodeButton: {
    backgroundColor: '#FF9800',
  },
  faceButton: {
    backgroundColor: '#9C27B0',
  },
  imageButton: {
    backgroundColor: '#E91E63',
  },
  ocrButton: {
    backgroundColor: '#607D8B',
  },
  resultsContainer: {
    marginTop: 16,
  },
  resultSection: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  resultContent: {
    fontSize: 14,
    color: '#666',
  },
});

export default App;