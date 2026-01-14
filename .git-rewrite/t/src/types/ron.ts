export interface ProcessStep {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface RequirementItem {
  title: string;
  description: string;
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  loading?: 'eager' | 'lazy';
}
