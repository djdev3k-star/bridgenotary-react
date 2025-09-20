import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert, ScrollView, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import PrimaryButton from '../components/PrimaryButton';
import ProgressStep from '../components/ProgressStep';
import { RootStackParamList } from '../types/navigation';

type UploadScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'UploadScreen'>;

interface UploadScreenProps {
  navigation: UploadScreenNavigationProp;
}

const UploadScreen: React.FC<UploadScreenProps> = ({ navigation }) => {
  const [document, setDocument] = useState<DocumentPickerResponse | null>(null);
  const [documentTitle, setDocumentTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.docx, DocumentPicker.types.images],
      });
      setDocument(result[0]);
      
      // Auto-set document title from filename
      if (result[0].name) {
        setDocumentTitle(result[0].name.split('.')[0]);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        Alert.alert('Error', 'There was an error picking the document.');
        console.error(err);
      }
    }
  };

  const handleNext = () => {
    if (!document) {
      Alert.alert('Missing Document', 'Please upload a document to continue.');
      return;
    }

    if (!documentTitle.trim()) {
      Alert.alert('Missing Title', 'Please provide a title for your document.');
      return;
    }

    setLoading(true);
    // Simulate document upload/processing
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('DetailsScreen', {
        documentTitle: documentTitle,
        documentUri: document.uri,
      });
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProgressStep currentStep={1} totalSteps={5} />
        
        <Text style={styles.title}>Upload Document</Text>
        <Text style={styles.subtitle}>
          Please upload the document you need to notarize
        </Text>
        
        <View style={styles.uploadArea}>
          {document ? (
            <View style={styles.documentPreview}>
              <Text style={styles.documentName}>{document.name}</Text>
              <Text style={styles.documentSize}>
                {(document.size / 1024).toFixed(1)} KB
              </Text>
              <PrimaryButton 
                title="Change Document" 
                onPress={pickDocument} 
                style={styles.changeButton}
              />
            </View>
          ) : (
            <PrimaryButton title="Select Document" onPress={pickDocument} />
          )}
        </View>
        
        <View style={styles.formSection}>
          <Text style={styles.label}>Document Title</Text>
          <TextInput
            style={styles.input}
            value={documentTitle}
            onChangeText={setDocumentTitle}
            placeholder="Enter document title"
            placeholderTextColor="#999"
          />
          
          <Text style={styles.formNote}>
            The document title will be displayed on your notarized document
          </Text>
        </View>
        
        <View style={styles.supportedTypes}>
          <Text style={styles.supportedTitle}>Supported file types:</Text>
          <Text style={styles.supportedList}>PDF, DOCX, PNG, JPG</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <PrimaryButton 
            title="Next" 
            onPress={handleNext} 
            loading={loading}
            disabled={!document || !documentTitle.trim()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
  },
  uploadArea: {
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    backgroundColor: '#F9F9F9',
  },
  documentPreview: {
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  documentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  documentSize: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  changeButton: {
    backgroundColor: '#666',
    paddingVertical: 8,
  },
  formSection: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
    marginBottom: 8,
  },
  formNote: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  supportedTypes: {
    backgroundColor: '#F0F7FF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 30,
  },
  supportedTitle: {
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  supportedList: {
    color: '#666',
  },
  buttonContainer: {
    width: '100%',
  }
});

export default UploadScreen;
