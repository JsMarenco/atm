import React from "react"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { createRoot } from "react-dom/client"

// pages
import Menu from "./pages/Menu"

import Balance from "./pages/Balance"

// styles
import "./styles/main.css"
import GlobalProvider from "./context/GlobalProvider"

// context

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container)

const ATM = () => {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />

          <Route path="/account-balance/" element={<Balance />} />
        </Routes>
      </Router>
    </GlobalProvider>
  )
}

root.render(
  <ATM />
)

