import React from "react"

import "@testing-library/jest-dom/extend-expect"

import { render, screen } from "@testing-library/react"

import Menu from "./index"

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Menu />)

    // check if Select an option is in the page
    expect(screen.getByText("Select an option")).toBeInTheDocument()
  })
})