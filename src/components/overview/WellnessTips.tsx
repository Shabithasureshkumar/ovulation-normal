import React from 'react';
import { Apple, CircleCheck, Dumbbell, Leaf, type LucideIcon } from 'lucide-react';
import { EXERCISE_SUGGESTIONS, NUTRITION_TIPS, WELLNESS_TIPS } from '../../data/ovulationOverview';
import { CardHeading } from './CardHeading';
import { insetCard, type IconTone } from './overviewStyles';

interface TipCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  tone: IconTone;
  checkClass: string;
  tips: string[];
}

const TipCard: React.FC<TipCardProps> = ({ id, title, icon, tone, checkClass, tips }) => (
  <section
    aria-labelledby={id}
    className={`${insetCard} px-[clamp(1rem,1.4vw,1.25rem)] pt-5 lg:pt-6 pb-5 lg:pb-[18px]`}
  >
    <CardHeading id={id} icon={icon} tone={tone} title={title} />
    <ul className="mt-2.5 space-y-[9.5px] max-w-[320px]">
      {tips.map((tip) => (
        <li key={tip} className="flex items-start gap-[11px] text-ov-list text-[#5E566F] leading-[1.28]">
          <CircleCheck className={`w-[18px] h-[18px] flex-shrink-0 mt-px ${checkClass}`} strokeWidth={2} aria-hidden="true" />
          <span className="min-w-0">{tip}</span>
        </li>
      ))}
    </ul>
  </section>
);

export const WellnessTips: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
    <TipCard id="nutrition-tips-title" title="Nutrition Tips" icon={Apple} tone="pink" checkClass="text-[#F0076F]" tips={NUTRITION_TIPS} />
    <TipCard
      id="exercise-suggestions-title"
      title="Exercise Suggestions"
      icon={Dumbbell}
      tone="blue"
      checkClass="text-[#F0076F]"
      tips={EXERCISE_SUGGESTIONS}
    />
    <TipCard id="general-wellness-title" title="General Wellness" icon={Leaf} tone="green" checkClass="text-[#009A3C]" tips={WELLNESS_TIPS} />
  </div>
);
