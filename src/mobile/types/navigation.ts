export type RootStackParamList = {
  HomeScreen: undefined;
  UploadScreen: undefined;
  DetailsScreen: {
    documentTitle?: string;
    documentUri?: string;
  };
  PaymentScreen: {
    firstName: string;
    lastName: string;
    email: string;
    service: string;
    documentTitle: string;
    documentUri: string;
  };
  ConfirmationScreen: {
    sessionId: string;
    proofSessionUrl: string;
    documentUri: string;
  };
  WebViewScreen: {
    url: string;
    sessionId: string;
    documentUri: string;
  };
  ResultsScreen: {
    sessionId: string;
    documentUri: string;
    auditTrailUrl: string;
  };
};

export type ServiceType = 'general' | 'loan' | 'business' | 'power_of_attorney' | 'affidavit';
