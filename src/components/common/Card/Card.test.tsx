import React from 'react';
import { Card } from './Card';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Card', () => {
  const defaultProps = {
    title: 'Test Title',
    content: <div>Test Content</div>,
  };

  it('renders title and content correctly', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders footer when provided', () => {
    const footer = <div>Test Footer</div>;
    render(<Card {...defaultProps} footer={footer} />);
    expect(screen.getByText('Test Footer')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-class';
    render(<Card {...defaultProps} className={customClass} />);
    expect(screen.getByRole('heading').parentElement?.parentElement).toHaveClass(customClass);
  });

  it('handles onClick when provided', () => {
    const handleClick = jest.fn();
    render(<Card {...defaultProps} onClick={handleClick} />);
    
    const card = screen.getByRole('button');
    fireEvent.click(card);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(card).toHaveClass('cursor-pointer');
  });

  it('does not render as button when onClick is not provided', () => {
    render(<Card {...defaultProps} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
