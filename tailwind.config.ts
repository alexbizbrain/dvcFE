// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['var(--font-poppins)', 'sans-serif'],
//       },
//       colors: {
//         golden: 'var(--bg_golden)',
//       }  
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        golden: '#A87C39', // Direct hex value instead of CSS variable
      },
      // Add custom utilities
      backgroundColor: {
        'golden': '#A87C39',
        'black': "#151515"
      },
      textColor: {
        'golden': '#A87C39',
      },
    },
  },
  plugins: [
    // Add custom utilities plugin
    function({ addUtilities }: any) {
      const newUtilities = {
        '.bg-golden': {
          backgroundColor: '#A87C39',
        },
        '.text-golden': {
          color: '#A87C39',
        },
        '.border-golden': {
          borderColor: '#A87C39',
        },
        '.hover\\:bg-golden:hover': {
          backgroundColor: '#A87C39',
        },
        '.hover\\:text-golden:hover': {
          color: '#A87C39',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
