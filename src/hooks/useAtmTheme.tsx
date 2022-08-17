import { useEffect, useState } from "react"

import dark from "../theme/dark"
import light from "../theme/light"

import { changeBackground } from "../utils"

export default function useAtmTheme() {
  const [AtmTheme, setAtmTheme] = useState(dark)
  const [AtmThemeName, setAtmThemeName] = useState("dark")

  useEffect(() => {
    changeBackground(AtmTheme.palette.background.default)
  }, [AtmThemeName])

  const toggleTheme = () => {
    setAtmTheme(() => AtmTheme === light ? dark : light)
    setAtmThemeName(() => AtmThemeName === "dark" ? "light" : "dark")
  }

  return { AtmTheme, toggleTheme, AtmThemeName }
}
