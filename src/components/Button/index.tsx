import React from "react"

// interfaces
import IButtonProps from "../../interfaces/IButtonProps"

import { Typography, Button } from "@mui/material"

// icons
import { buttonStyle } from "../../styles/button"

export default function ButtonTemplate(props: IButtonProps) {
  const {
    label = "",
    onClick = () => {
      new Error("Button onClick not implemented")
    },
    icon = null,
  } = props

  return (
    <>
      <Button 
        variant="contained" 
        color="primary" 
        sx={buttonStyle}
        onClick={onClick}
      >
        {icon}

        <Typography variant="h5" color="text.primary">
          {label}
        </Typography>
      </Button>
    </>
  )
}
