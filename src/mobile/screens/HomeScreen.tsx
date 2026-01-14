import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PrimaryButton from '../components/PrimaryButton';
import { RootStackParamList } from '../types/navigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('../../assets/Google-Business/Remote Online Notary.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        
        <Text style={styles.title}>Welcome to Bridge Notary</Text>
        
        <Text style={styles.subtitle}>
          Fast, secure remote online notarizations from your device
        </Text>
        
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <View style={styles.featureBorder} />
            <View style={styles.featureContent}>
              <Text style={styles.featureIconText}>📱</Text>
              <View style={styles.featureTextWrapper}>
                <Text style={styles.featureTitle}>Notarize Anywhere</Text>
                <Text style={styles.featureText}>Complete documents from your device</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.featureItem}>
            <View style={styles.featureBorder} />
            <View style={styles.featureContent}>
              <Text style={styles.featureIconText}>🔒</Text>
              <View style={styles.featureTextWrapper}>
                <Text style={styles.featureTitle}>Bank-Grade Security</Text>
                <Text style={styles.featureText}>Military-grade encryption</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.featureItem}>
            <View style={styles.featureBorder} />
            <View style={styles.featureContent}>
              <Text style={styles.featureIconText}>⏱️</Text>
              <View style={styles.featureTextWrapper}>
                <Text style={styles.featureTitle}>Lightning Fast</Text>
                <Text style={styles.featureText}>5-minute average sessions</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <PrimaryButton 
            title="Start Notarization" 
            onPress={() => navigation.navigate('UploadScreen')} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFB',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#192252', // charcoal
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#192252B3', // charcoal/70
    textAlign: 'center',
    marginBottom: 40,
  },
  features: {
    width: '100%',
    marginBottom: 40,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftColor: '#0055E6', // professional-blue
  },
  featureBorder: {
    position: 'absolute',
  },
  featureContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  featureIconText: {
    fontSize: 28,
    marginRight: 12,
    marginTop: 4,
  },
  featureTextWrapper: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#192252', // charcoal
    marginBottom: 4,
  },
  featureText: {
    fontSize: 14,
    color: '#192252B3', // charcoal/70
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  }
});

export default HomeScreen;
