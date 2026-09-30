/** Copy for the Ovulation Phase overview. */

export const PHASE_SUMMARY = {
  title: 'You are currently in your ovulation phase!',
  description:
    'Your body is at its most fertile right now. You may feel more energetic and notice positive changes in your mood.',
  encouragement: "You're doing great!",
};

export const HORMONAL_CHANGES =
  'Estrogen is typically higher around ovulation, while progesterone begins to rise afterward.';

export const LEVEL_SEGMENTS = 7;

export interface LevelReading {
  label: string;
  value: string;
  /** Filled segments out of LEVEL_SEGMENTS */
  level: number;
  description: string;
}

export const ENERGY_READING: LevelReading = {
  label: 'Energy Level',
  value: 'High',
  level: 5,
  description: 'You may feel more energetic today.',
};

export const MOOD_READING: LevelReading = {
  label: 'Mood',
  value: 'Positive',
  level: 5,
  description: 'You may feel more confident and sociable today.',
};

export const AI_INSIGHT =
  'You are in your ovulation phase, which is a great time to focus on your overall wellness. Your energy levels may be higher, and you may feel more motivated. Make the most of this phase with healthy habits!';

export const NUTRITION_TIPS = [
  'Include protein-rich foods',
  'Eat fresh fruits and vegetables',
  'Stay hydrated',
  'Try foods rich in omega-3',
];

export const EXERCISE_SUGGESTIONS = [
  'Try light to moderate exercise',
  'Walking, yoga or strength training',
  'Enjoy outdoor activities',
  'Listen to your body and avoid overexertion',
];

export const WELLNESS_TIPS = [
  'Get enough sleep',
  'Manage stress with relaxation techniques',
  'Take time for self-care',
  'Stay connected with loved ones',
];
