'use client'

import { Provider } from 'jotai'
import { DevTools } from 'jotai-devtools'

import 'jotai-devtools/styles.css'

import { clientEnvs } from '@/env/client'
import { Component } from '@/types/react'

const JotaiWrapper: Component<{}> = ({ children }) => {
  const isDevtoolsEnabled = clientEnvs.NEXT_PUBLIC_IS_DEVTOOLS_ENABLED === 'true'

  return (
    <Provider>
      {isDevtoolsEnabled && <DevTools />}
      {children}
    </Provider>
  )
}

export default JotaiWrapper
