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
  const { numPadValue, handleNumPadClear } = useContext(NumPadContext)
  const { handleMessage } = useContext(MessageContext)

  const {
    handleAccountNumber,
    handleLastDigits,
    handlePin,
    handleBalance,
    handleLogIn,
  } = useContext(ClientContext)

  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    changeTitle("Login")
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
      setMessage(`${WRONG_PIN_DESCRIPTION}`)
      handleNumPadClear()

      handleMessage(`${WRONGE_PIN}`, "error")

      setTimeout(() => {
        setMessage("")
      }, 3000)
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
