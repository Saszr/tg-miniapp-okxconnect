'use client'

import { useEffect, type PropsWithChildren } from 'react'
import { initData, miniApp, useLaunchParams, useSignal } from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

import { ErrorBoundary } from '@/components/error-boundary'
import { ErrorPage } from '@/components/error-page'
import { setLocale } from '@/core/i18n/locale'
import { init } from '@/core/init'
import { useClientOnce } from '@/hooks/use-client-once'
import { useDidMount } from '@/hooks/use-did-mount'
import { useTelegramMock } from '@/hooks/use-telegram-mock'

function RootInner({ children }: PropsWithChildren) {
  const isDev = process.env.NODE_ENV === 'development'

  // Mock Telegram environment in development mode if needed.
  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock()
  }

  const lp = useLaunchParams()
  const debug = isDev || lp.startParam === 'debug'

  // Initialize the library.
  useClientOnce(() => {
    init(debug)
  })

  const isDark = useSignal(miniApp.isDark)
  const initDataUser = useSignal(initData.user)

  // Set the user locale.
  useEffect(() => {
    initDataUser && setLocale(initDataUser.languageCode)
  }, [initDataUser])

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    debug && import('eruda').then(lib => lib.default.init())
  }, [debug])

  return (
    <TonConnectUIProvider manifestUrl='/tonconnect-manifest.json'>
      <AppRoot
        appearance={isDark ? 'dark' : 'light'}
        platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}>
        {children}
      </AppRoot>
    </TonConnectUIProvider>
  )
}

export function MiniAppProvider(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of
  // the Server Side Rendering. That's why we are showing loader on the server
  // side.
  const didMount = useDidMount()

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <div className='root__loading'>Loading</div>
  )
}
