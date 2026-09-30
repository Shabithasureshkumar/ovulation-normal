import React from 'react';
import { Brain } from 'lucide-react';
import { AI_INSIGHT } from '../../data/ovulationOverview';
import { ICON_TONES, insetCard } from './overviewStyles';

export const AIInsights: React.FC = () => (
  <section
    aria-labelledby="ai-insights-title"
    className={`${insetCard} pl-[clamp(1rem,1.75vw,1.5625rem)] pr-5 pt-5 lg:pt-6 pb-5 lg:pb-[19px] flex items-start gap-[clamp(0.75rem,1.3vw,1.1875rem)]`}
  >
    <span
      aria-hidden="true"
      className={`w-11 h-11 lg:w-[50px] lg:h-[50px] rounded-full flex items-center justify-center flex-shrink-0 ${ICON_TONES.purple}`}
    >
      <Brain className="w-[22px] h-[22px] lg:w-[26px] lg:h-[26px]" strokeWidth={1.75} />
    </span>
    <div className="min-w-0 max-w-[960px]">
      <h3 id="ai-insights-title" className="text-ov-heading font-bold text-[#17152B] leading-[1.3] mt-px">
        AI Insights
      </h3>
      <p className="text-ov-body text-[#5E566F] leading-[1.47] mt-[7px]">{AI_INSIGHT}</p>
    </div>
  </section>
);
