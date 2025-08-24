import React from 'react';
import { Card as UICard, CardBody, CardFooter } from '../../ui/Card';
import { cn } from '@/utils/classNames';

// Legacy Card interface for backward compatibility
export interface LegacyCardProps {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Legacy Card component that uses the new UI Card
const LegacyCard: React.FC<LegacyCardProps> = ({
  title,
  content,
  footer,
  className,
  onClick,
}) => {
  const cardClasses = cn(
    'overflow-hidden',
    onClick && 'cursor-pointer',
    className
  );

  const cardContent = (
    <UICard 
      className={cardClasses} 
      hover={!!onClick}
      shadow="md"
    >
      <CardBody>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-gray-700">{content}</div>
      </CardBody>
      {footer && (
        <CardFooter className="bg-gray-50">
          {footer}
        </CardFooter>
      )}
    </UICard>
  );

  return onClick ? (
    <div role="button" onClick={onClick}>
      {cardContent}
    </div>
  ) : (
    cardContent
  );
};

// Export both the legacy Card for backward compatibility and the new UI Card components
export { LegacyCard as Card };
