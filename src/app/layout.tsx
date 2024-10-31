import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { getLocale } from 'next-intl/server'

import {
  JotaiWrapper,
  MiniAppProvider,
  MiniAppWalletProvider,
  QueryClientProvider,
} from '@/contexts'
import { I18nProvider } from '@/core/i18n/provider'
import { serverEnvs } from '@/env/server'
import { cn } from '@/lib/utils'

import '@telegram-apps/telegram-ui/dist/styles.css'
import 'normalize.css/normalize.css'
import '@/styles/globals.css'
import '@/styles/mini-app.css'

export const metadata: Metadata = {
  title: 'Merlin Telegram Mini App',
  description: 'Merlin Telegram Mini Apps Template',
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale()
  const cookies = headers().get('cookie')

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={
          cn()
          // serverEnvs.NODE_ENV === 'development' ? 'debug-screens' : ''
        }>
        <JotaiWrapper>
          <QueryClientProvider>
            <I18nProvider>
              <MiniAppProvider>
                <MiniAppWalletProvider>{children}</MiniAppWalletProvider>
              </MiniAppProvider>
            </I18nProvider>
          </QueryClientProvider>
        </JotaiWrapper>
      </body>
    </html>
  )
}
