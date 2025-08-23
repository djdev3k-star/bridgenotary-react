export interface CardProps {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
