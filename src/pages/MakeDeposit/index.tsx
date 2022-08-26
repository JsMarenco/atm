import React, { useContext, useEffect, useState } from "react"
import { Box, Typography, Button, Stack } from "@mui/material"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import { changeTitle } from "../../utils"
import NumPad from "../../components/NumPad"
import { NumPadContext } from "../../context/NumPadContext"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { ERROR_LARGE_AMOUNT, ERROR_LARGE_AMOUNT_DESCRIPTION } from "../../components/contants/messages"
import { MessageContext } from "../../context/MessageContext"
import { useNavigate } from "react-router-dom"
import DoneIcon from "@mui/icons-material/Done"
import CloseIcon from "@mui/icons-material/Close"

export default function MakeDeposit() {
  const {
    numPadValue,
    handleNumPadInstructions,
    handleNumPadMessage,
    handleNumPadShowValue,
    handleNumPadClear,
  } = useContext(NumPadContext)

  const {
    handleMessage,
  } = useContext(MessageContext)

  const navigate = useNavigate()

  const [step, setStep] = useState("acc-to-deposit")
  const [amount, setAmount] = useState("")
  const [account, setAccount] = useState("")
  const [depositConfirmation, setDepositConfirmation] = useState(false)

  useEffect(() => { changeTitle("Make Deposit"), handleNumPadShowValue("show") }, [])

  useEffect(() => {
    if (step === "acc-to-deposit") {
      handleNumPadInstructions("Enter account number")
    } else if (step === "amount-to-deposit") {
      handleNumPadInstructions("Enter amount to deposit")
    } else if (step === "confirm-deposit") {
      handleNumPadInstructions("Confirm deposit")
    }

    if (step === "acc-to-deposit" && numPadValue.length === 6) {
      setStep("amount-to-deposit")
      setAccount(numPadValue)
      handleNumPadClear()
    } else if (step === "amount-to-deposit") {
      depositConfirmation && (setStep("confirm-deposit"), handleNumPadClear())

      if (numPadValue.length > 5) {
        setAmount("")
        handleNumPadClear()
        handleMessage(ERROR_LARGE_AMOUNT, "error")
        handleNumPadMessage(ERROR_LARGE_AMOUNT_DESCRIPTION)
      } else {
        setAmount(numPadValue)
      }
    }
  }, [step, numPadValue])

  const cancelDeposit = () => {
    handleNumPadShowValue("hide")
    handleNumPadClear()
    setAmount("")
    setAccount("")
    setDepositConfirmation(false)
    navigate("/operation/canceled/")
  }

  const confirmDeposit = () => {
    setDepositConfirmation(true)
    handleNumPadShowValue("hide")
    navigate("/operation/success/")
    handleNumPadClear()
  }

  return (
    <>
      <Box
        sx={mainContainerStyle}
      >
        <Box
          sx={centeredContainerStyle}
        >
          {
            depositConfirmation ? (
              <>
                <Typography
                  variant="h5"
                  color="text.primary"
                  align="center"
                >
                  Account owner
                </Typography>

                <Typography
                  variant="h3"
                  color="text.primary"
                  align="center"
                >
                  Jose Daniel Ramirez Perez
                </Typography>

                <Typography
                  variant="h5"
                  color="text.primary"
                  align="center"
                >
                  Are you sure?
                </Typography>

                <Typography
                  variant="h6"
                  color="text.primary"
                  align="center"
                >
                  You are about to deposit ${amount} to account {account}
                </Typography>

                <Stack 
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  direction="row"
                >
                  <Button
                    variant="contained" 
                    color="primary"
                    startIcon={<DoneIcon />}
                    onClick={confirmDeposit}
                  >
                    Yes, I am sure  
                  </Button>

                  <Button
                    variant="contained" 
                    color="primary"
                    startIcon={<CloseIcon />}
                    onClick={cancelDeposit}
                  >
                    No, take me back
                  </Button>
                </Stack>
              </>
            ) : (
              <>
                <NumPad />

                {
                  step === "amount-to-deposit" && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setStep("comfirm-deposit")
                        handleNumPadClear()
                        setDepositConfirmation(true)
                      }}
                      sx={{ mt: 1, }}
                      endIcon={<NavigateNextIcon />}
                      disabled={amount === ""}
                    >
                      Next
                    </Button>
                  )
                }
              </>
            )
          }
        </Box>
      </Box>
    </>
  )
}