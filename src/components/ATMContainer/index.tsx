import React, { useContext, useEffect, useState } from "react"
import { ClientContext } from "../../context/ClientContext"
import { changeTitle } from "../../utils"
import { useLocation, useNavigate } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"
import { centeredContainerStyle, mainContainerStyle } from "../../styles/containers"
import Navbar from "../Navbar"
import { navbarButtons } from "../../styles/button"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ErrorIcon from "@mui/icons-material/Error"

interface IATMContainer {
  children: React.ReactNode
}

export default function ATMContainer(props: IATMContainer) {
  const { isLoggedIn } = useContext(ClientContext)
  const location = useLocation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    changeTitle("Loading...")

    setLoading(!isLoggedIn)
  }, [location])

  return (
    <>
      {
        loading ? (
          <Box sx={mainContainerStyle}>
            <Box sx={centeredContainerStyle}>
              <ErrorIcon
                color="error"
                sx={{
                  mb: 2,
                  textAlign: "center",
                  fontSize: 55,
                }}
              />

              <Typography variant="h6" color="text.primary" align="center">
                Ups, your are not log in here
              </Typography>

              <Navbar showMenuButton={false} showCancelButton={false}>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={navbarButtons}
                  onClick={() => {
                    navigate("/")
                  }}
                  endIcon={<ArrowForwardIosIcon />}
                >
                  Got to login
                </Button>
              </Navbar>
            </Box>
          </Box>
        ) : (
          props.children
        )
      }
    </>
  )
}
