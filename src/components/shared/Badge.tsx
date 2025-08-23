import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: BadgeProps) {
  const variantClasses = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const classes = [
    'inline-flex items-center rounded-full font-medium',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ');

  return <span className={classes}>{children}</span>;
}

interface TrustBadgeProps {
  icon?: React.ReactNode;
  text: string;
  className?: string;
}

export function TrustBadge({ icon, text, className = '' }: TrustBadgeProps) {
  return (
    <div className={`trust-badge ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </div>
  );
}

interface StatBadgeProps {
  value: string | number;
  label: string;
  className?: string;
}

export function StatBadge({ value, label, className = '' }: StatBadgeProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl font-bold text-primary">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
