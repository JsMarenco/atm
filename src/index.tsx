import React from "react"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { createRoot } from "react-dom/client"

// pages
import Menu from "./pages/Menu"
import Login from "./pages/Login"
import Balance from "./pages/Balance"
import NotFound from "./pages/NotFound"
import ChangePin from "./pages/ChangePin"
import Operations from "./pages/Operations"
import MakeDeposit from "./pages/MakeDeposit"
import WithdrawCash from "./pages/WithdrawCash"

// styles
import "./styles/main.css"

// context
import GlobalProvider from "./context/GlobalProvider"

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container)

const ATM = () => {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/menu/" element={<Menu />} />
          
          <Route path="/pin/change/" element={<ChangePin />} />
          <Route path="/make-deposit/" element={<MakeDeposit />} />
          <Route path="/balance/" element={<Balance />} />
          <Route path="/withdraw-cash/" element={<WithdrawCash />} />

          <Route path="/operation/:result" element={<Operations />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </GlobalProvider>
  )
}

root.render(
  <ATM />
)

