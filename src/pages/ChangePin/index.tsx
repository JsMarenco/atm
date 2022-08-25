import React, { useState } from "react"

import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import { Box, Typography } from "@mui/material"

import NumPad from "../../components/NumPad"

export default function ChangePin() {
  const [message, setMessage] = useState("Enter your new PIN")
  const [newPin , setNewPin] = useState("")
  const [confirmPin , setConfirmPin] = useState("")

  return (
    <>
      <Box sx={mainContainerStyle}>
        <Box sx={centeredContainerStyle}>
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
          >
            {message}
          </Typography>

          <NumPad />
        </Box>
      </Box>
    </>
  )
}
