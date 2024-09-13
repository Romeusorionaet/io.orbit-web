import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../assets/styles/globals.css'
import ClientProviders from '@/utils/client-providers'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'in.orbit',
  description: 'Project created in event NLW-Rocketseat',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body
        className={`${roboto.variable} antialiased bg-zinc-950 text-zinc-50`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
