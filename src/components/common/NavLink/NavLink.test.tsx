import React from 'react';
import NavLink from './NavLink';
import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

// Mock next/navigation usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

const mockUsePathname = usePathname as jest.Mock;

describe('NavLink', () => {
  beforeEach(() => {
    mockUsePathname.mockReset();
  });

  it('renders link with children correctly', () => {
    mockUsePathname.mockReturnValue('/');
    
    render(
      <NavLink href="/">
        Home
      </NavLink>
    );
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('applies active class when path matches exactly', () => {
    mockUsePathname.mockReturnValue('/about');
    
    render(
      <NavLink href="/about" exact>
        About
      </NavLink>
    );
    
    expect(screen.getByRole('link')).toHaveClass('text-blue-600');
  });

  it('applies active class when path starts with link href', () => {
    mockUsePathname.mockReturnValue('/products/123');
    
    render(
      <NavLink href="/products">
        Products
      </NavLink>
    );
    
    expect(screen.getByRole('link')).toHaveClass('text-blue-600');
  });

  it('does not apply active class when paths do not match', () => {
    mockUsePathname.mockReturnValue('/about');
    
    render(
      <NavLink href="/contact">
        Contact
      </NavLink>
    );
    
    expect(screen.getByRole('link')).not.toHaveClass('text-blue-600');
  });

  it('applies custom className and activeClassName', () => {
    mockUsePathname.mockReturnValue('/services');
    
    render(
      <NavLink
        href="/services"
        className="custom-class"
        activeClassName="active-custom-class"
      >
        Services
      </NavLink>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-class');
    expect(link).toHaveClass('active-custom-class');
  });
});
