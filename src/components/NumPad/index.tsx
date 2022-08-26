import React, { useContext } from "react"

import { Box, Button, Typography } from "@mui/material"

import { numPadContainer } from "../../styles/containers"
import { numericButtonStyle } from "../../styles/button"

import { NumPadContext } from "../../context/NumPadContext"

import BackspaceIcon from "@mui/icons-material/Backspace"
import ClearIcon from "@mui/icons-material/Clear"

const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9",]

export default function NumPad() {
  const {
    numPadValue,
    numPadMessage,
    numPadInstructions,
    handleNumPadValue,
    handleNumPadClear,
    handleNumPadDelete,
  } = useContext(NumPadContext)

  return (
    <>
      <Box>
        <Typography 
          variant="h5" 
          color="text.primary"
          align="center"
        >
          {numPadInstructions}
        </Typography>

        <Typography 
          variant="h6" 
          color="text.primary"
          align="center"
        >
          {numPadMessage}
        </Typography>

        <Typography
          variant="h4"
          color="text.primary"
          align="center"
        >
          {
            // replace the pin with asterisks
            numPadValue === "" ? (
              "~~~~"
            ) : (
              numPadValue.replace(/./g, "*")
              // numPadValue
            )
          }
        </Typography>

        <Box
          sx={numPadContainer}
        >
          {
            nums.map((num, index) => (
              <Button
                variant="contained"
                color="primary"
                key={index}
                sx={numericButtonStyle}
                onClick={() => handleNumPadValue(num)}
              >
                {num}
              </Button>
            ))
          }

          <Button
            variant="contained"
            color="primary"
            sx={numericButtonStyle}
            onClick={handleNumPadClear}
          >
            <ClearIcon />
          </Button>

          <Button
            variant="contained"
            color="primary"
            sx={numericButtonStyle}
            onClick={() => handleNumPadValue("0")}
          >
            0
          </Button>

          <Button
            variant="contained"
            color="primary"
            sx={numericButtonStyle}
            onClick={handleNumPadDelete}
          >
            <BackspaceIcon />
          </Button>
        </Box>
      </Box>
    </>
  )
}
