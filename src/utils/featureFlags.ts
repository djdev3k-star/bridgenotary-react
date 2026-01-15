/**
 * Feature Flags
 * Controls conditional rendering of features based on environment variables
 */

export const featureFlags = {
  // Enable/disable apostille services
  enableApostille: import.meta.env.VITE_ENABLE_APOSTILLE === 'true' || import.meta.env.VITE_ENABLE_APOSTILLE === undefined,
};

/**
 * Hook-friendly getter for feature flags
 */
export const useFeatureFlag = (flag: keyof typeof featureFlags): boolean => {
  return featureFlags[flag];
};
