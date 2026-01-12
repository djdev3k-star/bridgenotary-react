import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  Alert
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import PrimaryButton from '../components/PrimaryButton';
import ProgressStep from '../components/ProgressStep';
import { RootStackParamList } from '../types/navigation';

type PaymentScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PaymentScreen'>;
type PaymentScreenRouteProp = RouteProp<RootStackParamList, 'PaymentScreen'>;

interface PaymentScreenProps {
  navigation: PaymentScreenNavigationProp;
  route: PaymentScreenRouteProp;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ navigation, route }) => {
  const { firstName, lastName, email, service, documentTitle, documentUri } = route.params;
  
  const [loading, setLoading] = useState(false);
  const [showStripeCheckout, setShowStripeCheckout] = useState(false);
  
  // Fee calculation based on service type
  const getFee = (serviceType: string): number => {
    switch (serviceType) {
      case 'loan':
        return 99.99;
      case 'business':
        return 79.99;
      case 'power_of_attorney':
        return 89.99;
      case 'affidavit':
        return 69.99;
      case 'general':
      default:
        return 59.99;
    }
  };
  
  const fee = getFee(service);
  
  const getServiceName = (serviceType: string): string => {
    switch (serviceType) {
      case 'loan':
        return 'Loan Signing';
      case 'business':
        return 'Business Documents';
      case 'power_of_attorney':
        return 'Power of Attorney';
      case 'affidavit':
        return 'Affidavit';
      case 'general':
      default:
        return 'General Notarization';
    }
  };
  
  const handleStripeSuccess = () => {
    setShowStripeCheckout(false);
    setLoading(true);
    
    // Simulate API call to create Proof.com session
    setTimeout(() => {
      setLoading(false);
      // Mock session data
      const sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
      const proofSessionUrl = 'https://proof.com/session/' + sessionId;
      
      navigation.navigate('ConfirmationScreen', {
        sessionId,
        proofSessionUrl,
        documentUri,  // Pass the document URI to the confirmation screen
      });
    }, 2000);
  };
  
  const handlePayNow = () => {
    // In a real app, this would show a real payment processor
    setShowStripeCheckout(true);
  };

  // Mock Stripe checkout HTML
  const stripeCheckoutHtml = `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; padding: 20px; }
          .container { max-width: 500px; margin: 0 auto; }
          .header { text-align: center; margin-bottom: 20px; }
          .form-group { margin-bottom: 15px; }
          label { display: block; margin-bottom: 5px; font-weight: 500; }
          input { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px; }
          .card-element { padding: 10px; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9; }
          button { background: #0057B8; color: white; border: none; padding: 12px 15px; border-radius: 4px; font-size: 16px; cursor: pointer; width: 100%; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Payment</h2>
          </div>
          <div class="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="4242 4242 4242 4242" />
          </div>
          <div style="display: flex; gap: 10px;">
            <div class="form-group" style="flex: 1;">
              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div class="form-group" style="flex: 1;">
              <label>CVC</label>
              <input type="text" placeholder="123" />
            </div>
          </div>
          <div class="form-group">
            <label>ZIP Code</label>
            <input type="text" placeholder="12345" />
          </div>
          <button onclick="window.ReactNativeWebView.postMessage('payment_success')">Pay $${fee.toFixed(2)}</button>
        </div>
      </body>
    </html>
  `;

  if (showStripeCheckout) {
    return (
      <WebView
        source={{ html: stripeCheckoutHtml }}
        onMessage={(event: any) => {
          if (event.nativeEvent.data === 'payment_success') {
            handleStripeSuccess();
          }
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProgressStep currentStep={3} totalSteps={5} />
        
        <Text style={styles.title}>Payment Details</Text>
        <Text style={styles.subtitle}>
          Review your notarization details and complete payment
        </Text>
        
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Notarization Summary</Text>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Service:</Text>
            <Text style={styles.summaryValue}>{getServiceName(service)}</Text>
          </View>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Document:</Text>
            <Text style={styles.summaryValue}>{documentTitle}</Text>
          </View>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Signer:</Text>
            <Text style={styles.summaryValue}>{firstName} {lastName}</Text>
          </View>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Email:</Text>
            <Text style={styles.summaryValue}>{email}</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.feeItem}>
            <Text style={styles.feeLabel}>Notarization Fee:</Text>
            <Text style={styles.feeValue}>${fee.toFixed(2)}</Text>
          </View>
        </View>
        
        <View style={styles.securityNote}>
          <Text style={styles.securityTitle}>Secure Payment</Text>
          <Text style={styles.securityText}>
            All payment information is encrypted and processed securely.
          </Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <PrimaryButton 
            title={`Pay $${fee.toFixed(2)}`}
            onPress={handlePayNow} 
            loading={loading}
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
  summaryContainer: {
    backgroundColor: '#0055E605', // professional-blue/3
    borderLeftWidth: 2,
    borderLeftColor: '#0055E6', // professional-blue
    paddingLeft: 16,
    padding: 20,
    marginBottom: 30,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#192252', // charcoal
  },
  summaryItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#192252B3', // charcoal/70
    width: '30%',
  },
  summaryValue: {
    fontSize: 16,
    color: '#192252', // charcoal
    fontWeight: '500',
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#0055E633', // professional-blue/20
    marginVertical: 15,
  },
  feeItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feeLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#192252', // charcoal
    flex: 1,
  },
  feeValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0055E6', // professional-blue
  },
  securityNote: {
    backgroundColor: '#0055E60D', // professional-blue/5
    borderLeftWidth: 2,
    borderLeftColor: '#0055E6', // professional-blue
    paddingLeft: 16,
    padding: 15,
    marginBottom: 30,
  },
  securityTitle: {
    fontWeight: '600',
    marginBottom: 5,
    color: '#192252', // charcoal
  },
  securityText: {
    color: '#192252B3', // charcoal/70
    fontSize: 14,
  },
  buttonContainer: {
    width: '100%',
  }
});

export default PaymentScreen;
