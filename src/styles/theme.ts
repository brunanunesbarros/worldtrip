import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      "highlight": "#FFBA08",
      "highlight-50%": "rgba(255, 186, 8, 0.5)",
    },
    dark: {
      "black": "#000000",
      "headingsAndText": "#47585B",
      "info": "#999999",
      "info-50%": "rgba(153, 153, 153, 0.5)",
    },
    light: {
      "white": "#FFFFFF",
      "headingsAndText": "#F5F8FA",
      "info": "#DADADA",
    }
  },
  fonts: {
    headings: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.headingsAndText',
      }
    }
  }
})