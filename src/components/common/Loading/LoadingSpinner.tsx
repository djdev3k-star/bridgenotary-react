import React from 'react';

const LoadingSpinner: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-spin rounded-full h-6 w-6 border-b-2 border-current ${className}`} />
);

export default LoadingSpinner;
