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
        "meteor-effect": "meteor 5s linear infinite",

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
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Shared styles across light and dark
            maxWidth: 'none',
            'h1, h2, h3, h4': {
              fontWeight: '700',
              'scroll-margin-top': theme('spacing[12]'),
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            },
            code: {
              fontWeight: '500',
              fontFamily: 'Monaco, Courier New, monospace',
              borderRadius: theme('borderRadius.lg'),
            },
            pre: {
              padding: theme('spacing[6]'),
              borderRadius: theme('borderRadius.lg'),
              overflowX: 'auto',
            },
            blockquote: {
              paddingLeft: theme('spacing[4]'),
              borderLeftWidth: '4px',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              '&::before': {
                content: 'open-quote',
              },
              '&::after': {
                content: 'close-quote',
              },
              fontWeight: '500',
            },
            hr: {
              borderTopWidth: '1px',
              margin: theme('spacing[8]') + ' 0',
            },
            // Rest of the styles...
          },
        },
        light: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2em 0.4em',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            },
            pre: {
              backgroundColor: theme('colors.gray.200'),
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            },
            blockquote: {
              color: theme('colors.gray.600'),
              borderLeftColor: theme('colors.blue.300'),
              backgroundColor: theme('colors.gray.50'),
            },
            // Rest of the styles...
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary-light'),
              textDecoration: 'underline', // Add underline for better visibility and interactivity
              '&:hover': {
                color: theme('colors.primary'),
                textDecoration: 'none', // Remove underline on hover for a dynamic effect
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[12],
              fontWeight: '700', // Make headings more pronounced
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', // Soft shadow for depth
            },
            blockquote: {
              borderLeftWidth: '4px', // Make the border more prominent
              borderLeftColor: theme('colors.primary-light'),
              color: theme('colors.gray.300'),
              backgroundColor: theme('colors.gray.900'),
              paddingLeft: '1rem', // Increase padding for blockquote content
              fontStyle: 'italic', // Emphasize blockquotes with italic style
              opacity: '0.85', // Slightly muted for aesthetic purpose
            },
            'code::before, code::after': {
              content: 'none', // Remove backticks appearance in markdown
            },
            code: {
              color: theme('colors.pink.400'),
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Lighter background for a frosted glass effect
              backdropFilter: 'blur(10px)', // Apply glassmorphism effect
              padding: '0.25rem 0.5rem',
              borderRadius: '0.375rem',
              fontWeight: '500',
              fontFamily: 'Monaco, Courier New, monospace',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)', // Softer shadow for depth
            },
            pre: {
              color: theme('colors.gray.300'),
              backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slightly visible background
              backdropFilter: 'blur(10px)', // Glassmorphism effect
              padding: '2rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.5)', // Inset shadow for a deep effect
              border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border for defining edges
            },
            hr: {
              borderColor: theme('colors.green.900'),
              borderTopWidth: '2px', // Make horizontal rules more visible
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],



};
