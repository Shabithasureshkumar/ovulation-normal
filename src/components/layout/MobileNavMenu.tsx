import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, X } from 'lucide-react';
import { useDialog } from '../../hooks/useDialog';
import { NAV_ITEMS, UNAVAILABLE_HINT } from './navItems';

interface MobileNavMenuProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

const DESKTOP_QUERY = '(min-width: 1024px)';

/** Main clinic navigation for viewports below the desktop header row. */
const MobileNavPanel: React.FC<Omit<MobileNavMenuProps, 'isOpen'>> = ({ id, onClose }) => {
  const navigate = useNavigate();
  const panelRef = useDialog<HTMLDivElement>(true, onClose);

  // The desktop header row takes over at lg, so drop the menu (and its scroll lock) when resized past it
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) onClose();
    };
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, [onClose]);

  return (
    <div className="lg:hidden">
      {/* Clicking anywhere outside the panel closes it */}
      <div aria-hidden="true" onClick={onClose} className="fixed inset-0 z-40 bg-gray-900/20" />

      <div
        ref={panelRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className="absolute z-50 top-full mt-2 left-[clamp(1rem,2.8vw,2.5rem)] right-[clamp(1rem,2.15vw,2rem)] max-h-[calc(100dvh-6rem)] overflow-y-auto bg-white rounded-[22px] border border-[#EFEEF3] shadow-[0px_18px_40px_-16px_rgba(38,33,78,0.3)] p-2"
      >
        <div className="flex items-center justify-between pl-3 pr-1 py-1">
          <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#667085]">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="touch-target w-10 h-10 rounded-full flex items-center justify-center text-[#1D2433] hover:bg-gray-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Main">
          <ul className="space-y-1">
            <li>
              <button
                type="button"
                aria-current="page"
                data-autofocus
                onClick={() => {
                  navigate('/overview');
                  onClose();
                }}
                className="w-full min-h-12 flex items-center gap-3 px-4 rounded-2xl bg-gradient-to-r from-[#4F46E5] to-[#9D76FC] text-white text-[15px] font-semibold text-left transition active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:ring-offset-2"
              >
                <LayoutDashboard className="w-5 h-5 fill-white flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
                Dashboard
              </button>
            </li>
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  disabled
                  title={UNAVAILABLE_HINT}
                  className="w-full min-h-12 flex flex-wrap items-center justify-between gap-x-3 px-4 py-2 rounded-2xl text-left text-[15px] font-semibold text-black cursor-default"
                >
                  {item}
                  <span className="text-[12px] font-medium text-[#667085]">Not available here</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ isOpen, ...props }) =>
  isOpen ? <MobileNavPanel {...props} /> : null;
