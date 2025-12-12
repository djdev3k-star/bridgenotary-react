import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface DropdownItem {
  label: string;
  path: string;
  description?: string;
  icon?: React.ReactNode;
}

interface DropdownGroup {
  title: string;
  items: DropdownItem[];
  columnSpan?: string;
  columns?: number;
}

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items?: DropdownItem[];
  groups?: DropdownGroup[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, items = [], groups }) => {
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
          className="absolute left-0 mt-4 w-[1200px] max-w-[96vw] rounded shadow-xl bg-white ring-1 ring-black/5 focus:outline-none"
          role="list"
          aria-labelledby="solutions-menu"
        >
          {groups && groups.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
              {groups.map((group) => {
                const itemLayoutClass = group.columns === 2 ? "grid grid-cols-2 gap-3" : "space-y-3";
                return (
                  <div key={group.title} className={`space-y-3 ${group.columnSpan ?? ''}`}>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">{group.title}</h3>
                    <div className={itemLayoutClass}>
                      {group.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="group flex gap-3 rounded px-4 py-3 hover:bg-neutral-50 transition-colors"
                          role="menuitem"
                        >
                          {item.icon && (
                            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-electric-blue/10 text-electric-blue">
                              {item.icon}
                            </span>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="text-base font-semibold text-neutral-900 truncate">{item.label}</div>
                            {item.description && (
                              <p className="text-sm text-neutral-600 mt-1 leading-relaxed line-clamp-2">{item.description}</p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
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
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
