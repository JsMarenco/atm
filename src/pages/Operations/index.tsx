import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { changeTitle } from "../../utils"
import { Box, Typography, Button, Stack, CircularProgress } from "@mui/material"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import ErrorIcon from "@mui/icons-material/Error"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import HomeIcon from "@mui/icons-material/Home"
import ReportIcon from "@mui/icons-material/Report"

export default function Operations() {
  const navigate = useNavigate()

  const {
    result,
  } = useParams()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    result !== "success" && result !== "error" && navigate("/menu/")

    if (result === "success") {
      changeTitle("Operation success")
    } else if (result === "fail") {
      changeTitle("Operation failed")
    }
    setLoading(false)

    setTimeout(() => { navigate("/menu/") }, 5000)
  }, [])

  return (
    <>
      <Box
        sx={mainContainerStyle}
      >
        {
          loading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            <Box
              sx={centeredContainerStyle}
            >
              {
                result === "success" ? (
                  <CheckCircleIcon sx={{ color: "text.primary", fontSize: 40 }} />
                ) : (
                  <ErrorIcon sx={{ color: "text.primary", fontSize: 40 }} />
                )
              }

              <Typography
                variant="h4"
                color="text.primary"
                align="center"
              >
                {result === "success" ? "Operation success" : "Operation failed"}
              </Typography>

              <Typography
                variant="body2"
                color="text.primary"
                align="center"
              >
                {result === "success" ? "Thank you for using our service" : "Please try again"}
              </Typography>

              <Typography
                variant="body2"
                color="text.primary"
                align="center"
              >
                You will be redirected to the main menu in 5 seconds
              </Typography>

              <Stack
                mt={2}
              >
                {
                  result === "success" ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate("/menu/")}
                      startIcon={<HomeIcon />}
                    >
                      <Typography
                        variant="body2"
                        color="text.primary"
                        align="center"
                      >
                        Go to menu
                      </Typography>
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate("/report-issue/")}
                      startIcon={<ReportIcon />}
                    >
                      <Typography
                        variant="body2"
                        color="text.primary"
                        align="center"
                      >
                        Report issue
                      </Typography>
                    </Button>
                  )
                }
              </Stack>
            </Box>
          )
        }
      </Box>
    </>
  )
}
