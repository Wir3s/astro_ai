export const ZODIAC_SIGNS = [
    "capricorn",
    "aries",
    "taurus",
    "aquarius",
    "cancer",
    "gemini",
    "leo",
    "libra",
    "pisces",
    "sagittarius",
    "scorpio",
    "virgo"
  ] as const;
  
  export type ZodiacSign = typeof ZODIAC_SIGNS[number];