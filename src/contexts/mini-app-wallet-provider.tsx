'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { OKXUniversalConnectUI } from '@okxconnect/ui'

interface WalletContextType {
  universalUi: OKXUniversalConnectUI | null
  isConnecting: boolean
  error: Error | null
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function MiniAppWalletProvider({ children }: { children: ReactNode }) {
  const [universalUi, setUniversalUi] = useState<OKXUniversalConnectUI | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const initWallet = async () => {
      try {
        setIsConnecting(true)
        const ui = await OKXUniversalConnectUI.init({
          dappMetaData: {
            icon: 'https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png',
            name: 'OKX WalletConnect UI Demo',
          },
          actionsConfiguration: {
            returnStrategy: 'tg://resolve',
            modals: 'all',
            tmaReturnUrl: 'back',
          },
          language: 'en_US',
          uiPreferences: {
            theme: 'SYSTEM',
          },
        })
        setUniversalUi(ui)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
      } finally {
        setIsConnecting(false)
      }
    }

    initWallet()
  }, [])

  return (
    <WalletContext.Provider value={{ universalUi, isConnecting, error }}>
      {children}
    </WalletContext.Provider>
  )
}

export function useMiniAppWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error('useMiniAppWallet must be used within a MiniAppWalletProvider')
  }
  return context
}
