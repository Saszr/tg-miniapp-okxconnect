import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const clientEnvs = createEnv({
  client: {
    NEXT_PUBLIC_IS_DEVTOOLS_ENABLED: z.string().optional()?.default('false'),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_IS_DEVTOOLS_ENABLED: process.env.NEXT_PUBLIC_IS_DEVTOOLS_ENABLED,
  },
  emptyStringAsUndefined: true,
})

export type ClientEnvs = typeof clientEnvs
