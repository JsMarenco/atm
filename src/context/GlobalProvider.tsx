import React from "react"

import { ToggleModeProvider } from "./ToggleModeContext"
import { ClientProvider } from "./ClientContext"
import { NumPadProvider } from "./NumPadContext"
import { MessageProvider } from "./MessageContext"

interface IGlobalProvider {
  children: React.ReactNode
}

export default function GlobalProvider(props: IGlobalProvider) {
  return (
    <ToggleModeProvider>
      <MessageProvider>
        <NumPadProvider>
          <ClientProvider>
            {props.children}
          </ClientProvider>
        </NumPadProvider>
      </MessageProvider>
    </ToggleModeProvider>
  )
}
