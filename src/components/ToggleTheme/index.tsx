import React, { useContext } from "react"

import { Box, Tooltip } from "@mui/material"

import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"

import { ToggleModeContext } from "../../context/ToggleModeContext"
import { changeThemeButton } from "../../styles/button"

export default function ToggleTheme() {
  const {
    toggleTheme,
    AtmThemeName
  } = useContext(ToggleModeContext)

  return (
    <>
      <Tooltip
        title={
          AtmThemeName === "dark" ? "Light Mode" : "Dark Mode"
        }
        arrow
      >
        <Box
          sx={{
            p: 1,
          }}
        >
          {
            AtmThemeName === "light" ? (
              <DarkModeIcon
                fontSize="large"
                sx={{
                  ...changeThemeButton,
                }}
                onClick={toggleTheme}
              />
            ) : (
              <LightModeIcon
                fontSize="large"
                sx={{
                  ...changeThemeButton,
                }}
                onClick={toggleTheme}
              />
            )
          }
        </Box>
      </Tooltip>
    </>
  )
}
