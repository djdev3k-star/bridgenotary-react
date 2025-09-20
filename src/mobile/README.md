# Bridge Notary RON Mobile App

This directory contains the React Native implementation of the Bridge Notary Remote Online Notarization (RON) mobile application.

## Overview

The app allows users to:
- Upload documents for notarization
- Provide personal information
- Pay for notarization services
- Join a secure video session with a notary
- Download and share notarized documents

## Installation Requirements

To run this React Native app, you'll need to install:

```bash
npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
npm install react-native-document-picker react-native-webview @react-native-picker/picker
npm install react-native-share react-native-fs
```

## Screen Flow

The app follows a linear flow through these screens:

1. **HomeScreen** - Welcome screen with start button
2. **UploadScreen** - Document upload and description
3. **DetailsScreen** - User information and service selection
4. **PaymentScreen** - Service summary and payment processing
5. **ConfirmationScreen** - Pre-session preparation
6. **WebViewScreen** - Embedded Proof.com RON session
7. **ResultsScreen** - Download and share notarized documents

## Integration with Proof.com

The `WebViewScreen` component is designed to embed the Proof.com RON platform for the actual notarization session. In a production implementation, you would need to:

1. Create an API integration with Proof.com
2. Generate session URLs with proper authentication
3. Handle session completion and document retrieval callbacks

## Security Features

- Secure document handling
- Identity verification through Proof.com
- End-to-end encryption for video sessions
- Document verification and tracking

## Development Notes

- Error handling is implemented for critical paths
- The UI follows Bridge Notary brand guidelines
- Progress indicators help users track their location in the flow
- Designed for both iOS and Android platforms

## Building for Production

To build the app for production:

```bash
# For Android
cd android
./gradlew assembleRelease

# For iOS
cd ios
xcodebuild -workspace BridgeNotaryRON.xcworkspace -scheme BridgeNotaryRON -configuration Release
```
