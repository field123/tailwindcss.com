import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

export type NextPageWithLayout = NextPage & {
  layoutProps?: {
    meta?: {
      title?: string
    }
    Layout: any
  }
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
