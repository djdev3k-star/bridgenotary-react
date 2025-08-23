import React from 'react';
import { CardProps } from './Card.types';
import { cn } from '@/utils/classNames';

const Card: React.FC<CardProps> = ({
  title,
  content,
  footer,
  className,
  onClick,
}) => {
  const cardClasses = cn(
    'bg-white rounded-lg shadow-md overflow-hidden',
    onClick && 'cursor-pointer hover:shadow-lg transition-shadow duration-200',
    className
  );

  const cardContent = (
    <>
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-gray-700">{content}</div>
      </div>
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </>
  );

  return onClick ? (
    <div role="button" onClick={onClick} className={cardClasses}>
      {cardContent}
    </div>
  ) : (
    <div className={cardClasses}>{cardContent}</div>
  );
};

export { Card };
