import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Image, 
  ScrollView, 
  Share,
  Linking,
  Platform,
  Alert
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';
import ProgressStep from '../components/ProgressStep';
import { RootStackParamList } from '../types/navigation';

type ResultsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ResultsScreen'>;
type ResultsScreenRouteProp = RouteProp<RootStackParamList, 'ResultsScreen'>;

interface ResultsScreenProps {
  navigation: ResultsScreenNavigationProp;
  route: ResultsScreenRouteProp;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ navigation, route }) => {
  const { sessionId, documentUri, auditTrailUrl } = route.params;

  const handleDownloadDocument = async () => {
    try {
      // In a real app, this would trigger the actual download
      // For now, we'll just open the URL
      await Linking.openURL(documentUri);
    } catch (error) {
      Alert.alert('Error', 'Could not open the document.');
    }
  };

  const handleViewAuditTrail = async () => {
    try {
      await Linking.openURL(auditTrailUrl);
    } catch (error) {
      Alert.alert('Error', 'Could not open the audit trail.');
    }
  };

  const handleShareDocument = async () => {
    try {
      await Share.share({
        message: 'Here is my notarized document',
        url: documentUri,
        title: 'Notarized Document'
      });
    } catch (error) {
      Alert.alert('Error', 'Could not share the document.');
    }
  };

  const handleStartNew = () => {
    navigation.popToTop(); // Navigate back to home screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProgressStep currentStep={5} totalSteps={5} />
        
        <View style={styles.successContainer}>
          <View style={styles.successIconContainer}>
            <Image
              source={require('../../assets/images/Verify-identity.png')}
              style={styles.successIcon}
              resizeMode="contain"
            />
          </View>
          
          <Text style={styles.title}>Notarization Complete!</Text>
          
          <Text style={styles.message}>
            Your document has been successfully notarized and is ready for download.
          </Text>
          
          <View style={styles.sessionInfo}>
            <Text style={styles.sessionInfoLabel}>Session ID:</Text>
            <Text style={styles.sessionInfoValue}>{sessionId}</Text>
          </View>
        </View>
        
        <View style={styles.documentPreview}>
          <View style={styles.documentPreviewHeader}>
            <Text style={styles.documentPreviewTitle}>Notarized Document</Text>
            <Text style={styles.documentPreviewSubtitle}>PDF • Signed and Sealed</Text>
          </View>
          
          <View style={styles.documentIconContainer}>
            <Image
              source={require('../../assets/images/upload-documents.png')}
              style={styles.documentIcon}
              resizeMode="contain"
            />
          </View>
        </View>
        
        <View style={styles.actionButtonsContainer}>
          <PrimaryButton 
            title="Download Document" 
            onPress={handleDownloadDocument}
            style={styles.actionButton}
          />
          
          <PrimaryButton 
            title="View Audit Trail" 
            onPress={handleViewAuditTrail}
            style={[styles.actionButton, styles.auditButton]}
          />
          
          <PrimaryButton 
            title="Share Document" 
            onPress={handleShareDocument}
            style={[styles.actionButton, styles.shareButton]}
          />
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>What's Next?</Text>
          <Text style={styles.infoItem}>
            • Your document has a digital certificate that can be verified by recipients
          </Text>
          <Text style={styles.infoItem}>
            • Download and save your document for your records
          </Text>
          <Text style={styles.infoItem}>
            • The audit trail provides proof of the notarization process
          </Text>
          <Text style={styles.infoItem}>
            • You will receive an email with links to your documents
          </Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <PrimaryButton 
            title="Start New Notarization" 
            onPress={handleStartNew}
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
  successContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  successIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  successIcon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  sessionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionInfoLabel: {
    fontSize: 14,
    color: '#666',
    marginRight: 5,
  },
  sessionInfoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  documentPreview: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 20,
    marginBottom: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  documentPreviewHeader: {
    alignItems: 'center',
    marginBottom: 15,
  },
  documentPreviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  documentPreviewSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  documentIconContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  documentIcon: {
    width: 80,
    height: 80,
  },
  actionButtonsContainer: {
    marginBottom: 30,
  },
  actionButton: {
    marginBottom: 10,
  },
  auditButton: {
    backgroundColor: '#6200EA',
  },
  shareButton: {
    backgroundColor: '#00897B',
  },
  infoContainer: {
    backgroundColor: '#F0F7FF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  infoItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
  }
});

export default ResultsScreen;
