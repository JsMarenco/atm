import React, { useEffect, useState } from "react"

import Navbar from "../../components/Navbar"

import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"

import { changeTitle, randomAccountBalance } from "../../utils"

import { Paper, Typography, Stack } from "@mui/material"

import CircularProgress from "@mui/material/CircularProgress"

export default function Balance() {
  const [balance, setBalance] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    changeTitle("Account Balance")

    setBalance(randomAccountBalance())

    setLoading(false)
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

            <Navbar />

          </>
        )
      }
    </Stack>
  )
}
