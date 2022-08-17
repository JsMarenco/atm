import React, { useEffect } from "react"

import { changeTitle } from "../../utils"

// components
import ButtonTemplate from "../../components/Button"

// routes
import ButtonRoutes from "../../routes/ButtonRoutes"

import { Grid, Typography, Stack } from "@mui/material"
import ToggleTheme from "../../components/ToggleTheme"

export default function Menu() {
  useEffect(() => {
    changeTitle("Menu")
  }, [])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Typography
            variant="h4"
            align="center"
            color="text.primary"
            mt={2}
            mb={2}
          >
            Select an option
          </Typography>

          <ToggleTheme />
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
  )
}
