import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { changeTitle } from "../../utils"
import ButtonTemplate from "../../components/Button"
import ToggleTheme from "../../components/ToggleTheme"
import ButtonRoutes from "../../routes/ButtonRoutes"
import { Grid, Stack, Button } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import ATMContainer from "../../components/ATMContainer"

export default function Menu() {
  const navigate = useNavigate()

  useEffect(() => {
    changeTitle("Menu")
  }, [])

  return (
    <ATMContainer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
        </Grid>

        {
          ButtonRoutes().map((button, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={index}
            >
              <ButtonTemplate
                label={button.label}
                icon={button.icon}
                onClick={button.onClick}
              />
            </Grid>
          ))
        }
      </Grid>
    </ATMContainer>
  )
}
