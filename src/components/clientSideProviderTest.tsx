
"use client"

import React from "react"

function ClientSideProviderTest({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div>{children}</div>
  )
}

export default ClientSideProviderTest