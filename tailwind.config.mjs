/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      core: '#C69754',
      neutral: {
        100: '#FAEBDC',
        900: '#282828',
      },
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
    },
    fontFamily: {
      display: ['Printvetica', 'Helvetica', 'Arial', 'sans-serif'],
      sans: ['Helvetica Now', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['IBM Plex Mono'],
    },
    fontSize: {
      xs: ['14px', '14px'],
      sm: ['16px', '18px'],
      base: [
        '22px',
        { lineHeight: '24px', letterSpacing: '-0.1px', fontWeight: 700 },
      ],
      lg: [
        '30px',
        { lineHeight: '34px', letterSpacing: '-0.2px', fontWeight: 700 },
      ],
      xl: ['44px', '38px'],
      '2xl': ['60px', '52px'],
      '3xl': [
        'clamp(80px, 0.75rem + 8.85vw, 120px)',
        'clamp(70px, 1.19rem + 6.64vw, 100px)',
      ],
    },
    // For future-compatibility
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    animation: {
      'slide-in-right': 'slide-in-right 200ms linear forwards, hasHovered 1ms',
      'slide-out-right':
        'slide-out-right 200ms linear forwards, hasHovered 1ms paused',
      grain: 'grain 300ms steps(1, end) infinite',
    },
    keyframes: {
      hasHovered: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      'slide-in-right': {
        '50%': { transform: 'translateX(100%)' },
        '50.01%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      'slide-out-right': {
        '50%': { transform: 'translateX(100%)' },
        '50.01%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      grain: {
        '0%': {
          transform: 'scale(100%, 100%)',
        },
        '25%': {
          transform: 'scale(-100%, 100%)',
        },
        '50%': {
          transform: 'scale(-100%, -100%)',
        },
        '75%': {
          transform: 'scale(100%, -100%)',
        },
      },
    },

    extend: {
      spacing: {
        30: '7.5rem',
        75: '18.75rem',
      },
      gridColumn: {
        content: 'content',
        full: 'full',
        'span-13': 'span 13 / span 13',
      },
      screens: {
        '3xl': '1728px',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
