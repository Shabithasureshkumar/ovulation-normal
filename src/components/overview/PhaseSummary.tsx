import React from 'react';
import { PHASE_SUMMARY } from '../../data/ovulationOverview';
import { insetCard } from './overviewStyles';

export const PhaseSummary: React.FC = () => (
  <section
    aria-labelledby="phase-summary-title"
    className={`${insetCard} pl-[clamp(1rem,1.6vw,1.4375rem)] pr-[clamp(1rem,1.5vw,1.375rem)] pt-5 lg:pt-[30px] pb-5 lg:pb-[18px] flex flex-col md:flex-row md:items-start justify-between gap-4`}
  >
    <div className="min-w-0 max-w-[760px]">
      <h2 id="phase-summary-title" className="text-ov-heading font-bold text-[#17152B] leading-[1.3]">
        {PHASE_SUMMARY.title}
      </h2>
      <p className="text-ov-body text-[#5E566F] leading-[1.38] mt-2.5">{PHASE_SUMMARY.description}</p>
    </div>
    <p className="self-start flex-shrink-0 inline-flex items-center h-12 lg:h-[60px] px-5 lg:px-[21px] rounded-full bg-[#FFF4FA] text-ov-body font-semibold text-[#E0006A] whitespace-nowrap">
      {PHASE_SUMMARY.encouragement}
    </p>
  </section>
);
