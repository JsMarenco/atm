import React, { useContext, useEffect, useState } from "react"
import { Box, Button } from "@mui/material"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import ATMContainer from "../../components/ATMContainer"
import Navbar from "../../components/Navbar"
import NumPad from "../../components/NumPad"
import { NumPadContext } from "../../context/NumPadContext"
import { MessageContext } from "../../context/MessageContext"
import { ERROR_LARGE_AMOUNT, ERROR_LARGE_AMOUNT_DESCRIPTION } from "../../components/contants/messages"
import { navbarButtons } from "../../styles/button"
import { changeTitle } from "../../utils"
import { useNavigate } from "react-router-dom"
import { ClientContext } from "../../context/ClientContext"
import CustomDialog from "../../components/CustomDialog"

const FIRST_STEP = "account-to-deposit"
const SECOND_STEP = "amount-to-deposit"
const THIRD_STEP = "confirm-deposit"

export default function TransferFounds() {
  const {
    numPadValue,
    handleNumPadMessage,
    handleNumPadInstructions,
    handleNumPadShowValue,
    handleNumPadClear,
    handleNumPadReset,
  } = useContext(NumPadContext)

  const { handleMessage, } = useContext(MessageContext)

  const {
    balance,
    handleBalance,
  } = useContext(ClientContext)

  const navigate = useNavigate()
  const [step, setStep] = useState(FIRST_STEP)
  const [accountToTransfer, setAccountToTransfer] = useState("")
  const [amountToTransfer, setAmountToTransfer] = useState("")
  const [accounToTransferOwner, setAccountToTransferOwner] = useState("")

  useEffect(() => {
    handleNumPadShowValue("show")
    changeTitle("Transfer Founds")
    setAccountToTransferOwner("Derek Franchesko")
  }, [])

  useEffect(() => {
    handleNumPadShowValue("show")
    handleNumPadInstructions(step === FIRST_STEP ? "Enter account number" : "Enter amount")

    if (step === FIRST_STEP && numPadValue.length === 6) {
      setAccountToTransfer(numPadValue)
      handleNumPadClear()
      setStep(SECOND_STEP)
    } else if (step === SECOND_STEP) {
      numPadValue.length > 0 && numPadValue.length < 5 && setAmountToTransfer(numPadValue)

      if (numPadValue.length > 5) {
        handleMessage(ERROR_LARGE_AMOUNT, "error")
        handleNumPadClear()
        handleNumPadMessage(ERROR_LARGE_AMOUNT_DESCRIPTION)
        setAmountToTransfer("")
      }
    } else if (step === THIRD_STEP) {
      handleNumPadClear()
    }
  }, [step, numPadValue])

  const confirmTransfer = () => {
    // TODO: call API to transfer founds
    // check if the amount is less than the balance
    if (Number(amountToTransfer) > balance) {
      handleMessage("Insufficient founds", "error")
      resetComponent()
      setStep(FIRST_STEP)
    } else {
      handleMessage("Transfer successful", "success")
      handleBalance(balance - Number(amountToTransfer))
      resetComponent()
      navigate("/operation/success/")
    }

    resetComponent()
  }

  const resetComponent = () => {
    setStep(FIRST_STEP)
    setAccountToTransfer("")
    setAmountToTransfer("")
    setAccountToTransferOwner("")
    handleNumPadReset()
  }

  return (
    <ATMContainer>
      <Box sx={mainContainerStyle}>
        <Box sx={centeredContainerStyle}>
          {
            (step === FIRST_STEP || step === SECOND_STEP) ? (
              <>
                <NumPad />
              </>
            ) : (
              <CustomDialog
                content={`You will transfer $${amountToTransfer} to ${accountToTransfer}`}
                cancelOperation={resetComponent}
                confirmOperation={confirmTransfer}
                ownerAccount={accounToTransferOwner}
                tabTitle="Confirm transfer"
              />
            )
          }

          <Navbar
            showMenuButton={false}
            showCancelButton={step !== THIRD_STEP}
          >
            {
              step === SECOND_STEP && (
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={navbarButtons}
                  onClick={() => {
                    setStep(THIRD_STEP)
                  }}
                  disabled={amountToTransfer.length === 0}
                >
                  Next
                </Button>
              )
            }
          </Navbar>
        </Box>
      </Box>
    </ATMContainer>
  )
}
