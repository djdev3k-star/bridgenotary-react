import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import { render, screen } from '@testing-library/react';

describe('ErrorBoundary', () => {
  beforeEach(() => {
    // Suppress console.error for tests since we're intentionally causing errors
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders default error UI when there is an error', () => {
    const ThrowError = () => {
      throw new Error('Test error');
      return null;
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });

  it('renders custom fallback when provided', () => {
    const fallback = <div>Custom Error Message</div>;
    const ThrowError = () => {
      throw new Error('Test error');
      return null;
    };

    render(
      <ErrorBoundary fallback={fallback}>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom Error Message')).toBeInTheDocument();
  });
});
