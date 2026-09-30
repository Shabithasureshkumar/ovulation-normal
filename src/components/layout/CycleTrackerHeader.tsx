import React from 'react';
import type { Patient } from '../../types/cycle';
import headerCalendar from '../../assets/header_calendar.png';

interface CycleTrackerHeaderProps {
  patient: Patient;
}

// Base classes are the mobile design (< md); md: values restore the tablet/desktop design.
export const CycleTrackerHeader: React.FC<CycleTrackerHeaderProps> = ({ patient }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-6">
      {/* Left Title & 3D Calendar Illustration */}
      <div className="flex items-center gap-3.5 md:gap-[21px] min-w-0 mt-4 md:pl-3 md:mt-1.5">
        {/* 3D Calendar Asset */}
        <img
          src={headerCalendar}
          alt=""
          width={300}
          height={249}
          className="w-[50px] md:w-[clamp(4.5rem,8.75vw,7.875rem)] h-auto flex-shrink-0 object-contain"
        />

        {/* Title & Subtitle */}
        <div className="flex flex-col justify-center min-w-0">
          <div className="flex items-center">
            <span className="text-[10px] md:text-[clamp(0.8125rem,0.65rem+0.5vw,1.125rem)] font-bold uppercase tracking-[0.28em] text-[#F13788] leading-none">
              PERIOD
            </span>
            <span aria-hidden="true" className="h-[1.5px] md:h-[3px] w-16 md:w-[clamp(4rem,8.2vw,7.375rem)] ml-2 md:-ml-[0.28em] bg-[#F13788] rounded-full inline-block" />
          </div>

          <h1 className="text-[28px] md:text-ov-hero font-bold tracking-[-0.015em] text-[#17152B] leading-[1.15] mt-1.5 md:mt-[clamp(0.5rem,1.2vw,1.125rem)]">
            Cycle <span className="text-[#F13788]">Tracker</span>
          </h1>

          <p className="text-[12px] md:text-ov-sub text-[#6B7280] md:text-[#5D5D67] leading-snug mt-1 md:mt-[clamp(0.25rem,0.7vw,0.625rem)]">
            Understand your body, one day at a time.
          </p>
        </div>
      </div>

      {/* Right Large Pink Patient Card */}
      <div className="w-full md:w-[364px] min-h-[99px] md:min-h-[136px] bg-[linear-gradient(90deg,#EC4090_0%,#F27AB4_60%,#F79BC6_100%)] md:bg-[linear-gradient(115deg,#FC7ABF_0%,#F064B8_45%,#DA45AD_100%)] rounded-[20px] md:rounded-[22px] text-white md:shadow-[0px_14px_30px_-12px_rgba(229,70,157,0.5)] relative overflow-hidden flex-shrink-0">
        {/* Decorative arc behind the portrait */}
        <div aria-hidden="true" className="absolute right-[-35px] top-[-1px] w-[130px] h-[130px] md:right-[-108px] md:top-[27px] md:w-[244px] md:h-[244px] rounded-full bg-white/20 md:bg-[#F2AFBC]/90 pointer-events-none" />

        {/* Patient Photo, bleeding to the card edge */}
        <img
          src={patient.avatarUrl}
          alt={patient.name}
          width={600}
          height={540}
          className="absolute right-[9px] md:right-0.5 bottom-0 w-[94px] md:w-[147px] h-auto object-contain object-bottom pointer-events-none"
        />

        {/* Patient Details */}
        <div className="relative z-10 min-h-[99px] md:min-h-[136px] flex flex-col justify-center pl-4 md:pl-[21px] pr-2 py-2 md:py-3 max-w-[calc(100%-100px)] md:max-w-[62%]">
          <h2 className="text-[15px] md:text-[20px] font-bold text-white leading-tight break-words">
            {patient.name}
          </h2>

          <div className="mt-1 md:mt-[7px] text-[10.5px] md:text-[12.5px] text-white md:text-white/90 font-semibold md:font-normal leading-[15px] md:leading-[20px]">
            <p>Age: {patient.age} • {patient.gender}</p>
            <p>Height: {patient.heightCm} cm • Weight: {patient.weightKg} kg</p>
            <p>Cycle Length: {patient.cycleLengthDays} days (avg)</p>
            <p>
              BMI<span className="hidden md:inline"> </span>: {patient.bmi}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
