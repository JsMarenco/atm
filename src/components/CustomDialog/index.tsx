import React, { useEffect } from "react"
import { TransitionProps } from "@mui/material/transitions"
import {
  Slide,
  Button,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogActions,
  DialogContent,
  Typography,
  Divider,
} from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import Navbar from "../Navbar"
import { navbarButtons } from "../../styles/button"
import { changeTitle } from "../../utils"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface CustomDialogProps {
  content: string
  confirmOperation: () => void
  cancelOperation: () => void
  ownerAccount?: string
  tabTitle: string
}

export default function CustomDialog(props: CustomDialogProps) {
  const {
    content = "No content",
    confirmOperation = () => { console.log("No confirm operation") },
    cancelOperation = () => { console.log("No cancel operation") },
    ownerAccount = "",
    tabTitle = "No tab title",
  } = props

  useEffect(() => { changeTitle(tabTitle) }, [])

  return (
    <Dialog
      open={true}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="Dialog operation"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ textAlign: "center" }}>
        Are you sure?
      </DialogTitle>

      <Divider
        sx={{
          mx: 2,
          color: "text.primary",
        }}
      />

      <DialogContent>
        <Typography variant="h4" color="text.primary" textAlign="center">
          {ownerAccount}
        </Typography>

        <DialogContentText id="dialog-slide-description" sx={{ textAlign: "center" }}>
          {content}
        </DialogContentText>
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: "center",
        }}
      >
        <Navbar
          showCancelButton={false}
          showMenuButton={false}
        >
          <Button
            variant="outlined"
            sx={navbarButtons}
            color="secondary"
            onClick={cancelOperation}
            startIcon={<HighlightOffIcon />}
          >
            Cancel
          </Button>

          <Button
            variant="outlined"
            sx={navbarButtons}
            color="secondary"
            onClick={confirmOperation}
            startIcon={<CheckIcon />}
          >
            Agree
          </Button>
        </Navbar>
      </DialogActions>
    </Dialog>
  )
}
