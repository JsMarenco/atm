import React from "react"

import { useNavigate } from "react-router-dom"

import { navbarContainer, navbarButtons } from "../../styles/button"

import { Paper, Button } from "@mui/material"

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <Paper
      sx={navbarContainer}
    >
      <Button 
        variant="contained"
        color="primary"
        onClick={() => navigate("/menu/")}
        sx={{
          ...navbarButtons,
          bgcolor: "#EA3D79",
        }}
      >
        Home
      </Button>
    </Paper>
  )
}
