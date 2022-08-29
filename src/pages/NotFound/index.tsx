import React, { useEffect } from "react"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import { Box, Typography } from "@mui/material"
import { changeTitle } from "../../utils"
import Navbar from "../../components/Navbar"

export default function NotFound() {
  useEffect(() => {
    changeTitle("Page not found")
  }, [])

  return (
    <>
      <Box
        sx={mainContainerStyle}
      >
        <Box
          sx={centeredContainerStyle}
        >
          <Typography
            variant="h1"
            color="text.primary"
            align="center"
          >
            <strong>404</strong>
          </Typography>

          <Typography
            variant="h5"
            color="text.primary"
            align="center"
          >
            The page you are looking for does not exist.
          </Typography>

          <Typography
            variant="h6"
            color="text.primary"
            align="center"
          >
            What can you do?
          </Typography>

          <Navbar
            showCancelButton={false}
          />
        </Box>
      </Box>
    </>
  )
}
