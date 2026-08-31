import '@/styles/globals.css'
import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'CommunityGOS | Армия РФ',
  description: 'Портал управления Армией в Roblox RP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="bg-gradient-to-b from-blue-50 to-white">
        <SessionProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
