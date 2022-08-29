import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import NumPad from "../../components/NumPad"
import { NumPadContext } from "../../context/NumPadContext"
import { PIN_NOT_MATCH } from "../../components/contants/messages"
import { MessageContext } from "../../context/MessageContext"
import { ClientContext } from "../../context/ClientContext"
import { Box } from "@mui/material"
import { changeTitle } from "../../utils"
import ATMContainer from "../../components/ATMContainer"
import Navbar from "../../components/Navbar"

export default function ChangePin() {
  const {
    numPadValue,
    handleNumPadClear,
    handleNumPadInstructions,
    handleNumPadMessage,
  } = useContext(NumPadContext)

  const { handleMessage } = useContext(MessageContext)
  const { handlePin } = useContext(ClientContext)

  const navigate = useNavigate()

  const [step, setStep] = useState("new")
  const [newPin, setNewPin] = useState("")

  useEffect(() => { changeTitle("Change PIN") }, [])

  useEffect(() => {
    handleNumPadInstructions(step === "new" ? "Enter new PIN" : "Confirm new PIN")

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
        handleNumPadMessage(PIN_NOT_MATCH)
        handleMessage(PIN_NOT_MATCH, "error")
        handleNumPadInstructions("Enter new pin")
        setStep("new")
      }
    }
  }, [numPadValue, step])

  return (
    <ATMContainer>
      <Box sx={mainContainerStyle}>
        <Box sx={centeredContainerStyle}>
          <NumPad />

          <Navbar showMenuButton={false} />
        </Box>
      </Box>
    </ATMContainer>
  )
}
