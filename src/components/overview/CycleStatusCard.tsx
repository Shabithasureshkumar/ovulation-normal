import React from 'react';
import { Sparkles } from 'lucide-react';

interface CycleStatusCardProps {
  cycleDay: number;
  phase: string;
  status: string;
  onOpenSummary: () => void;
}

// Ring geometry (viewBox units): four equal arcs, one centred on each quarter of the cycle.
const RADIUS = 63.5;
const STROKE = 13;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const ARC_DEGREES = 33;
const ARC_LENGTH = (ARC_DEGREES / 360) * CIRCUMFERENCE;
const ARC_CENTRES = [0, 90, 180, 270];

export const CycleStatusCard: React.FC<CycleStatusCardProps> = ({ cycleDay, phase, status, onOpenSummary }) => {
  return (
    <div className="w-full min-w-0 lg:min-h-[213px] bg-white rounded-[28px] pl-[clamp(1rem,1.9vw,1.6875rem)] pr-4 py-5 border border-[#F4F1F7] shadow-[0px_10px_30px_-14px_rgba(120,80,160,0.18)] flex items-center gap-[clamp(1rem,1.55vw,1.375rem)]">
      <div className="relative w-[clamp(6.5rem,9.75vw,8.75rem)] aspect-square flex-shrink-0">
        <svg className="w-full h-full" viewBox="0 0 140 140" aria-hidden="true">
          <defs>
            <linearGradient id="cycle-ring-gradient" x1="0" y1="140" x2="140" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#F466B3" />
              <stop offset="0.5" stopColor="#EC68C0" />
              <stop offset="1" stopColor="#D26FDB" />
            </linearGradient>
          </defs>
          <circle cx="70" cy="70" r={RADIUS} fill="none" stroke="#FCEEF6" strokeWidth={STROKE} />
          {ARC_CENTRES.map((centre) => (
            <circle
              key={centre}
              cx="70"
              cy="70"
              r={RADIUS}
              fill="none"
              stroke="url(#cycle-ring-gradient)"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={`${ARC_LENGTH} ${CIRCUMFERENCE - ARC_LENGTH}`}
              // Circles start at 3 o'clock; rotate so each arc is centred on its angle (0° = 12 o'clock).
              transform={`rotate(${centre - 90 - ARC_DEGREES / 2} 70 70)`}
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-[clamp(1.25rem,0.95rem+0.75vw,1.5rem)] font-semibold text-[#17152B] leading-none">{cycleDay}</span>
          <span className="text-[clamp(0.625rem,0.55rem+0.25vw,0.71875rem)] font-normal text-[#3F3F4F] tracking-[0.06em] mt-2">CYCLE DAY</span>
        </div>
      </div>

      <div className="flex flex-col items-start min-w-0">
        <span className="text-[clamp(0.6875rem,0.6rem+0.2vw,0.8125rem)] font-normal text-[#4A4A59] uppercase tracking-[0.1em] leading-none">Status</span>
        <h2 className="text-ov-title font-semibold text-[#17152B] leading-tight mt-[11px]">{phase}</h2>
        <p className="text-ov-title font-semibold text-[#F25AAE] leading-tight mt-[7px]">{status}</p>
        <button
          type="button"
          onClick={onOpenSummary}
          aria-haspopup="dialog"
          className="touch-target inline-flex items-center gap-1.5 mt-[18px] max-w-full min-h-[26px] py-1 sm:py-0 sm:h-[26px] px-[15px] bg-[#FFF0FA] hover:bg-[#FCE3F4] rounded-[13px] sm:rounded-full text-left text-[clamp(0.75rem,0.7rem+0.1vw,0.8125rem)] max-sm:leading-tight font-medium text-[#E246B5] sm:whitespace-nowrap transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2"
        >
          <Sparkles size={13} className="fill-[#FBBF24] text-[#F59E0B]" aria-hidden="true" />
          AI Summary Ready
        </button>
      </div>
    </div>
  );
};
