import React from "react"
import { useNavigate } from "react-router-dom"

// styles
import { iconStyle } from "../styles/button"

// icons
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined"
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined"
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined"
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined"
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined"

export default function ButtonRoutes() {
  const navigate = useNavigate()

  const buttons = [
    {
      label: "Change Pin",
      icon: <LockOutlinedIcon sx={iconStyle} />,
      onClick: () => {
        navigate("/change-pin/")
      }
    },
    {
      label: "Make a Deposit",
      icon: <ArrowCircleUpOutlinedIcon sx={iconStyle} />,
      onClick: () => {
        navigate("/make-a-deposit/")
      }
    },
    {
      label: "Withdraw Cash",
      icon: <ArrowCircleDownOutlinedIcon sx={iconStyle} />,
      onClick: () => {
        navigate("/withdraw-cash/")
      }
    },
    {
      label: "Pay Bills",
      icon: <AttachMoneyOutlinedIcon sx={iconStyle} />,
      onClick: () => {
        navigate("/pay-bills/")
      }
    },
    {
      label: "Transfer Funds",
      icon: <ArrowForwardOutlinedIcon sx={iconStyle} />,
      onClick: () => {
        navigate("/transfer-funds/")
      }
    },
    {
      label: "Balance",
      icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
      onClick: () => {
        navigate("/account-balance/")
      }
    }
  ]

  return buttons
}
