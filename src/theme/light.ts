import { createTheme } from "@mui/material"

const Theme = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#1D1D1D",
      white: "#fff"
    },
    primary: {
      50: "#F0F7FF",
      100: "#C2E0FF",
      200: "#99CCF3",
      300: "#66B2FF",
      400: "#3399FF",
      500: "#007FFF",
      600: "#0072E5",
      700: "#0059B2",
      800: "#004C99",
      900: "#003A75",
      contrastText: "#fff",
      dark: "#0059B2",
      light: "#66B2FF",
      main: "#007FFF",
    },
    secondary: {
      contrastText: "#fff",
      dark: "#7b1fa2",
      light: "#ba68c8",
      main: "#9c27b0",
    },
    text: {
      disabled: "rgba(0, 0, 0, 0.38)",
      primary: "#1A2027",
      secondary: "#3E5060",
    },
    action: {
      activatedOpacity: 0.12,
      active: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
    },
    background: {
      default: "#fff",
      paper: "#ededed",
    }
  },
  typography: {
    button: {
      textTransform: "initial",
    },
  },
})

export default Theme

