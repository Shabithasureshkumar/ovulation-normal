import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Search, Settings, Bell, Menu } from 'lucide-react';
import type { Clinician, Patient } from '../../types/cycle';
import { MobileNavMenu } from './MobileNavMenu';
import { NAV_ITEMS, UNAVAILABLE_HINT } from './navItems';

interface GlobalHeaderProps {
  clinician: Clinician;
  /** Shown as the profile avatar in the mobile header */
  patient: Patient;
}

const MOBILE_MENU_ID = 'mobile-main-menu';

// Mobile (< md): soft grey circles with outline icons. md+: the desktop icon style.
const iconButton =
  'touch-target w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-[#F3F4F6] md:bg-transparent text-[#374151] md:text-[#667085] flex items-center justify-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF]';

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({ clinician, patient }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className="relative w-full bg-white pt-5 md:pt-[clamp(0.75rem,2.45vw,2.2rem)] pl-[clamp(1rem,2.8vw,2.5rem)] pr-[clamp(1rem,2.15vw,2rem)]">
      <div className="w-full flex items-center justify-between gap-3 sm:gap-4">
        {/* Left Navigation Group */}
        <div className="flex items-center gap-2 lg:gap-[clamp(0.75rem,1.7vw,1.5rem)] min-w-0 lg:h-[62px] lg:rounded-full lg:border lg:border-[#EFEEF3] lg:p-1 lg:pr-[clamp(0.75rem,9.13vw_-_3.97rem,4.25rem)]">
          {/* Dashboard Active Pill Button (tablet and up; on mobile it lives in the menu) */}
          <button
            type="button"
            aria-current="page"
            onClick={() => navigate('/overview')}
            className="touch-target hidden md:flex items-center gap-[clamp(0.5rem,1.4vw,1.25rem)] bg-gradient-to-r from-[#4F46E5] to-[#9D76FC] hover:from-[#4338CA] hover:to-[#8B64F5] text-white h-10 lg:h-[46px] px-3.5 lg:pl-5 lg:pr-8 rounded-full font-semibold text-ov-nav transition active:scale-95 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:ring-offset-2"
          >
            <LayoutDashboard className="w-5 h-5 lg:w-[26px] lg:h-[26px] fill-white" strokeWidth={1.5} aria-hidden="true" />
            <span>Dashboard</span>
          </button>

          {/* Header Nav Links (desktop) */}
          <nav aria-label="Main" className="hidden lg:flex items-center gap-[clamp(1rem,5.29vw_-_2.0125rem,2.75rem)] text-ov-nav font-semibold text-black whitespace-nowrap">
            {NAV_ITEMS.map((item) => (
              <button key={item} type="button" disabled title={UNAVAILABLE_HINT} className="py-2 rounded cursor-default">
                {item}
              </button>
            ))}
          </nav>

          {/* Menu trigger (below desktop) */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-haspopup="dialog"
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setIsMenuOpen(true)}
            className="touch-target lg:hidden w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-[#EDE7FE] md:border-[#EFEEF3] bg-[#FAF5FF] md:bg-transparent text-[#9B82FD] md:text-[#667085] hover:bg-[#F3ECFF] md:hover:bg-gray-100 transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF]"
          >
            <Menu className="w-[18px] h-[18px] md:w-5 md:h-5" strokeWidth={2.25} aria-hidden="true" />
          </button>
        </div>

        {/* Right Controls & Profile */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 flex-shrink-0">
          <button
            type="button"
            aria-label="Search"
            disabled
            title={UNAVAILABLE_HINT}
            className="w-9 h-9 md:w-11 md:h-11 lg:w-[52px] lg:h-[52px] rounded-full bg-[#F3F4F6] md:bg-[#DDE2E8] text-[#374151] md:text-[#1D2433] flex items-center justify-center cursor-default"
          >
            <Search className="w-4 h-4 md:w-5 md:h-5 lg:w-[22px] lg:h-[22px] stroke-2 md:stroke-[2.5]" aria-hidden="true" />
          </button>

          <button type="button" aria-label="Settings" onClick={() => navigate('/settings')} className={`${iconButton} hover:text-gray-900 hover:bg-gray-100 active:scale-95`}>
            <Settings className="w-4 h-4 md:w-6 md:h-6 lg:w-[26px] lg:h-[26px] fill-none md:fill-[#667085] md:text-white stroke-2 md:stroke-[1.5]" aria-hidden="true" />
          </button>

          <button type="button" aria-label="Notifications" disabled title={UNAVAILABLE_HINT} className={`${iconButton} cursor-default`}>
            <Bell className="w-4 h-4 md:w-6 md:h-6 md:fill-current" aria-hidden="true" />
          </button>

          <span aria-hidden="true" className="md:hidden w-px h-9 bg-[#E5E7EB]" />

          {/* Profile: the patient on mobile, the signed-in clinician from md up */}
          <div className="flex items-center gap-[15px] md:pl-2 lg:pl-[18px]">
            <img
              src={patient.avatarUrl}
              alt={patient.name}
              className="md:hidden w-9 h-9 rounded-full object-cover object-top flex-shrink-0 bg-pink-50 ring-2 ring-[#F9C6DD]"
            />
            <img
              src={clinician.avatarUrl}
              alt=""
              className="hidden md:block w-9 h-9 lg:w-[38px] lg:h-[38px] rounded-full object-cover flex-shrink-0 bg-white ring-1 ring-[#E5E7EB]"
            />
            <div className="hidden md:flex flex-col text-left">
              <span className="text-[12px] font-medium text-[#111827] leading-tight">{clinician.name}</span>
              <span className="text-[10.5px] text-[#7D8281] leading-tight mt-1">{clinician.role}</span>
            </div>
          </div>
        </div>
      </div>

      <MobileNavMenu id={MOBILE_MENU_ID} isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};
