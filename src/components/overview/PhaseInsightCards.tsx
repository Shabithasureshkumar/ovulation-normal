import React from 'react';
import { Sparkles, Zap, Smile, type LucideIcon } from 'lucide-react';
import {
  ENERGY_READING,
  HORMONAL_CHANGES,
  LEVEL_SEGMENTS,
  MOOD_READING,
  type LevelReading,
} from '../../data/ovulationOverview';
import { CardHeading } from './CardHeading';
import { insetCard, type IconTone } from './overviewStyles';

const cardPadding = 'px-[clamp(1rem,1.4vw,1.25rem)] pt-5 lg:pt-[25px] pb-5 lg:pb-[18px]';

/** Filled vs empty segments, e.g. 5 of 7 for "High". */
const LevelMeter: React.FC<{ reading: LevelReading; fillClass: string }> = ({ reading, fillClass }) => (
  <div
    role="img"
    aria-label={`${reading.label}: ${reading.value}, ${reading.level} of ${LEVEL_SEGMENTS}`}
    className="flex items-center gap-[5px] mt-2"
  >
    {Array.from({ length: LEVEL_SEGMENTS }, (_, i) => (
      <span
        key={i}
        className={`w-[17px] h-[15px] rounded-[4px] ${i < reading.level ? fillClass : 'bg-[#F1E3ED]'}`}
      />
    ))}
  </div>
);

const LevelCard: React.FC<{
  id: string;
  reading: LevelReading;
  icon: LucideIcon;
  tone: IconTone;
  fillClass: string;
}> = ({ id, reading, icon, tone, fillClass }) => (
  <section aria-labelledby={id} className={`${insetCard} ${cardPadding}`}>
    <CardHeading id={id} icon={icon} tone={tone} title={reading.label} />
    <p className="text-ov-title font-semibold text-[#17152B] leading-[1.3] mt-[11px]">{reading.value}</p>
    <LevelMeter reading={reading} fillClass={fillClass} />
    <p className="text-ov-body text-[#5E566F] leading-[1.45] mt-2.5 max-w-[330px]">{reading.description}</p>
  </section>
);

export const PhaseInsightCards: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
    <section aria-labelledby="hormonal-changes-title" className={`${insetCard} ${cardPadding}`}>
      <CardHeading id="hormonal-changes-title" icon={Sparkles} tone="purple" title="Hormonal Changes" />
      <p className="text-ov-body text-[#8A3FE6] leading-[1.45] mt-2.5 max-w-[280px]">{HORMONAL_CHANGES}</p>
    </section>

    <LevelCard id="overview-energy-title" reading={ENERGY_READING} icon={Zap} tone="orange" fillClass="bg-[#F2217E]" />
    <LevelCard id="overview-mood-title" reading={MOOD_READING} icon={Smile} tone="green" fillClass="bg-[#03A14A]" />
  </div>
);
