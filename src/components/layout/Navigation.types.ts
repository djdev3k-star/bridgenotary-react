import type React from 'react';
export interface NavigationMenuItems {
  label: string;
  path: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface NavigationProps {
  // Currently no props needed, but leaving interface for future extensibility
}

export interface NavigationMenuGroup {
  title: string;
  items: NavigationMenuItems[];
  columnSpan?: string;
  columns?: number;
}