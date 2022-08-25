import { Snackbar, Alert } from "@mui/material"
import React, { createContext, useState } from "react"

interface IMessageContext {
  message: string
  handleMessage: (value: string, typeMessage: string) => void
}

interface IMessageProps {
  children: React.ReactNode
}

export const MessageContext = createContext({} as IMessageContext)

export const MessageProvider = (props: IMessageProps) => {
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState("success")
  const [open , setOpen] = useState(false)

  const handleMessage = (value: string, typeMessage: string) => {
    setMessage(value)
    setMessageType(typeMessage)
    setOpen(true)
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  return (
    <MessageContext.Provider
      value={{
        message,
        handleMessage
      }}
    >
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
      >
        <Alert 
          onClose={handleClose}
          severity={messageType === "success" ? "success" : "error"}
          sx={{ 
            width: "100%",
            maxWidth: "sm",
            margin: "auto",
          }}
        >
          {message}
        </Alert>
      </Snackbar>

      {props.children}
    </MessageContext.Provider>
  )
}