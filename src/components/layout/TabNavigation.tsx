import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const TABS = [
  { label: 'Overview', path: '/overview' },
  { label: 'Calendar', path: '/calendar' },
  { label: 'Daily Log', path: '/daily-log' },
  { label: 'Insights', path: '/insights' },
  { label: 'Settings', path: '/settings' },
];

export const TabNavigation: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  // On narrow screens the row scrolls inside the pill; bring the active tab into view after each route change.
  useEffect(() => {
    const nav = navRef.current;
    const active = nav?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!nav || !active || nav.scrollWidth <= nav.clientWidth) return;
    const isVisible =
      active.offsetLeft >= nav.scrollLeft && active.offsetLeft + active.offsetWidth <= nav.scrollLeft + nav.clientWidth;
    if (!isVisible) nav.scrollLeft = active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2;
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      aria-label="Cycle Tracker Sections"
      className="relative w-full h-[45px] md:h-auto bg-[#FBEBF3] md:bg-[#FFF5F9] ring-1 ring-inset ring-[#FBE1EE] md:ring-0 rounded-full p-[5px] md:p-1.5 lg:py-1.5 lg:px-[11px] overflow-x-auto md:overflow-visible no-scrollbar"
    >
      <div className="flex items-center gap-[5px] md:gap-1.5 w-max md:w-auto">
        {TABS.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `touch-target h-[35px] md:h-10 lg:h-[50px] inline-flex items-center justify-center px-3 md:px-6 lg:px-[26px] whitespace-nowrap rounded-full text-[13px] md:text-ov-tab transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pink-400 ${
                isActive
                  ? 'bg-white text-[#E23192] shadow-[0px_2px_10px_rgba(239,68,134,0.08)] font-semibold'
                  : 'text-[#374151] md:text-[#4D4E5C] font-semibold md:font-medium hover:text-gray-900 hover:bg-white/50'
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
