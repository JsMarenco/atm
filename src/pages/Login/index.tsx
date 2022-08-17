import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"

import { changeTitle } from "../../utils"

import { Box, Typography } from "@mui/material"

import NumPad from "../../components/NumPad"

import { NumPadContext } from "../../context/NumPadContext"
import { ClientContext } from "../../context/ClientContext"

import accounts from "../../testing/accounts.json"

export default function Login() {
  const { numPadValue, handleNumPadClear } = useContext(NumPadContext)
  const {
    handleAccountNumber,
    handleLastDigits,
    handlePin,
    handleBalance,
    handleLogIn,
  } = useContext(ClientContext)

  const [message, setMessage] = useState("Enter your PIN")

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
      handleNumPadClear()

      setMessage("Invalid PIN")

      setTimeout(() => {
        setMessage("Enter your PIN")
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
            {message}
          </Typography>

          <NumPad />
        </Box>
      </Box>
    </>
  )
}
