// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FAFAFA",
    },
    secondary: {
      main: "#1785C6",
    },
    background: {
      default: "#FAFAFA",
    },
    // button: {
    //     main: '#1D8567',
    //     light: '#2D9E76',
    //     contrastText: '#FFFFFF',
    // },
    button: {
      main: "#1785C6",
      light: "#4F9BD8",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#09090B",
      secondary: "#71717A",
    },
  },
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    h1: {
      color: "#09090B",
    },
    h2: {
      color: "#09090B",
    },
    h3: {
      color: "#09090B",
    },
    body1: {
      color: "#71717A",
    },
    body2: {
      color: "#71717A",
    },
  },
});

export default theme;
