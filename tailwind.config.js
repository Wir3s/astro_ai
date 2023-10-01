/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: { keyframes: {
      'custom-pulse': {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.5 },
      },
    },
    animation: {
      'custom-pulse': 'custom-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', // 1s controls the speed
    },},
  },
  plugins: [],
};
