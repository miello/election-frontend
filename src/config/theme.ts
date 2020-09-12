import { theme } from '@chakra-ui/core'

// Let's say you want to add custom colors
export default {
  ...theme,
  colors: {
    ...theme.colors,
    intaniaRed: {
      50: '#ffe8e8',
      100: '#f3c1c3',
      200: '#e6999c',
      300: '#db7175',
      400: '#d0494e',
      500: '#b62f35',
      600: '#8e2428',
      700: '#66191d',
      800: '#3e0d10',
      900: '#1b0203',
    },
  },
  breakpoints: ['768px'],
  fonts: {
    body: 'Kanit, sans-serif',
    heading: 'Kanit, sans-serif',
    mono: 'Kanit, sans-serif',
  },
  fontSizes: {
    '2xs': '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fontWeights: {
    thin: 100,
    hairline: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
}
