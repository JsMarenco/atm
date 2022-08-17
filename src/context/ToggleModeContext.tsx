// create a context for toogle the theme mode

import React, { createContext } from "react"

import { ThemeProvider } from "@mui/material"

import useAtmTheme from "../hooks/useAtmTheme"

export const ToggleModeContext = createContext({
  AtmThemeName: "This is the default value",
  toggleTheme: () => {
    console.log("This is the default value")
  },
  AtmTheme: {},
})

interface ToggleModeProps {
  children: React.ReactNode
}

export const ToggleModeProvider = (props: ToggleModeProps) => {
  const {
    AtmTheme,
    toggleTheme,
    AtmThemeName
  } = useAtmTheme()

  return (
    <ToggleModeContext.Provider
      value={{
        AtmTheme,
        toggleTheme,
        AtmThemeName
      }}>
      <ThemeProvider theme={AtmTheme}>
        {props.children}
      </ThemeProvider>
    </ToggleModeContext.Provider>
  )
}