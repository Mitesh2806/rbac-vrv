import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { NextAuthProvider } from './providers'
import { Toaster } from "@/components/ui/toaster"






const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'This is the home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Toaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

            {children}
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
