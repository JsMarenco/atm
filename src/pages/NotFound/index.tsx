import React from "react"
import { useNavigate } from "react-router-dom"

import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"

import { Box, Typography, Button } from "@mui/material"

import HomeIcon from "@mui/icons-material/Home"

export default function NotFound() {
  const navigate = useNavigate()

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
          >
            <strong>404</strong>
          </Typography>
          <Typography
            variant="h2"
            color="text.primary"
          >
            Page not found
          </Typography>
          <Typography
            variant="h5"
            color="text.primary"
          >
            The page you are looking for does not exist.
          </Typography>

          <Typography
            variant="h5"
            color="text.primary"
            mb={2}
          >
            <strong>What can I do?</strong>
          </Typography>

          <Button
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
            onClick={() => navigate("/")}
          >
            Go to home page
          </Button>
        </Box>
      </Box>
    </>
  )
}
