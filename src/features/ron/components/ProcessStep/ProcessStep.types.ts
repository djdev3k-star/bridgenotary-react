interface ProcessStepProps {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
  active?: boolean;
  children?: React.ReactNode;
  onComplete?: () => void;
  onNext?: () => void;
  onBack?: () => void;
  isLoading?: boolean;
  error?: string;
}
