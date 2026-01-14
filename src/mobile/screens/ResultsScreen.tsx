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
    backgroundColor: '#F8FAFB',
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
    backgroundColor: '#0055E60D', // professional-blue/5
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
    color: '#192252', // charcoal
    marginBottom: 15,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#192252B3', // charcoal/70
    textAlign: 'center',
    marginBottom: 20,
  },
  sessionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionInfoLabel: {
    fontSize: 14,
    color: '#192252B3', // charcoal/70
    marginRight: 5,
  },
  sessionInfoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0055E6', // professional-blue
    backgroundColor: '#0055E605', // professional-blue/3
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 0, // Clean look
  },
  documentPreview: {
    backgroundColor: '#0055E605', // professional-blue/3
    borderLeftWidth: 2,
    borderLeftColor: '#0055E6', // professional-blue
    paddingLeft: 16,
    padding: 20,
    marginBottom: 25,
    alignItems: 'center',
  },
  documentPreviewHeader: {
    alignItems: 'center',
    marginBottom: 15,
  },
  documentPreviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#192252', // charcoal
    marginBottom: 5,
  },
  documentPreviewSubtitle: {
    fontSize: 14,
    color: '#192252B3', // charcoal/70
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
    backgroundColor: '#0055E6', // professional-blue
  },
  shareButton: {
    backgroundColor: '#0055E6', // professional-blue
  },
  infoContainer: {
    backgroundColor: '#0055E60D', // professional-blue/5
    borderLeftWidth: 2,
    borderLeftColor: '#0055E6', // professional-blue
    paddingLeft: 16,
    padding: 20,
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#192252', // charcoal
  },
  infoItem: {
    fontSize: 14,
    color: '#192252B3', // charcoal/70
    marginBottom: 10,
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
  }
});

export default ResultsScreen;
