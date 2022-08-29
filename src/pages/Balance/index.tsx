import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import { ClientContext } from "../../context/ClientContext"
import { changeTitle } from "../../utils"
import { Paper, Typography, Stack } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"

export default function Balance() {
  const { balance, isLoggedIn } = useContext(ClientContext)

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    changeTitle("Account Balance")

    isLoggedIn ? setLoading(false) : navigate("/")
  }, [])

  return (
    <Stack
      spacing={3}
      sx={mainContainerStyle}
    >
      {
        loading ? (
          <CircularProgress
            thickness={5}
            color="primary"
          />
        ) : (
          <>
            <Paper
              sx={centeredContainerStyle}
              elevation={2}
            >
              <Typography
                variant={window.innerWidth > 500 ? "h4" : "h5"}
                color="text.primary"
                align="center"
                mb={2}
              >
                Your account balance is
              </Typography>

              <Typography
                variant="h5"
                color="text.primary"
                align="center"
              >
                {`$${balance}`}
              </Typography>
            </Paper>

            <Navbar 
              showCancelButton={false}
            />
          </>
        )
      }
    </Stack>
  )
}
