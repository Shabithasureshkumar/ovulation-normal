import React from 'react';
import { getPhaseForCycleDay } from '../../data/cycleData';
import type { CyclePhase } from '../../types/cycle';

interface CycleStatusCardProps {
  cycleDay: number;
  phase: string;
  status: string;
  onOpenSummary: () => void;
}

// Ring geometry (viewBox units): four equal arcs, one centred on each quarter of the cycle.
const RADIUS = 63.5;
const STROKE = 15;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Timeline stops, in cycle order, mapped to the tracker's phase names. */
const TIMELINE: { label: string; phase: CyclePhase }[] = [
  { label: 'Period', phase: 'Menstruation' },
  { label: 'Follicular', phase: 'Fertile Window' },
  { label: 'Ovulation', phase: 'Ovulation' },
  { label: 'Luteal', phase: 'Luteal Phase' },
];

const CYCLE_LENGTH = 28;

export const CycleStatusCard: React.FC<CycleStatusCardProps> = ({ cycleDay, phase, status, onOpenSummary }) => {
  const progress = Math.min(Math.max(cycleDay / CYCLE_LENGTH, 0), 1);
  const activeIndex = Math.max(0, TIMELINE.findIndex((stop) => stop.phase === getPhaseForCycleDay(cycleDay)));
  const fillPercent = (activeIndex / (TIMELINE.length - 1)) * 100;

  return (
    <div className="w-full min-w-0 lg:min-h-[213px] bg-[url('/images/status-card-bg.webp')] bg-cover bg-[position:right_center] bg-no-repeat rounded-[28px] pl-[clamp(1rem,1.9vw,1.6875rem)] pr-4 pt-5 pb-4 border border-white/70 shadow-[0px_10px_30px_-14px_rgba(180,80,200,0.35)] flex flex-col justify-center gap-3">
      <div className="flex items-center gap-[clamp(1rem,1.55vw,1.375rem)]">
      <button
        type="button"
        onClick={onOpenSummary}
        aria-haspopup="dialog"
        aria-label={`Cycle day ${cycleDay}, ${phase}. Open AI summary`}
        className="relative w-[clamp(6.5rem,9.75vw,8.75rem)] aspect-square flex-shrink-0 rounded-full transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2"
      >
        <svg className="w-full h-full" viewBox="0 0 140 140" aria-hidden="true">
          <defs>
            <linearGradient id="cycle-ring-gradient" x1="0" y1="140" x2="140" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#F466B3" />
              <stop offset="0.5" stopColor="#EC68C0" />
              <stop offset="1" stopColor="#D26FDB" />
            </linearGradient>
          </defs>
          <circle cx="70" cy="70" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth={STROKE} />
          <circle
            cx="70"
            cy="70"
            r={RADIUS}
            fill="none"
            stroke="url(#cycle-ring-gradient)"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={`${progress * CIRCUMFERENCE} ${CIRCUMFERENCE}`}
            transform="rotate(-90 70 70)"
          />
        </svg>
        <div className="absolute inset-[15px] rounded-full bg-white/90 flex flex-col items-center justify-center text-center">
          <span className="text-[clamp(1.25rem,0.95rem+0.75vw,1.5rem)] font-bold text-[#17152B] leading-none">{cycleDay}</span>
          <span className="text-[clamp(0.625rem,0.55rem+0.25vw,0.71875rem)] font-normal text-[#3F3F4F] tracking-[0.06em] mt-2">CYCLE DAY</span>
        </div>
      </button>

      <div className="flex flex-col items-start min-w-0">
        <span className="text-[clamp(0.6875rem,0.6rem+0.2vw,0.8125rem)] font-normal text-[#4A4A59] uppercase tracking-[0.1em] leading-none">Status</span>
        <h2 className="text-ov-title font-semibold text-[#17152B] leading-tight mt-[11px]">{phase}</h2>
        <p className="text-ov-title font-semibold text-[#F25AAE] leading-tight mt-[7px]">{status}</p>
      </div>
      </div>

      <ol className="relative flex justify-between px-1 pr-4" aria-label="Cycle phases">
        <span aria-hidden="true" className="absolute left-7 right-10 top-[5px] h-[3px] rounded-full bg-white/80" />
        <span aria-hidden="true" className="absolute left-7 top-[5px] h-[3px] rounded-full bg-gradient-to-r from-[#F466B3] to-[#9B6BE8]" style={{ width: `calc((100% - 4.25rem) * ${fillPercent / 100})` }} />
        {TIMELINE.map((stop, index) => (
          <li key={stop.label} className="relative z-10 flex flex-col items-center gap-1.5 w-12" aria-current={index === activeIndex ? 'step' : undefined}>
            <span
              className={`w-[13px] h-[13px] rounded-full border-2 ${
                index === activeIndex
                  ? 'bg-white border-[#7C4DDB] ring-4 ring-[#7C4DDB]/20'
                  : index < activeIndex
                    ? 'bg-[#F466B3] border-[#F466B3]'
                    : 'bg-white border-[#CDB8F2]'
              }`}
            />
            <span className={`text-[10px] ${index === activeIndex ? 'font-semibold text-[#17152B]' : 'text-[#6B5F80]'}`}>{stop.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};
