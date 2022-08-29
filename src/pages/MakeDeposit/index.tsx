import React, { useContext, useEffect, useState } from "react"
import { Box, Typography, Button } from "@mui/material"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import { changeTitle } from "../../utils"
import NumPad from "../../components/NumPad"
import { NumPadContext } from "../../context/NumPadContext"
import { ERROR_LARGE_AMOUNT, ERROR_LARGE_AMOUNT_DESCRIPTION } from "../../components/contants/messages"
import { MessageContext } from "../../context/MessageContext"
import { useNavigate } from "react-router-dom"
import DoneIcon from "@mui/icons-material/Done"
import CloseIcon from "@mui/icons-material/Close"
import Navbar from "../../components/Navbar"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { navbarButtons } from "../../styles/button"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { ClientContext } from "../../context/ClientContext"
import ATMContainer from "../../components/ATMContainer"

const FIRST_STEP = "account-to-deposit"
const SECOND_STEP = "amount-to-deposit"
const THIRD_STEP = "confirm-deposit"

export default function MakeDepositV2() {
  const {
    numPadValue,
    handleNumPadInstructions,
    handleNumPadMessage,
    handleNumPadShowValue,
    handleNumPadClear,
    handleNumPadReset,
  } = useContext(NumPadContext)

  const { handleMessage, } = useContext(MessageContext)
  const { handleBalance, balance } = useContext(ClientContext)

  const navigate = useNavigate()

  useEffect(() => { changeTitle("Make Deposit"), handleNumPadShowValue("show") }, [])

  const [depositToMyAccount, setdepositToMyAccount] = useState(false)
  const [depositToExternalAccount, setDepositToExternalAccount] = useState(false)

  const [step, setStep] = useState("")
  const [amount, setAmount] = useState("")
  const [externalAccount, setExternalAccount] = useState("")
  const [externalAccountOwnerName, setExternalAccountOwnerName] = useState("")
  const [isSure, setIsSure] = useState(false)
  const [showNumPad, setShowNumPad] = useState(false)

  useEffect(() => { handleNumPadClear() }, [])

  useEffect(() => {
    handleNumPadInstructions(step === FIRST_STEP ? "Enter account number" : "Enter amount")
    setShowNumPad(step === FIRST_STEP || step === SECOND_STEP)
  }, [step, depositToMyAccount, depositToExternalAccount])

  useEffect(() => {
    if (step === SECOND_STEP && depositToMyAccount) {
      if (numPadValue.length > 5) {
        setAmount("")
        handleNumPadMessage(ERROR_LARGE_AMOUNT_DESCRIPTION)
        handleMessage(ERROR_LARGE_AMOUNT, "error")
      } else {
        setAmount(numPadValue)
      }
    }

    if (step === FIRST_STEP && numPadValue.length === 6 && depositToExternalAccount) {
      setStep(SECOND_STEP)
      setExternalAccount(numPadValue)
      setExternalAccountOwnerName("Miguel Angel Marenco Mercado")
      handleNumPadClear()

    } else if (step === SECOND_STEP && depositToExternalAccount) {
      if (numPadValue.length > 5) {
        setAmount("")
        handleNumPadMessage(ERROR_LARGE_AMOUNT_DESCRIPTION)
        handleMessage(ERROR_LARGE_AMOUNT, "error")
      } else {
        setAmount(numPadValue)
      }
    }
  }, [step, depositToMyAccount, isSure, numPadValue, depositToExternalAccount])

  const cancelDeposit = () => {
    handleNumPadReset()
    resetComponent()
    navigate("/operation/canceled/")
  }

  const confirmDepositToMyAccount = () => {
    handleNumPadReset()
    resetComponent()
    handleBalance(balance + Number(amount))
    navigate("/operation/success/")
  }

  const confirmDepositToExternalAccount = () => {
    handleNumPadReset()
    resetComponent()
    navigate("/operation/success/")
  }

  const resetComponent = () => {
    setStep("")
    setAmount("")
    setExternalAccount("")
    setIsSure(false)
    setShowNumPad(false)
  }

  return (
    <ATMContainer>
      <Box sx={mainContainerStyle}>
        <Box sx={centeredContainerStyle}>
          {
            !depositToMyAccount && !depositToExternalAccount && (
              <>
                <Typography variant="h5" color="text.primary" align="center">
                  Where do you want to deposit?
                </Typography>

                <Navbar
                  showMenuButton={false}
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={navbarButtons}
                    startIcon={<AccountCircleIcon />}
                    onClick={() => {
                      setdepositToMyAccount(true)
                      setStep(SECOND_STEP)
                    }}
                  >
                    My account
                  </Button>

                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={navbarButtons}
                    startIcon={<AccountCircleIcon />}
                    onClick={() => {
                      setDepositToExternalAccount(true)
                      setStep(FIRST_STEP)
                    }}
                  >
                    External account
                  </Button>
                </Navbar>
              </>
            )
          }

          {
            showNumPad && (
              <>
                <NumPad />

                <Navbar
                  showMenuButton={false}
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={navbarButtons}
                    endIcon={<ArrowForwardIosIcon />}
                    onClick={() => {
                      setIsSure(true)
                      step === FIRST_STEP ? setStep(SECOND_STEP) : setStep(THIRD_STEP)
                    }}
                    disabled={amount === ""}
                  >
                    Next
                  </Button>
                </Navbar>
              </>
            )
          }

          {
            (depositToMyAccount || depositToExternalAccount) && isSure && (
              <>
                <Typography
                  variant="h5"
                  color="text.primary"
                  align="center"
                >
                  {
                    depositToExternalAccount && "Account to deposit"
                  }
                </Typography>

                <Typography
                  variant="h4"
                  color="text.primary"
                  align="center"
                >
                  {externalAccountOwnerName}
                </Typography>

                <Typography variant="h5" color="text.primary" align="center">
                  {`You will deposit ${"$" + amount} to ${externalAccount === "" ? "your account" : `#${externalAccount}`}`}
                </Typography>

                <Typography variant="h6" color="text.primary" align="center">
                  Are you sure?
                </Typography>

                <Navbar
                  showMenuButton={false}
                >
                  {
                    ["Yes", "No"].map((option, index) => (
                      <Button
                        variant="outlined"
                        color="secondary"
                        sx={navbarButtons}
                        startIcon={index === 0 ? <DoneIcon /> : <CloseIcon />}
                        onClick={() => {
                          option === "Yes" ? (
                            depositToMyAccount ? confirmDepositToMyAccount() : confirmDepositToExternalAccount()
                          ) : cancelDeposit()
                        }}
                        key={index}
                      >
                        {option}
                      </Button>
                    ))
                  }
                </Navbar>
              </>
            )
          }
        </Box>
      </Box>
    </ATMContainer>
  )
}