import React, { createContext, useState } from "react"


interface INumPadContext {
  numPadValue: string
  handleNumPadValue: (value: string) => void
  handleNumPadClear: () => void
  handleNumPadDelete: () => void
}

interface NumPadProps {
  children: React.ReactNode
}

export const NumPadContext = createContext({} as INumPadContext)

export const NumPadProvider = (props: NumPadProps) => {
  const [numPadValue, setNumPadValue] = useState("")

  const handleNumPadValue = (value: string) => {
    setNumPadValue(numPadValue + value)
  }

  const handleNumPadClear = () => {
    setNumPadValue("")
  }

  const handleNumPadDelete = () => {
    setNumPadValue(numPadValue.slice(0, -1))
  }

  return (
    <NumPadContext.Provider
      value={{
        numPadValue,
        handleNumPadValue,
        handleNumPadClear,
        handleNumPadDelete
      }}
    >
      {props.children}
    </NumPadContext.Provider>
  )
}