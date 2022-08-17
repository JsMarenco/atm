// create a provider for the theme mode

import React from "react"


import { ToggleModeProvider } from "./ToggleModeContext"

import { NumPadProvider } from "./NumPadContext"

interface IGlobalProvider {
  children: React.ReactNode
}
export default function GlobalProvider(props: IGlobalProvider) {
  return (
    <ToggleModeProvider>
      <NumPadProvider>
        {props.children}
      </NumPadProvider>
    </ToggleModeProvider>
  )
}
