import React from 'react';
import meditation from '../../assets/meditation.png';

interface PhaseInfoCardProps {
  onViewTips: () => void;
  onLogPeriod: () => void;
}

export const PhaseInfoCard: React.FC<PhaseInfoCardProps> = ({ onViewTips, onLogPeriod }) => {
  return (
    <div className="w-full min-w-0 lg:min-h-[213px] bg-white rounded-[28px] pl-[clamp(1rem,1.75vw,1.5625rem)] pr-3 py-5 lg:py-[9px] border border-[#F1ECF2] shadow-[0px_10px_30px_-14px_rgba(120,80,160,0.18)] flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 overflow-hidden">
      <div className="min-w-0 max-w-[520px] pr-1">
        <h2 className="text-ov-card-title font-bold text-[#17152B] leading-tight">
          You&apos;re in your ovulation phase
        </h2>
        <p className="text-[13.5px] text-[#44546F] leading-[23px] mt-3 max-w-[500px]">
          Your body is at its most fertile right now. Estrogen is high, and you may notice clearer cervical mucus, a rise in basal body temperature and increased energy.
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-[15px]">
          <button
            type="button"
            onClick={onViewTips}
            aria-haspopup="dialog"
            className="touch-target h-10 px-5 bg-gradient-to-r from-[#F860AE] to-[#D048C0] hover:from-[#EC4D9F] hover:to-[#BF3BB0] text-white text-[14px] font-medium rounded-full shadow-[0px_6px_14px_-6px_rgba(208,72,192,0.55)] transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2"
          >
            View Tips
          </button>
          <button
            type="button"
            onClick={onLogPeriod}
            aria-haspopup="dialog"
            className="touch-target h-10 px-5 bg-[#FFE5F2] hover:bg-[#FDD5EA] text-[#EE4D9B] text-[14px] font-medium rounded-full transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2"
          >
            Log period
          </button>
        </div>
      </div>

      <img
        src={meditation}
        alt="Woman meditating cross-legged, smiling calmly"
        width={352}
        height={385}
        className="w-[clamp(7rem,12.25vw,11rem)] h-auto object-contain flex-shrink-0 self-center sm:self-auto"
      />
    </div>
  );
};
