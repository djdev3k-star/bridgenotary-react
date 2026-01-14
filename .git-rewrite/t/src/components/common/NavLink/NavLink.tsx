import React from 'react';
import { NavLinkProps } from './NavLink.types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/utils/classNames';

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  activeClassName = 'text-blue-600',
  exact = false,
}) => {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        'transition-colors duration-200 hover:text-blue-600',
        className,
        isActive && activeClassName
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
