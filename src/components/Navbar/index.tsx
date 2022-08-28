import React from "react"
import { useNavigate } from "react-router-dom"
import { navbarButtons } from "../../styles/button"
import { Stack, Button } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import { centeredContainerStyle } from "../../styles/containers"

interface INavbarProps {
  children?: React.ReactNode
  showMenuButton?: boolean
}

export default function Navbar(props: INavbarProps) {
  const { showMenuButton = true } = props

  const navigate = useNavigate()

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      direction="row"
      sx={{
        ...centeredContainerStyle,
        height: "auto",
        p: 1,
        bg: "none",
        boxShadow: "none",
        flexDirection: "row",
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
    </Stack>
  )
}
