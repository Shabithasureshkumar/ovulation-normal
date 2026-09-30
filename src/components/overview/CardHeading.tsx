import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { ICON_TONES, type IconTone } from './overviewStyles';

interface CardHeadingProps {
  icon: LucideIcon;
  tone: IconTone;
  title: string;
  id: string;
}

/** Round tinted icon badge followed by the card title. */
export const CardHeading: React.FC<CardHeadingProps> = ({ icon: Icon, tone, title, id }) => (
  <div className="flex items-center gap-2.5 min-w-0">
    <span
      aria-hidden="true"
      className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center flex-shrink-0 ${ICON_TONES[tone]}`}
    >
      <Icon className="w-5 h-5 lg:w-[22px] lg:h-[22px]" strokeWidth={1.75} />
    </span>
    <h3 id={id} className="text-ov-title font-bold text-[#17152B] leading-tight min-w-0">
      {title}
    </h3>
  </div>
);
