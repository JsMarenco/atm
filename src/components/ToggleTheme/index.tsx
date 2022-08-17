import React, { useContext } from "react"

import { Typography, Stack } from "@mui/material"

import ToggleOffIcon from "@mui/icons-material/ToggleOff"
import ToggleOnIcon from "@mui/icons-material/ToggleOn"

import { ToggleModeContext } from "../../context/ToggleModeContext"
import { changeThemeButton } from "../../styles/button"

export default function ToggleTheme() {
  const {
    toggleTheme,
    AtmThemeName
  } = useContext(ToggleModeContext)

  return (
    <>
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        <Typography
          variant="subtitle1"
          color="text.primary"
        >
          Dark mode

        </Typography>

        {
          AtmThemeName === "light" ? (
            <ToggleOffIcon sx={changeThemeButton} onClick={toggleTheme} />
          ) : (
            <ToggleOnIcon sx={changeThemeButton} onClick={toggleTheme} />
          )
        }
      </Stack>
    </>
  )
}
