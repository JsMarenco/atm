import React, { createContext, useState } from "react"

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
  clearContext: () => void
  handleLogIn: () => void
}

interface IClientProps {
  children: React.ReactNode
}

export const ClientContext = createContext({} as IClientContext)

export const ClientProvider = (props: IClientProps) => {
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
    console.log("log in")
    setIsLoggedIn(true)
  }

  const clearContext = () => {
    setAccountNumber("")
    setLastDigits("")
    setPin("")
    setBalance(0)
    setIsLoggedIn(false)
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
        clearContext,
        handleLogIn
      }}
    >
      {props.children}
    </ClientContext.Provider>
  )
}