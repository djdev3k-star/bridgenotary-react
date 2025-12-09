import React from 'react';
import { WithLoadingProps } from './Loading.types';
import LoadingSpinner from './LoadingSpinner';

function WithLoading<T>({
  isLoading,
  error,
  children,
  data,
  loadingText = 'Loading...',
}: WithLoadingProps<T>) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <LoadingSpinner className="mr-2" />
        <span className="text-gray-600">{loadingText}</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 rounded-lg bg-red-50 border border-red-200">
        <p className="text-sm text-red-600">{error}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return <>{children(data)}</>;
}

export default WithLoading;
