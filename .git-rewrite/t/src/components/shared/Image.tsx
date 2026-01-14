import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ alt, className = '', ...props }) => {
  return (
    <img
      alt={alt}
      className={`max-w-full ${className}`}
      loading="lazy"
      {...props}
    />
  );
};

export default Image;
