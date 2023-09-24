"use client"

import { Fetcher, SWRConfig } from "swr"

const fetcher: Fetcher = (url: string) => fetch(url).then((res) => res.json())

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  )
}
