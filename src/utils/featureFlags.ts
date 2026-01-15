/**
 * Feature Flags
 * Controls conditional rendering of features based on environment variables
 */

const parseEnvFlag = (value: unknown, defaultValue = true): boolean => {
  if (value === undefined) return defaultValue;
  return String(value).toLowerCase() === 'true';
};

export const featureFlags = {
  // Enable/disable apostille services
  enableApostille: parseEnvFlag(import.meta.env.VITE_ENABLE_APOSTILLE, true),

  // Keep legacy flags to avoid breaking existing reads
  enableRON: parseEnvFlag(import.meta.env.VITE_ENABLE_RON, true),
  enableLoanSigning: parseEnvFlag(import.meta.env.VITE_ENABLE_LOAN_SIGNING, true),
};

/**
 * Hook-friendly getter for feature flags
 */
export const useFeatureFlag = (flag: keyof typeof featureFlags): boolean => {
  return featureFlags[flag];
};
