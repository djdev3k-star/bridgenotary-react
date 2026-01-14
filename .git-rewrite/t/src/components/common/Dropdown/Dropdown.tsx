import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { DropdownProps } from './Dropdown.types';
import { cn } from '@/utils/classNames';

const Dropdown: React.FC<DropdownProps> = ({ label, items, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      ref={dropdownRef}
      className="relative inline-block text-left"
    >
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-x-1 text-sm font-semibold leading-6",
          "hover:text-blue-600 transition-colors duration-200",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <ChevronDownIcon 
          className={cn(
            "h-5 w-5 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )} 
          aria-hidden="true" 
        />
      </button>

      {isOpen && (
        <div 
          className={cn(
            "absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg",
            "ring-1 ring-black ring-opacity-5 focus:outline-none",
            "animate-fadeIn"
          )}
        >
          <div className="py-1">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                <div>
                  <div>{item.label}</div>
                  {item.description && (
                    <p className="mt-1 text-xs text-gray-500">
                      {item.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
