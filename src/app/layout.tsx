import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SWRProvider } from "@/components/swr-provider"
import { Container } from "@/components/container"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Spotily",
  description: "Play your f*cking music",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SWRProvider>
            <Container>{children}</Container>
          </SWRProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
