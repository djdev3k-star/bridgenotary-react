import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import UploadScreen from '../screens/UploadScreen';
import DetailsScreen from '../screens/DetailsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import WebViewScreen from '../screens/WebViewScreen';
import ResultsScreen from '../screens/ResultsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0057B8', // electric-blue from Bridge Notary
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ title: 'Bridge Notary RON' }} 
        />
        <Stack.Screen 
          name="UploadScreen" 
          component={UploadScreen} 
          options={{ title: 'Upload Documents' }} 
        />
        <Stack.Screen 
          name="DetailsScreen" 
          component={DetailsScreen} 
          options={{ title: 'Signer Details' }} 
        />
        <Stack.Screen 
          name="PaymentScreen" 
          component={PaymentScreen} 
          options={{ title: 'Payment' }} 
        />
        <Stack.Screen 
          name="ConfirmationScreen" 
          component={ConfirmationScreen} 
          options={{ title: 'Confirmation' }} 
        />
        <Stack.Screen 
          name="WebViewScreen" 
          component={WebViewScreen} 
          options={{ title: 'Notarization Session' }} 
        />
        <Stack.Screen 
          name="ResultsScreen" 
          component={ResultsScreen} 
          options={{ title: 'Notarization Complete' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
