import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import NumPad from "../../components/NumPad"
import { NumPadContext } from "../../context/NumPadContext"
import { PIN_NOT_MATCH } from "../../components/contants/messages"
import { MessageContext } from "../../context/MessageContext"
import { ClientContext } from "../../context/ClientContext"
import { Box, Typography } from "@mui/material"
import { changeTitle } from "../../utils"

export default function ChangePin() {
  const {
    numPadValue,
    handleNumPadClear,
  } = useContext(NumPadContext)

  const { handleMessage } = useContext(MessageContext)
  const { handlePin } = useContext(ClientContext)

  const navigate = useNavigate()

  const [step, setStep] = useState("new")
  const [message, setMessage] = useState("")
  const [instruction, setInstruction] = useState("")
  const [newPin, setNewPin] = useState("")

  useEffect(() => { changeTitle("Change PIN") }, [])

  useEffect(() => {
    step === "new" ? setInstruction("Enter your new pin") : setInstruction("Confirm your new pin")

    if (step === "new" && numPadValue.length === 4) {
      setNewPin(() => numPadValue)
      handleNumPadClear()
      setStep("confirm")

    } else if (step === "confirm" && numPadValue.length === 4) {
      if (newPin === numPadValue) {
        handleNumPadClear()
        handlePin(newPin)
        navigate("/operation/success/")

      } else {
        handleNumPadClear()
        setMessage(PIN_NOT_MATCH)
        handleMessage(PIN_NOT_MATCH, "error")
        setInstruction("Enter your new pin")
        setStep("new")

        setTimeout(() => { setMessage("") }, 2000)
      }
    }
  }, [numPadValue, step])

  return (
    <>
      <Box sx={mainContainerStyle}>
        <Box sx={centeredContainerStyle}>
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
          >
            {instruction}
          </Typography>

          <Typography
            variant="body1"
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
