import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  ariaLabel?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  trigger, 
  items = [], 
  groups,
  ariaLabel = 'Navigation menu'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  // Calculate intelligent menu position
  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !menuRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();
    
    let top = triggerRect.bottom + 12; // 12px gap from trigger
    let left = triggerRect.left;

    // Prevent horizontal overflow
    const viewportWidth = window.innerWidth;
    const rightEdge = left + Math.min(menuRect.width, viewportWidth * 0.96);
    
    if (rightEdge > viewportWidth - 8) {
      left = Math.max(8, viewportWidth - Math.min(menuRect.width, viewportWidth * 0.96) - 8);
    }

    // Prevent vertical overflow
    const viewportHeight = window.innerHeight;
    if (top + menuRect.height > viewportHeight - 8) {
      top = triggerRect.top - menuRect.height - 12;
    }

    setPosition({ top, left });
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    }

    if (e.key === 'Tab') {
      setIsOpen(false);
    }
  }, [isOpen]);

  // Handle click outside
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
        triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  // Update position when menu opens and on window resize
  useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition);
      return () => {
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition);
      };
    }
  }, [isOpen, updatePosition]);

  // Keyboard event listener
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        className="cursor-pointer inline-flex items-center"
        onClick={handleTriggerClick}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
        onKeyDown={handleKeyDown}
      >
        {trigger}
      </button>
      
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed rounded-lg shadow-2xl bg-white ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            maxWidth: 'calc(100vw - 1rem)',
            maxHeight: 'calc(100vh - 2rem)',
            overflow: 'auto',
          }}
          role="menu"
          aria-label={ariaLabel}
        >
          {groups && groups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:gap-8 md:p-8">
              {groups.map((group) => {
                const itemLayoutClass = group.columns === 2 ? "grid grid-cols-2 gap-3" : "space-y-3";
                return (
                  <div key={group.title} className={`space-y-3 ${group.columnSpan ?? ''}`}>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                      {group.title}
                    </h3>
                    <div className={itemLayoutClass}>
                      {group.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={handleClose}
                          className="group flex gap-3 rounded px-4 py-3 hover:bg-professional-blue/5 transition-colors focus:outline-none focus:ring-2 focus:ring-professional-blue focus:ring-offset-2"
                          role="menuitem"
                        >
                          {item.icon && (
                            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-professional-blue/10 text-professional-blue group-hover:scale-110 transition-transform">
                              {item.icon}
                            </span>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="text-base font-semibold text-charcoal truncate">
                              {item.label}
                            </div>
                            {item.description && (
                              <p className="text-sm text-charcoal/70 mt-1 leading-relaxed line-clamp-2">
                                {item.description}
                              </p>
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
                  onClick={handleClose}
                  className="block px-4 py-3 text-sm text-charcoal hover:bg-professional-blue/5 transition-colors focus:outline-none focus:bg-professional-blue/10"
                  role="menuitem"
                >
                  <span className="font-semibold">{item.label}</span>
                  {item.description && (
                    <p className="text-xs text-charcoal/70 mt-1">
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
