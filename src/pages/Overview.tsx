import React, { useState } from 'react';
import { CycleStatusCard } from '../components/overview/CycleStatusCard';
import { PhaseInfoCard } from '../components/overview/PhaseInfoCard';
import { PhaseSummary } from '../components/overview/PhaseSummary';
import { PhaseInsightCards } from '../components/overview/PhaseInsightCards';
import { AIInsights } from '../components/overview/AIInsights';
import { WellnessTips } from '../components/overview/WellnessTips';
import { AIAssistantModal } from '../components/modals/AIAssistantModal';
import { TipsModal } from '../components/modals/TipsModal';
import { LogPeriodModal } from '../components/modals/LogPeriodModal';
import { Toast } from '../components/layout/Toast';
import { useToast } from '../hooks/useToast';
import { TODAY_CYCLE_DAY } from '../data/cycleData';

export const Overview: React.FC = () => {
  const [isAvaOpen, setIsAvaOpen] = useState(false);
  const [isTipsOpen, setIsTipsOpen] = useState(false);
  const [isLogPeriodOpen, setIsLogPeriodOpen] = useState(false);
  const { toastMessage, showToast } = useToast();

  return (
    <div className="w-full space-y-[clamp(1rem,1.75vw,1.5625rem)] lg:pr-2.5">
      {/* Top Row: Cycle status card + Phase information card */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] xl:grid-cols-[430px_minmax(0,1fr)] gap-[clamp(1rem,1.8vw,1.625rem)]">
        <CycleStatusCard
          cycleDay={TODAY_CYCLE_DAY}
          phase="Ovulation Phase"
          status="Healthy"
          onOpenSummary={() => setIsAvaOpen(true)}
        />
        <PhaseInfoCard onViewTips={() => setIsTipsOpen(true)} onLogPeriod={() => setIsLogPeriodOpen(true)} />
      </div>

      {/* Everything below sits inside one outer card, as in the design */}
      <div className="bg-white rounded-[28px] border border-[#F1EEFF] shadow-[0px_12px_32px_-14px_rgba(110,90,230,0.16)] p-3 sm:p-4 lg:pl-8 lg:pr-[15px] lg:pt-[18px] lg:pb-[57px] space-y-[15px]">
        <PhaseSummary />
        <PhaseInsightCards />
        <AIInsights />
        <WellnessTips />
      </div>

      <AIAssistantModal
        isOpen={isAvaOpen}
        onClose={() => setIsAvaOpen(false)}
        currentPhase="Ovulation"
        cycleDay={TODAY_CYCLE_DAY}
      />

      <TipsModal isOpen={isTipsOpen} onClose={() => setIsTipsOpen(false)} phase="Ovulation" />

      <LogPeriodModal
        isOpen={isLogPeriodOpen}
        onClose={() => setIsLogPeriodOpen(false)}
        onSaved={(entry) => {
          setIsLogPeriodOpen(false);
          showToast(`Period logged for today · ${entry.flow} flow`);
        }}
      />

      <Toast message={toastMessage} />
    </div>
  );
};
