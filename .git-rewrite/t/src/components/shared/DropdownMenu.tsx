import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface DropdownItem {
  label: string;
  path: string;
  description?: string;
}

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </button>
      
      {isOpen && (
        <div 
          className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="list"
          aria-labelledby="solutions-menu"
        >
          <div className="py-1" role="none">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-proof transition-colors duration-150"
                role="menuitem"
              >
                <span className="font-semibold text-gray-800">{item.label}</span>
                {item.description && (
                  <p className="text-xs text-gray-500 mt-1">
                    {item.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
