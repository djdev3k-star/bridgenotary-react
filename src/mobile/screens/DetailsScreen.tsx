import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  ScrollView,
  Alert
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import PrimaryButton from '../components/PrimaryButton';
import ProgressStep from '../components/ProgressStep';
import { RootStackParamList, ServiceType } from '../types/navigation';

type DetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'DetailsScreen'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'DetailsScreen'>;

interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation, route }) => {
  const { documentTitle, documentUri } = route.params || {};
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState<ServiceType>('general');
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    // Basic validation
    if (!firstName.trim()) {
      Alert.alert('Missing Information', 'Please enter your first name.');
      return;
    }
    
    if (!lastName.trim()) {
      Alert.alert('Missing Information', 'Please enter your last name.');
      return;
    }
    
    if (!email.trim() || !email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    
    if (!documentTitle || !documentUri) {
      Alert.alert('Missing Document', 'Document information is missing. Please go back and upload a document.');
      return;
    }

    setLoading(true);
    
    // Simulate API call to validate information
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('PaymentScreen', {
        firstName,
        lastName,
        email,
        service,
        documentTitle: documentTitle || '',
        documentUri: documentUri || '',
      });
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProgressStep currentStep={2} totalSteps={5} />
        
        <Text style={styles.title}>Signer Information</Text>
        <Text style={styles.subtitle}>
          Please provide your details for the notarization
        </Text>
        
        <View style={styles.formSection}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Enter your first name"
            placeholderTextColor="#999"
            autoCapitalize="words"
          />
          
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Enter your last name"
            placeholderTextColor="#999"
            autoCapitalize="words"
          />
          
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Text style={styles.label}>Service Type</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={service}
              onValueChange={(itemValue) => setService(itemValue as ServiceType)}
              style={styles.picker}
            >
              <Picker.Item label="General Notarization" value="general" />
              <Picker.Item label="Loan Signing" value="loan" />
              <Picker.Item label="Business Documents" value="business" />
              <Picker.Item label="Power of Attorney" value="power_of_attorney" />
              <Picker.Item label="Affidavit" value="affidavit" />
              <Picker.Item label="Title & Deed Transfers" value="title_deed" />
              <Picker.Item label="Estate & Trust Documents" value="estate_trust" />
              <Picker.Item label="School Permission Forms" value="school_permission" />
              <Picker.Item label="Medical Authorization" value="medical_authorization" />
              <Picker.Item label="Witnessing" value="witness" />
            </Picker>
          </View>
        </View>
        
        <View style={styles.documentSection}>
          <Text style={styles.documentTitle}>Document Information:</Text>
          <Text style={styles.documentInfo}>
            {documentTitle || 'No document selected'}
          </Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <PrimaryButton 
            title="Proceed to Payment" 
            onPress={handleNext} 
            loading={loading}
            disabled={!firstName || !lastName || !email || !service}
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
    color: '#192252', // charcoal
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#192252B3', // charcoal/70
    textAlign: 'center',
    marginBottom: 30,
  },
  formSection: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#192252', // charcoal
  },
  input: {
    borderLeftWidth: 2,
    borderLeftColor: '#0055E6', // professional-blue
    paddingLeft: 16,
    padding: 15,
    fontSize: 16,
    backgroundColor: 'transparent',
    marginBottom: 20,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#0055E61A', // professional-blue/10
  },
  pickerContainer: {
    borderLeftWidth: 2,
    borderLeftColor: '#0055E6', // professional-blue
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#0055E61A', // professional-blue/10
    backgroundColor: 'transparent',
    marginBottom: 20,
    paddingLeft: 12,
  },
  picker: {
    height: 50,
    color: '#192252',
  },
  documentSection: {
    backgroundColor: '#0055E60D', // professional-blue/5
    padding: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#0055E6', // professional-blue
    marginBottom: 30,
  },
  documentTitle: {
    fontWeight: '600',
    marginBottom: 5,
    color: '#192252', // charcoal
  },
  documentInfo: {
    color: '#192252B3', // charcoal/70
  },
  buttonContainer: {
    width: '100%',
  }
});

export default DetailsScreen;
