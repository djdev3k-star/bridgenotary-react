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
  const positionTimeoutRef = useRef<NodeJS.Timeout>();
  const debounceTimeoutRef = useRef<NodeJS.Timeout>();

  // Calculate intelligent menu position with proper timing
  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !menuRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();
    
    // If menu hasn't been laid out yet, use estimated width
    const menuWidth = menuRect.width || 400;
    const menuHeight = menuRect.height || 300;
    
    let top = triggerRect.bottom + 12; // 12px gap from trigger
    let left = triggerRect.left;

    // Prevent horizontal overflow
    const viewportWidth = window.innerWidth;
    const rightEdge = left + menuWidth;
    
    if (rightEdge > viewportWidth - 8) {
      left = Math.max(8, viewportWidth - menuWidth - 8);
    }

    // Prevent vertical overflow
    const viewportHeight = window.innerHeight;
    if (top + menuHeight > viewportHeight - 8) {
      top = Math.max(8, triggerRect.top - menuHeight - 12);
    }

    setPosition({ top, left });
  }, []);

  // Debounced position update for resize/scroll
  const debouncedUpdatePosition = useCallback(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(updatePosition, 50);
  }, [updatePosition]);

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

  // Handle click outside - check if click is outside both trigger and menu
  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Node;
    const isClickOnTrigger = triggerRef.current?.contains(target);
    const isClickOnMenu = menuRef.current?.contains(target);
    
    if (!isClickOnTrigger && !isClickOnMenu) {
      setIsOpen(false);
    }
  }, []);

  // Manage event listeners with proper cleanup
  useEffect(() => {
    if (!isOpen) return;

    // Update position immediately when opening and after a brief delay for layout
    updatePosition();
    positionTimeoutRef.current = setTimeout(updatePosition, 100);

    // Add event listeners
    const handleClickListener = (e: MouseEvent) => handleClickOutside(e);
    const handleResizeListener = () => debouncedUpdatePosition();
    const handleKeyListener = (e: KeyboardEvent) => handleKeyDown(e);

    document.addEventListener('click', handleClickListener, true);
    window.addEventListener('resize', handleResizeListener);
    window.addEventListener('scroll', handleResizeListener, true);
    document.addEventListener('keydown', handleKeyListener);

    // Cleanup function
    return () => {
      if (positionTimeoutRef.current) {
        clearTimeout(positionTimeoutRef.current);
      }
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      document.removeEventListener('click', handleClickListener, true);
      window.removeEventListener('resize', handleResizeListener);
      window.removeEventListener('scroll', handleResizeListener, true);
      document.removeEventListener('keydown', handleKeyListener);
    };
  }, [isOpen, updatePosition, debouncedUpdatePosition, handleClickOutside, handleKeyDown]);

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
          className="fixed rounded-lg shadow-2xl bg-white ring-1 ring-black/5 z-50"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            maxWidth: 'calc(100vw - 1rem)',
            maxHeight: 'calc(100vh - 2rem)',
            overflow: 'auto',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
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
