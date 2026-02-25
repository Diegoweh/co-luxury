import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import CustomCursor from './components/CustomCursor'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant-var',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jost = Jost({
  variable: '--font-jost-var',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Costa de Oro — Hotel Boutique · Mazatlán',
  description:
    'Un refugio curado donde el Pacífico mexicano dicta el ritmo. Cada detalle existe para que el tiempo se disuelva.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${jost.variable}`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
