import React, { createContext, useEffect, useState } from "react"

import { ThemeProvider } from "@mui/material"

import { light, dark } from "../theme"
import { changeBackground, detectSystemTheme } from "../utils"

interface IToggleModeContext {
  AtmThemeName: string
  toggleTheme: () => void
  AtmTheme: unknown
}

export const ToggleModeContext = createContext({} as IToggleModeContext)

interface ToggleModeProps {
  children: React.ReactNode
}

export const ToggleModeProvider = (props: ToggleModeProps) => {
  const [AtmTheme, setAtmTheme] = useState(light)
  const [AtmThemeName, setAtmThemeName] = useState("light")

  useEffect(() => {
    const systemTheme = detectSystemTheme()

    if (systemTheme === "dark") {
      setAtmTheme(dark)
      setAtmThemeName("dark")
    } else {
      setAtmTheme(light)
      setAtmThemeName("light")
    }
  }, [])

  useEffect(() => { changeBackground(AtmTheme.palette.background.default) }, [AtmThemeName])

  const toggleTheme = () => {
    setAtmTheme(() => AtmTheme === light ? dark : light)
    setAtmThemeName(() => AtmThemeName === "dark" ? "light" : "dark")
  }

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