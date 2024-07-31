'use client'
import React, { ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function TanStackProvider({children}:{children:ReactNode}) {
  return (
    <QueryClientProvider client={new QueryClient}>{children}</QueryClientProvider>
  )
}
