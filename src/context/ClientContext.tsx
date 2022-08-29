import React, { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MessageContext } from "./MessageContext"

interface IClientContext {
  isLoggedIn: boolean
  accountNumber: string
  LastDigits: string
  pin: string
  balance: number
  handleAccountNumber: (value: string) => void
  handlePin: (value: string) => void
  handleBalance: (value: number) => void
  handleLastDigits: (value: string) => void
  handleClientReset: () => void
  handleLogIn: () => void
  handleValidateSession: () => boolean
}

interface IClientProps {
  children: React.ReactNode
}

export const ClientContext = createContext({} as IClientContext)

export const ClientProvider = (props: IClientProps) => {
  const { handleMessage } = useContext(MessageContext)

  const navigate = useNavigate()

  const [accountNumber, setAccountNumber] = useState("")
  const [LastDigits, setLastDigits] = useState("")
  const [pin, setPin] = useState("")
  const [balance, setBalance] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleAccountNumber = (value: string) => {
    setAccountNumber(value)
  }
  const handleLastDigits = (value: string) => {
    setLastDigits(value)
  }
  const handlePin = (value: string) => {
    setPin(value)
  }
  const handleBalance = (value: number) => {
    setBalance(value)
  }

  const handleLogIn = () => {
    setIsLoggedIn(true)
  }

  const handleClientReset = () => {
    setAccountNumber("")
    setLastDigits("")
    setPin("")
    setBalance(0)
    setIsLoggedIn(false)
  }

  const handleValidateSession = () => {
    if(!isLoggedIn) {
      handleMessage("Please, you have to login before use our services", "error")
      navigate("/")
    }

    return isLoggedIn ? false : true
  }

  return (
    <ClientContext.Provider
      value={{
        isLoggedIn,
        accountNumber,
        LastDigits,
        pin,
        balance,
        handleAccountNumber,
        handleLastDigits,
        handlePin,
        handleBalance,
        handleClientReset,
        handleLogIn,
        handleValidateSession,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  )
}