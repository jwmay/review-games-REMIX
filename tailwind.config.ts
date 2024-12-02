import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         'primary': '#cd00ee',
  //         'secondary': '#00db00',
  //         'accent': '#f05500',
  //         'neutral': '#212827',
  //         'base-100': '#effff7',
  //         'info': '#00b7f2',
  //         'success': '#66db00',
  //         'warning': '#f5bc00',
  //         'error': '#ff7781',
  //       },
  //     },
  //   ],
  // },
  // darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        'main-page': 'url("classroom.jpg")',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [require('daisyui')],
} satisfies Config
