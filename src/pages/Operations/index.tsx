import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { changeTitle } from "../../utils"
import { Box, Typography, Button, Stack, CircularProgress } from "@mui/material"
import { mainContainerStyle, centeredContainerStyle } from "../../styles/containers"
import ErrorIcon from "@mui/icons-material/Error"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ReportIcon from "@mui/icons-material/Report"

export default function Operations() {
  const navigate = useNavigate()

  const {
    result,
  } = useParams()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (result === "success") {
      changeTitle("Operation success")
    } else if (result === "fail") {
      changeTitle("Operation failed")
    } else if (result === "canceled") {
      changeTitle("Operation canceled")
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
                  <Stack
                    mt={2}
                  >
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
                  </Stack>
                )
              }
            </Box>
          )
        }
      </Box>
    </>
  )
}
