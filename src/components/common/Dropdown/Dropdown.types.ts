export interface DropdownProps {
  label: string;
  items: {
    label: string;
    href: string;
    description?: string;
  }[];
  className?: string;
}
