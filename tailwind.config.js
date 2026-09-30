/**
 * Fluid type size that reaches `maxPx` at the 1440px design width and eases down to `minPx` at 375px.
 * @param {number} minPx
 * @param {number} maxPx
 */
const fluid = (minPx, maxPx) => {
  const slope = (maxPx - minPx) / (1440 - 375);
  const intercept = minPx - slope * 375;
  return `clamp(${minPx / 16}rem, ${(intercept / 16).toFixed(4)}rem + ${(slope * 100).toFixed(4)}vw, ${maxPx / 16}rem)`;
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      // Type scale of the Ovulation overview design (values are the 1440px sizes)
      fontSize: {
        'ov-hero': fluid(30, 48),
        'ov-heading': fluid(18, 22),
        'ov-title': fluid(17, 19.5),
        'ov-body': fluid(15.5, 19),
        'ov-sub': fluid(15, 18),
        'ov-tab': fluid(15, 18.5),
        'ov-card-title': fluid(16, 17.5),
        'ov-list': fluid(15, 16),
        'ov-nav': fluid(13, 15),
      },
    },
  },
  plugins: [],
}
