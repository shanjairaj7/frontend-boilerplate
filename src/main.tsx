import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.tsx'
import theme from './theme'
import './index.css'

/**
 * CHAKRA UI BOILERPLATE APPLICATION ENTRY POINT
 * 
 * This is the main entry point for the React application.
 * It sets up the React root and renders the App component.
 * 
 * Standard React 18+ setup with:
 * - StrictMode for development warnings
 * - Chakra UI with custom theme
 * - Color mode support (light/dark)
 * - ChakraProvider for component library
 * 
 * Customization:
 * - Modify theme.ts for custom colors and styling
 * - Add global providers (Context, Redux, etc.) here
 * - Add error boundaries for production
 * - Add analytics or monitoring setup
 * - Configure service workers if needed
 */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
