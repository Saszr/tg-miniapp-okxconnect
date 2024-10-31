'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { clientEnvs } from '@/env/client'
import { Component } from '@/types/react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const ReactQuery: Component<{}> = ({ children }) => {
  const isDevtoolsEnabled = clientEnvs.NEXT_PUBLIC_IS_DEVTOOLS_ENABLED === 'true'

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {isDevtoolsEnabled && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}

export default ReactQuery
