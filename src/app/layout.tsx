import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'April 11, 2026 | Egyptian Theatre, DeKalb, IL',
  description:
    'Dance competition for community impact. All proceeds support local DeKalb County charities.',
  openGraph: {
    title: 'April 11, 2026 | Egyptian Theatre, DeKalb, IL',
    description:
      'Dance competition for community impact. All proceeds support local DeKalb County charities.',
    images: [
      {
        url: '/images/ygs.png',
        width: 1024,
        height: 1024,
        alt: 'You Got Served - Dance Competition',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'April 11, 2026 | Egyptian Theatre, DeKalb, IL',
    description:
      'Dance competition for community impact. All proceeds support local DeKalb County charities.',
    images: ['/images/ygs.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans min-h-screen flex flex-col bg-purple-50`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
