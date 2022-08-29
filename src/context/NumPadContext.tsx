import React, { createContext, useState } from "react"

interface INumPadContext {
  numPadValue: string
  numPadMessage: string
  numPadInstructions: string
  showNumPadValue: boolean
  handleNumPadValue: (value: string) => void
  handleNumPadClear: () => void
  handleNumPadDelete: () => void
  handleNumPadMessage: (message: string) => void
  handleNumPadInstructions: (instructions: string) => void
  handleNumPadShowValue: (action?: string) => void
  handleNumPadReset: () => void
}

interface NumPadProps {
  children: React.ReactNode
}

export const NumPadContext = createContext({} as INumPadContext)

export const NumPadProvider = (props: NumPadProps) => {
  const [numPadValue, setNumPadValue] = useState("")
  const [numPadInstructions, setNumPadInstructions] = useState("")
  const [numPadMessage, setNumPadMessage] = useState("")
  const [showNumPadValue, setShowNumPadValue] = useState(false)

  const handleNumPadValue = (value: string) => {
    setNumPadValue(numPadValue + value)
  }

  const handleNumPadClear = () => {
    setNumPadValue("")
  }

  const handleNumPadDelete = () => {
    setNumPadValue(numPadValue.slice(0, -1))
  }

  const handleNumPadMessage = (message: string) => {
    setNumPadMessage(message)

    setTimeout(() => { setNumPadMessage("") }, 3000)
  }

  const handleNumPadInstructions = (instructions: string) => {
    setNumPadInstructions(instructions)
  }

  const handleNumPadShowValue = (action?: string) => {
    if (action === "show") {
      setShowNumPadValue(true)
    } else if (action === "hide") {
      setShowNumPadValue(false)
    } else {
      setShowNumPadValue(!showNumPadValue)
    }
  }

  const handleNumPadReset = () => {
    setNumPadValue("")
    setNumPadMessage("")
    setNumPadInstructions("")
    setShowNumPadValue(false)
  }

  return (
    <NumPadContext.Provider
      value={{
        numPadValue,
        numPadInstructions,
        numPadMessage,
        showNumPadValue,
        handleNumPadValue,
        handleNumPadClear,
        handleNumPadDelete,
        handleNumPadMessage,
        handleNumPadInstructions,
        handleNumPadShowValue,
        handleNumPadReset,
      }}
    >
      {props.children}
    </NumPadContext.Provider>
  )
}