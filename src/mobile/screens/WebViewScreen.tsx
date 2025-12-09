import React, { useRef, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ActivityIndicator,
  BackHandler,
  Alert,
  Platform
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { useFocusEffect } from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';
import { RootStackParamList } from '../types/navigation';

type WebViewScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'WebViewScreen'>;
type WebViewScreenRouteProp = RouteProp<RootStackParamList, 'WebViewScreen'>;

interface WebViewScreenProps {
  navigation: WebViewScreenNavigationProp;
  route: WebViewScreenRouteProp;
}

const WebViewScreen: React.FC<WebViewScreenProps> = ({ navigation, route }) => {
  const { url, sessionId, documentUri } = route.params;
  const [loading, setLoading] = useState(true);
  const [sessionComplete, setSessionComplete] = useState(false);
  const webViewRef = useRef<WebView>(null);

  // Handle Android back button
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Exit Session?',
          'Are you sure you want to exit the notarization session? Your progress may be lost.',
          [
            { text: 'Cancel', style: 'cancel', onPress: () => {} },
            { 
              text: 'Exit', 
              style: 'destructive', 
              onPress: () => navigation.goBack() 
            }
          ]
        );
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation])
  );

  // Handle messages from webview
  const handleWebViewMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      
      if (data.type === 'SESSION_COMPLETE') {
        setSessionComplete(true);
        
        // Use the actual document URI passed from previous screens
        // instead of creating a mock one
        const auditTrailUrl = 'https://bridgenotary.com/audit/' + sessionId;
        
        setTimeout(() => {
          navigation.replace('ResultsScreen', {
            sessionId,
            documentUri,
            auditTrailUrl
          });
        }, 1500);
      }
    } catch (error) {
      console.error('Error processing WebView message:', error);
    }
  };

  // Inject JavaScript to monitor session completion
  // In a real app, this would listen for actual events from the Proof.com interface
  const injectedJavaScript = `
    setTimeout(() => {
      // This simulates session completion after 10 seconds for demo purposes
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'SESSION_COMPLETE'
      }));
    }, 10000);
    
    true;
  `;

  if (sessionComplete) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0057B8" />
          <Text style={styles.loadingText}>
            Notarization complete! Preparing your documents...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0057B8" />
          <Text style={styles.loadingText}>
            Loading secure notarization session...
          </Text>
        </View>
      )}
      
      <WebView
        ref={webViewRef}
        source={{ uri: url }}
        style={styles.webView}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onMessage={handleWebViewMessage}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        allowsFullscreenVideo={true}
        // Permissions for camera and microphone
        // These would need proper implementation for a real app
        androidHardwareAccelerationDisabled={Platform.OS === 'android'}
      />
      
      {!loading && (
        <View style={styles.toolbar}>
          <PrimaryButton 
            title="End Session" 
            onPress={() => {
              Alert.alert(
                'End Session?',
                'Are you sure you want to end the notarization session?',
                [
                  { text: 'Cancel', style: 'cancel' },
                  { 
                    text: 'End Session', 
                    style: 'destructive', 
                    onPress: () => navigation.goBack() 
                  }
                ]
              );
            }}
            style={styles.endButton}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  webView: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    zIndex: 10,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  toolbar: {
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  endButton: {
    backgroundColor: '#E53935',
  }
});

export default WebViewScreen;
