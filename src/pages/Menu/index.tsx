import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { changeTitle } from "../../utils"
import ToggleTheme from "../../components/ToggleTheme"
import ButtonRoutes from "../../routes/ButtonRoutes"
import { Grid, Stack, Button, Box, Typography } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import ATMContainer from "../../components/ATMContainer"
import { buttonStyle } from "../../styles/button"

export default function Menu() {
  const navigate = useNavigate()

  useEffect(() => {
    changeTitle("Menu")
  }, [])

  return (
    <ATMContainer>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        direction="row"
        flexWrap="wrap"
        flexGrow={1}
        p={2}
      >
        <ToggleTheme />

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          endIcon={<LogoutIcon />}
        >
          Log out
        </Button>
      </Stack>

      <Box
        sx={{
          width: "95%",
          mx: "auto",
        }}
      >
        <Grid
          container
          spacing={2}
        >
          {
            ButtonRoutes().map((button, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                key={index}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={buttonStyle}
                  onClick={button.onClick}
                >
                  {button.icon}

                  <Typography variant="h5" color="text.primary">
                    {button.label}
                  </Typography>
                </Button>
              </Grid>
            ))
          }
        </Grid>

      </Box>
    </ATMContainer>
  )
}
