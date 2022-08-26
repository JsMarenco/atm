import React, { createContext, useState } from "react"


interface INumPadContext {
  numPadValue: string
  numPadMessage: string
  numPadInstructions: string
  handleNumPadValue: (value: string) => void
  handleNumPadClear: () => void
  handleNumPadDelete: () => void
  handleNumPadMessage: (message: string) => void
  handleNumPadInstructions: (instructions: string) => void
}

interface NumPadProps {
  children: React.ReactNode
}

export const NumPadContext = createContext({} as INumPadContext)

export const NumPadProvider = (props: NumPadProps) => {
  const [numPadValue, setNumPadValue] = useState("")
  const [numPadInstructions, setNumPadInstructions] = useState("")
  const [numPadMessage, setNumPadMessage] = useState("")

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

  return (
    <NumPadContext.Provider
      value={{
        numPadValue,
        numPadInstructions,
        numPadMessage,
        handleNumPadValue,
        handleNumPadClear,
        handleNumPadDelete,
        handleNumPadMessage,
        handleNumPadInstructions,
      }}
    >
      {props.children}
    </NumPadContext.Provider>
  )
}