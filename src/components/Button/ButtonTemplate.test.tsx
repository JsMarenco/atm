import React from "react"

import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"

import ButtonTemplate from "./index"

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined"

describe("ButtonTemplate", () => {
  it("should render correctly", () => {
    render(
      <ButtonTemplate
        label="Label"
        icon={<AccountBalanceOutlinedIcon />}
        onClick={() => {
          console.log("Click")
        }}
      />
    )

    expect(screen.getByText("Label")).toBeInTheDocument()
  })
})