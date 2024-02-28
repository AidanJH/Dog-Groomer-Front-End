import { createTheme } from '@mui/material/styles';
import colours from './colours';

declare module '@mui/material/styles' {
    interface Palette {
      buttonPrimary: Palette['primary'];
    }
  
    interface PaletteOptions {
      buttonPrimary?: PaletteOptions['primary'];
    }
  }
  
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      buttonPrimary: true;
    }
  }
  
  export const buttonTheme = createTheme({
    palette: {
      primary: {
        main: colours.darker_blue,
        light: colours.light_teal,
        dark: colours.orange,
        contrastText: colours.white,
      },
    },
  });