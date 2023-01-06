/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,scss,html}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'work-sans': ['Work Sans', 'sans-serif'],
      'dela-gothic': ['Dela Gothic One', 'cursive'],
      'avenir-next': ['Avenir-next', 'sans-serif'],
      'avenir--next-italic': ['Avenir-next-italic', 'sans-serif'],
      'avenir-next-bold': ['Avenir-next-bold', 'sans-serif'],
    },
    screens: {
      mobile: '375px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1440px'
    },
    extend: {
      backgroundImage: {
        // 'hero-bg-desktop-dark': "url('/static/images/BG-DESKTOP-DARK.svg')",
      },
      colors: {
        primary: '#87CEEB',
        secondary: '#839fa6',
        light: {
          primary: '#f7fbfc',
        },
        dark: {
          primary: '#00121a'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
}
