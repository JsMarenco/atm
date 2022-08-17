// create a provider for the theme mode

import React from "react"


import { ToggleModeProvider } from "./ToggleModeContext"

interface IGlobalProvider {
  children: React.ReactNode
}
export default function GlobalProvider(props: IGlobalProvider) {
  return (
    <ToggleModeProvider>
      {props.children}
    </ToggleModeProvider>
  )
}
