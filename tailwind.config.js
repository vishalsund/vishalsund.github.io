/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        custom: {
          light: {
            bg: {
              primary: '#FFFFFF',
              secondary: '#F8F8F8',
              tertiary: '#F0F0F0'
            },
            text: {
              primary: '#0A0A0A',
              secondary: '#404040',
              tertiary: '#6E6E6E'
            },
            border: {
              primary: '#E5E5E5',
              secondary: '#D4D4D4',
              hover: '#A3A3A3'
            }
          },
          dark: {
            bg: {
              primary: '#0A0A0A',
              secondary: '#1A1A1A',
              tertiary: '#2A2A2A'
            },
            text: {
              primary: '#FFFFFF',
              secondary: '#E5E5E5',
              tertiary: '#A3A3A3'
            },
            border: {
              primary: '#404040',
              secondary: '#525252',
              hover: '#6E6E6E'
            }
          }
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                opacity: 0.8,
              },
            },
            'h1,h2,h3,h4': {
              letterSpacing: '-0.025em',
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '1em',
            },
            'code,pre': {
              color: 'inherit',
              borderRadius: '0.375rem',
            },
            code: {
              padding: '0.2em 0.4em',
              fontWeight: '500',
            },
            pre: {
              padding: '1em',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
            },
            hr: {
              borderColor: 'inherit',
              opacity: 0.1,
            },
            'ul,ol': {
              paddingLeft: '1.5em',
              marginTop: '1em',
              marginBottom: '1em',
            },
            'li': {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}