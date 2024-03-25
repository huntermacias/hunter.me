const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{tsx,jsx,ts,js}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#0ea5e9', // A modern, fresh primary color
        'secondary': '#64748b', // Complementary secondary color
        // 'accent': '#facc15', // Vibrant accent color for call-to-actions and highlights
        'dark': '#0f172a', // Deep dark color for dark mode or accents
        'light': '#f1f5f9', // Light color for backgrounds or light mode
        'darkbg': '#121212',
        'accent': '#ff007c', 
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      backdropBlur: {
        xl: '40px',
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
        serif: ['Merriweather', ...fontFamily.serif],
        mono: ['Fira Code', ...fontFamily.mono],
      },
      fontSize: {
        'hero': '4.5rem', // Extra-large font size for hero sections
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary-dark'),
              },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            thead: {
              borderBottomColor: theme('colors.gray.200'),
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary-light'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
      
    },
    
    
  },

  plugins: [
    require('@tailwindcss/typography'),

  ],
  
};
