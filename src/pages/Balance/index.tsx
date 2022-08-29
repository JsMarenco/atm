import React, { useContext, useEffect } from "react"
import Navbar from "../../components/Navbar"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import { ClientContext } from "../../context/ClientContext"
import { changeTitle } from "../../utils"
import { Typography, Box } from "@mui/material"
import ATMContainer from "../../components/ATMContainer"

export default function Balance() {
  const { balance } = useContext(ClientContext)

  useEffect(() => {
    changeTitle("Account Balance")
  }, [])

  return (
    <ATMContainer>
      <Box sx={mainContainerStyle}>
        <Box sx={centeredContainerStyle}>
          <Typography
            variant={window.innerWidth > 500 ? "h4" : "h5"}
            color="text.primary"
            align="center"
            mb={2}
          >
            Your account balance is
          </Typography>

          <Typography
            variant="h5"
            color="text.primary"
            align="center"
          >
            {`$${balance}`}
          </Typography>

          <Navbar
            showCancelButton={false}
          />
        </Box>
      </Box>
    </ATMContainer>
  )
}
