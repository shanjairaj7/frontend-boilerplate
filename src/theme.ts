import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// Color configuration
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

// Custom colors - customize these based on your project needs
const colors = {
  brand: {
    50: '#e6f3ff',
    100: '#b3d9ff',
    200: '#80bfff',
    300: '#4da6ff',
    400: '#1a8cff',
    500: '#0066cc',
    600: '#0052a3',
    700: '#003d7a',
    800: '#002952',
    900: '#001429',
  },
}

// Custom component styles
const components = {
  Button: {
    defaultProps: {
      colorScheme: 'brand',
    },
  },
  Card: {
    baseStyle: {
      container: {
        boxShadow: 'sm',
        _hover: {
          boxShadow: 'md',
        },
        transition: 'box-shadow 0.2s',
      },
    },
  },
}

// Extend the theme
export const theme = extendTheme({
  config,
  colors,
  components,
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
    },
  },
})

export default theme