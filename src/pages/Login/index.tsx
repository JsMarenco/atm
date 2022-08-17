import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"

import { changeTitle } from "../../utils"

import { Box, Typography } from "@mui/material"

import NumPad from "../../components/NumPad"

import { NumPadContext } from "../../context/NumPadContext"

export default function Login() {
  const { numPadValue, handleNumPadClear } = useContext(NumPadContext)

  const navigate = useNavigate()

  useEffect(() => {
    changeTitle("Login")
  }, [])

  useEffect(() => {
    // check if the pin length is 4
    if (numPadValue.length === 4) {
      navigate("/")
      handleNumPadClear()
    }
  }, [numPadValue])

  return (
    <>
      <Box
        sx={mainContainerStyle}
      >
        <Box
          sx={centeredContainerStyle}
        >
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
          >
            Enter your PIN
          </Typography>

          <NumPad />
        </Box>
      </Box>
    </>
  )
}
