import React, { useState } from 'react';
import { ImageProps } from '@/types/ron';

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fallback = '/placeholder.png',
  className = '',
  loading = 'lazy',
  ...props
}) => {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      loading={loading}
      className={`max-w-full ${className}`}
      onError={() => setError(true)}
      {...props}
    />
  );
};

export default Image;
