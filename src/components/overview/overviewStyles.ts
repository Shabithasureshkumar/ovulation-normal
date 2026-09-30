/** Soft white panel used for every section inside the ovulation overview container. */
export const insetCard =
  'min-w-0 bg-white rounded-[24px] shadow-[0px_6px_18px_-10px_rgba(236,72,153,0.16)]';

/** Icon colour pairs (badge background + glyph) from the design. */
export const ICON_TONES = {
  purple: 'bg-[#F4ECFF] text-[#873DE3]',
  orange: 'bg-[#FFEED1] text-[#EA7100]',
  green: 'bg-[#DCF9E5] text-[#00983B]',
  pink: 'bg-[#FFE9F5] text-[#F11174]',
  blue: 'bg-[#E0F3FF] text-[#007CDA]',
} as const;

export type IconTone = keyof typeof ICON_TONES;
