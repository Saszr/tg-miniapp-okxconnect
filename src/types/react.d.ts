import type { FC, PropsWithChildren } from 'react'

type ComponentProps<P = {}> = PropsWithChildren<
  {
    className?: string
  } & P
>
type Component<P = {}> = FC<ComponentProps<P>>
