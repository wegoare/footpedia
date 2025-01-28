import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.example-class': {
          color: 'red',
        },
      });
    }),
  ],
};
