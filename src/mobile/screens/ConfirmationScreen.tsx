import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Image,
  ActivityIndicator
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';
import ProgressStep from '../components/ProgressStep';
import { RootStackParamList } from '../types/navigation';

type ConfirmationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ConfirmationScreen'>;
type ConfirmationScreenRouteProp = RouteProp<RootStackParamList, 'ConfirmationScreen'>;

interface ConfirmationScreenProps {
  navigation: ConfirmationScreenNavigationProp;
  route: ConfirmationScreenRouteProp;
}

const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({ navigation, route }) => {
  const { sessionId, proofSessionUrl } = route.params;

  const handleJoinSession = () => {
    navigation.navigate('WebViewScreen', {
      url: proofSessionUrl,
      sessionId: sessionId,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ProgressStep currentStep={4} totalSteps={5} />
        
        <View style={styles.successContainer}>
          <View style={styles.successIconContainer}>
            <Image
              source={require('../../assets/images/secure-video-signing.png')}
              style={styles.successIcon}
              resizeMode="contain"
            />
          </View>
          
          <Text style={styles.title}>Ready to Notarize!</Text>
          
          <Text style={styles.message}>
            Your notarization session is ready. A notary is waiting to assist you.
          </Text>
          
          <View style={styles.sessionInfo}>
            <Text style={styles.sessionInfoLabel}>Session ID:</Text>
            <Text style={styles.sessionInfoValue}>{sessionId}</Text>
          </View>
          
          <View style={styles.statusContainer}>
            <ActivityIndicator size="small" color="#0057B8" />
            <Text style={styles.statusText}>Notary standing by...</Text>
          </View>
        </View>
        
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>Before You Join:</Text>
          <Text style={styles.instructionItem}>• Ensure your camera and microphone are working</Text>
          <Text style={styles.instructionItem}>• Have your government-issued ID ready</Text>
          <Text style={styles.instructionItem}>• Find a quiet place with good lighting</Text>
          <Text style={styles.instructionItem}>• Make sure your device is charged</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <PrimaryButton 
            title="Join Notarization Session" 
            onPress={handleJoinSession}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  successContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  successIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F0F7FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  successIcon: {
    width: 70,
    height: 70,
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
    marginBottom: 15,
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
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F7FF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  statusText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#0057B8',
  },
  instructionsContainer: {
    width: '100%',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  instructionItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
  }
});

export default ConfirmationScreen;
