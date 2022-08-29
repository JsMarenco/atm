import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { changeTitle } from "../../utils"
import { Box, Typography, Button } from "@mui/material"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import ErrorIcon from "@mui/icons-material/Error"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ReportIcon from "@mui/icons-material/Report"
import ATMContainer from "../../components/ATMContainer"
import Navbar from "../../components/Navbar"
import { navbarButtons } from "../../styles/button"

export default function Operations() {
  const navigate = useNavigate()

  const { result, } = useParams()

  useEffect(() => {
    if (result === "success") {
      changeTitle("Operation success")
    } else if (result === "fail") {
      changeTitle("Operation failed")
    } else if (result === "canceled") {
      changeTitle("Operation canceled")
    }

    setTimeout(() => { navigate("/menu/") }, 5000)
  }, [])

  return (
    <ATMContainer>
      <Box sx={mainContainerStyle}>
        <Box sx={centeredContainerStyle}>
          {
            result === "success" ? (
              <CheckCircleIcon sx={{ color: "success", fontSize: 55 }} />
            ) : (
              <ErrorIcon sx={{ color: "error", fontSize: 55 }} />
            )
          }

          <Typography
            variant="h4"
            color="text.primary"
            align="center"
          >
            {result === "success" ? "Operation success" : result === "fail" ? "Operation failed" : "Operation canceled"}
          </Typography>

          <Typography
            variant="body2"
            color="text.primary"
            align="center"
          >
            {result === "fail" ? "Please try again" : "Thanks for using our services"}
          </Typography>

          <Typography
            variant="body2"
            color="text.primary"
            align="center"
          >
            You will be redirected to menu in 5 seconds
          </Typography>

          {
            result === "fail" && (
              <Navbar
                showCancelButton={false}
                showMenuButton={false}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => navigate("/report-issue/")}
                  startIcon={<ReportIcon />}
                  sx={navbarButtons}
                >
                  Report issue
                </Button>
              </Navbar>
            )
          }
        </Box>
      </Box>
    </ATMContainer>
  )
}
