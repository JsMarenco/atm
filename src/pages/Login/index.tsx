import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import { changeTitle } from "../../utils"
import { Box, Typography } from "@mui/material"
import NumPad from "../../components/NumPad"
import { NumPadContext } from "../../context/NumPadContext"
import { ClientContext } from "../../context/ClientContext"
import { MessageContext } from "../../context/MessageContext"
import accounts from "../../testing/accounts.json"
import { WRONGE_PIN, WRONG_PIN_DESCRIPTION } from "../../components/contants/messages"

export default function Login() {
  const { numPadValue, handleNumPadClear, handleNumPadMessage, handleNumPadInstructions } = useContext(NumPadContext)
  const { handleMessage } = useContext(MessageContext)

  const {
    handleAccountNumber,
    handleLastDigits,
    handlePin,
    handleBalance,
    handleLogIn,
    handleClientReset,
  } = useContext(ClientContext)

  const navigate = useNavigate()

  useEffect(() => {
    handleClientReset()
    changeTitle("Login")
    handleNumPadInstructions("Enter your PIN")
  }, [])

  useEffect(() => {
    // TODO - connect to backend to check if account exists
    const res = accounts.find(account => account.pin === numPadValue)

    if (res) {
      navigate("/menu/")
      handleNumPadClear()

      handleLogIn()
      handleAccountNumber(res.accountNumber)
      handleLastDigits(res.lastDigits)
      handlePin(res.pin)
      handleBalance(res.balance)
    } else if (numPadValue.length === 4) {
      handleNumPadMessage(`${WRONG_PIN_DESCRIPTION}`)
      handleMessage(`${WRONGE_PIN}`, "error")
      handleNumPadClear()
    }
  }, [numPadValue])

  return (
    <>
      <Box sx={mainContainerStyle}>
        <Box sx={centeredContainerStyle}>
          <NumPad />
        </Box>
      </Box>
    </>
  )
}
