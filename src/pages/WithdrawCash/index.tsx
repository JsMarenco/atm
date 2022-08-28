import React, { useContext, useEffect } from "react"
import { Box, Typography, Button, Stack } from "@mui/material"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import { changeTitle } from "../../utils"
import { buttonStyle } from "../../styles/button"
import { useNavigate } from "react-router-dom"
import { ClientContext } from "../../context/ClientContext"
import { INSUFFICIENT_BALANCE } from "../../components/contants/messages"
import { MessageContext } from "../../context/MessageContext"

export default function WithdrawCash() {
  const {
    balance,
    handleBalance,
  } = useContext(ClientContext)

  const { handleMessage } = useContext(MessageContext)

  useEffect(() => { changeTitle("Withdraw Cash") }, [])

  const navigate = useNavigate()

  const cancelWithdraw = () => {
    navigate("/operation/fail/")
  }

  const withdraw = (amountToWithdraw: number) => {
    if (amountToWithdraw > balance) {
      handleMessage(INSUFFICIENT_BALANCE, "error")
    } else {
      handleBalance(balance - amountToWithdraw)
      navigate("/operation/success/")
    }
  }

  return (
    <>
      <Box
        sx={mainContainerStyle}
      >
        <Box
          sx={centeredContainerStyle}
        >
          <Typography
            variant="h5"
            color="text.primary"
            align="center"
            mb={2}
          >
            Select amount to withdraw
          </Typography>

          <Box
            sx={{
              width: "90%",
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              wrap: "wrap",
            }}
          >
            <Stack
              spacing={2}
              sx={buttonsContainer}
            >
              {
                [10, 20, 50, 100].map((amount: number, index: number) => (
                  <Button
                    variant="text"
                    color="primary"
                    key={index}
                    sx={{
                      ...buttonStyle,
                      width: "150px",
                      height: "60px",
                      backgroundColor: "primary.light",
                    }}
                    onClick={() => withdraw(amount)}
                  >
                    <Typography variant="h6" color="text.primary">
                      ${amount}
                    </Typography>
                  </Button>
                ))
              }
            </Stack>

            <Stack
              spacing={2}
              sx={buttonsContainer}
            >
              {
                [100, 200, 600, 1000].map((amount: number, index: number) => (
                  <Button
                    variant="text"
                    color="primary"
                    key={index}
                    sx={{
                      ...buttonStyle,
                      width: "150px",
                      height: "60px",
                      backgroundColor: "primary.light",
                    }}
                    onClick={() => withdraw(amount)}
                  >
                    <Typography variant="h6" color="text.primary">
                      ${amount}
                    </Typography>
                  </Button>
                ))
              }
            </Stack>
          </Box>

          <Button
            variant="outlined"
            color="secondary"
            sx={{
              mt: 2,
            }}
            onClick={cancelWithdraw}
          >
            <Typography variant="h6" color="text.primary">
              Cancel
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  )
}

const buttonsContainer = {
  m: 1,
  mx: "auto",
}