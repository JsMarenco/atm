import React from "react"
import { useNavigate } from "react-router-dom"
import { navbarButtons } from "../../styles/button"
import { Box, Button } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import { centeredContainerStyle } from "../../styles/containers"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"

interface INavbarProps {
  children?: React.ReactNode
  showMenuButton?: boolean
  showCancelButton?: boolean
}

export default function Navbar(props: INavbarProps) {
  const { showMenuButton = true, showCancelButton = true } = props

  const navigate = useNavigate()

  return (
    <Box
      sx={{
        ...centeredContainerStyle,
        height: "auto",
        p: 1,
        bg: "none",
        boxShadow: "none",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {
        showMenuButton && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/menu/")}
            sx={navbarButtons}
            startIcon={<HomeIcon />}
          >
            Menu
          </Button>
        )
      }

      {props.children}

      {
        showCancelButton && (
          <Button
            variant="outlined"
            color="secondary"
            sx={navbarButtons}
            startIcon={<HighlightOffIcon />}
            onClick={() => {
              navigate("/operation/canceled/")
            }}
          >
            Cancel
          </Button>
        )
      }
    </Box>
  )
}
