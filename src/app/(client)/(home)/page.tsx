'use client'

import { Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'

import { Page } from '@/components/mini-page'
import { Button } from '@/components/ui/button'
import { useMiniAppWallet } from '@/contexts/mini-app-wallet-provider'

export default function Wallet() {
  const t = useTranslations('i18n')

  const { universalUi } = useMiniAppWallet()

  const handleOpenModal = async () => {
    console.log('universalUi', universalUi)
    console.log('universalUi.session', universalUi?.session)

    try {
      const newSession = await universalUi?.openModal({
        namespaces: {
          eip155: {
            chains: ['eip155:1'],
            defaultChain: '1',
          },
        },
      })
      console.log(newSession)
    } catch (error) {
      console.error('Modal opening failed:', error)
    }
  }

  return (
    <Page back={false}>
      <Button onClick={() => handleOpenModal()}>Open Modal</Button>
    </Page>
  )
}
