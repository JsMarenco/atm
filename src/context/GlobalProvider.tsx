import React from "react"

import { ToggleModeProvider } from "./ToggleModeContext"
import { ClientProvider } from "./ClientContext"
import { NumPadProvider } from "./NumPadContext"

interface IGlobalProvider {
  children: React.ReactNode
}

export default function GlobalProvider(props: IGlobalProvider) {
  return (
    <ToggleModeProvider>
      <NumPadProvider>
        <ClientProvider>
          {props.children}
        </ClientProvider>
      </NumPadProvider>
    </ToggleModeProvider>
  )
}
