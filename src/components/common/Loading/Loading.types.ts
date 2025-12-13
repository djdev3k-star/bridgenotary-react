export interface LoadingState {
  isLoading: boolean;
  error?: string;
  loadingText?: string;
}

export interface WithLoadingProps<T = {}> extends LoadingState {
  children: (props: T) => React.ReactNode;
  data?: T;
}
