/**
 * Service Type Definitions
 * Central configuration for all notary services including RON capability
 */

export interface ServiceTypeConfig {
  id: string;
  label: string;
  description: string;
  category: 'loan-signing' | 'general-notary' | 'specialty';
  ronCapable: boolean;
  inPersonOnly?: boolean;
  basePrice?: string;
  notes?: string;
}

export const SERVICE_TYPES: Record<string, ServiceTypeConfig> = {
  // Loan Signing Services
  'refinance': {
    id: 'refinance',
    label: 'Refinance Signing',
    description: 'Mortgage refinance document signing',
    category: 'loan-signing',
    ronCapable: true,
    basePrice: '$125–$150',
  },
  'purchase': {
    id: 'purchase',
    label: 'Purchase Signing (Buyer)',
    description: 'Home purchase closing documents',
    category: 'loan-signing',
    ronCapable: true,
    basePrice: '$100–$125',
  },
  'seller': {
    id: 'seller',
    label: 'Seller Signing',
    description: 'Property sale documentation',
    category: 'loan-signing',
    ronCapable: true,
    basePrice: '$75–$100',
  },
  'reverse': {
    id: 'reverse',
    label: 'Reverse Mortgage',
    description: 'HECM and reverse mortgage closings',
    category: 'loan-signing',
    ronCapable: false,
    inPersonOnly: true,
    basePrice: '$125–$175',
    notes: 'Federal regulations require in-person signing for reverse mortgages',
  },
  'heloc': {
    id: 'heloc',
    label: 'HELOC / Home Equity',
    description: 'Home equity line of credit documents',
    category: 'loan-signing',
    ronCapable: true,
    basePrice: '$100–$150',
  },
  'modification': {
    id: 'modification',
    label: 'Loan Modification',
    description: 'Loan modification agreements',
    category: 'loan-signing',
    ronCapable: true,
    basePrice: '$40–$60',
  },
  'commercial': {
    id: 'commercial',
    label: 'Commercial Closing',
    description: 'Commercial real estate transactions',
    category: 'loan-signing',
    ronCapable: false,
    inPersonOnly: true,
    basePrice: '$200+',
    notes: 'Complex commercial transactions typically require in-person execution',
  },
  'property-tax': {
    id: 'property-tax',
    label: 'TX Property Tax Loan',
    description: 'Texas property tax loan documents',
    category: 'loan-signing',
    ronCapable: false,
    inPersonOnly: true,
    basePrice: '$125',
    notes: 'Texas equity law requires in-person signing at specific facility',
  },

  // General Notary Services
  'general': {
    id: 'general',
    label: 'General Notary',
    description: 'Affidavits, acknowledgements, jurats',
    category: 'general-notary',
    ronCapable: true,
    basePrice: '$75+',
  },
  'power-of-attorney': {
    id: 'power-of-attorney',
    label: 'Power of Attorney',
    description: 'Financial, medical, or legal POA documents',
    category: 'general-notary',
    ronCapable: true,
    basePrice: '$50+',
  },
  'estate-trust': {
    id: 'estate-trust',
    label: 'Estate & Trust',
    description: 'Wills, trusts, and estate planning documents',
    category: 'general-notary',
    ronCapable: true,
    basePrice: '$50+',
  },
  'witness': {
    id: 'witness',
    label: 'Witness Services',
    description: 'Professional witness for legal documents',
    category: 'general-notary',
    ronCapable: false,
    inPersonOnly: true,
    basePrice: '$50+',
    notes: 'Witness services require physical presence',
  },

  // Specialty Services
  'apostille': {
    id: 'apostille',
    label: 'Apostille Services',
    description: 'International document authentication',
    category: 'specialty',
    ronCapable: true,
    basePrice: '$150+',
    notes: 'Notarization can be done via RON; apostille processing is separate',
  },
  'i9-verification': {
    id: 'i9-verification',
    label: 'I-9 Verification',
    description: 'Employment eligibility verification',
    category: 'general-notary',
    ronCapable: false,
    inPersonOnly: true,
    basePrice: '$50+',
    notes: 'I-9 verification requires in-person document review',
  },
};

// Helper functions
export const getServiceById = (id: string): ServiceTypeConfig | undefined => {
  return SERVICE_TYPES[id];
};

export const getServicesByCategory = (category: ServiceTypeConfig['category']): ServiceTypeConfig[] => {
  return Object.values(SERVICE_TYPES).filter(service => service.category === category);
};

export const getRonCapableServices = (): ServiceTypeConfig[] => {
  return Object.values(SERVICE_TYPES).filter(service => service.ronCapable);
};

export const getInPersonOnlyServices = (): ServiceTypeConfig[] => {
  return Object.values(SERVICE_TYPES).filter(service => service.inPersonOnly);
};

// Service categories for grouping in UI
export const SERVICE_CATEGORIES = {
  'loan-signing': {
    label: 'Loan Signing Services',
    description: 'Professional signing services for mortgage and real estate transactions',
  },
  'general-notary': {
    label: 'General Notary Services',
    description: 'Standard notarization for personal and business documents',
  },
  'specialty': {
    label: 'Specialty Services',
    description: 'Specialized document services for unique requirements',
  },
};
