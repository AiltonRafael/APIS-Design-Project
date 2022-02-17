import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  xxl: '1536px',
})


export const theme = extendTheme({ breakpoints, 
  styles: {
    global: {
      'html': {
        Width: '100vh',
        height: '100vh'
      },
      'body': {
        width: '100%',
        margin: '0 auto'
      },
    },
  }
 })