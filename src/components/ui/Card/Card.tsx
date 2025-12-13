import React from 'react';
import { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from './Card.types';

export default function Card({
  children,
  className = '',
  hover = false,
  shadow = 'md',
}: CardProps) {
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  };

  const classes = [
    'bg-white rounded',
    shadowClasses[shadow],
    hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : '',
    className,
  ].join(' ');

  return <div className={classes}>{children}</div>;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`p-6 border-b border-gray-100 ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`p-6 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
}
