import { createTheme } from "@mui/material"

const Theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#D9D9D9",
    },
    primary: {
      main: "#3D4142",
    },
    background: {
      paper: "#191F4B",
      default: "#0F1538",
    },
    divider: "rgb(67,73,85)",
  },
  typography: {
    button: {
      textTransform: "initial",
    },
  },
})

export default Theme