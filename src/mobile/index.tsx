import React from 'react';
import { AppRegistry } from 'react-native';
import AppNavigation from './navigation/AppNavigation';

export default function MobileApp() {
  return <AppNavigation />;
}

// Register the app
AppRegistry.registerComponent('BridgeNotaryRON', () => MobileApp);
