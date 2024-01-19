import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Navbar'
import Footer from '@/components/Footer/page'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NewzInk',
  description: 'A News site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <header className=' scroll-auto top-0 z-[9999] shadow-sm'>
          <Header/>
        </header>
        <main >
        {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      
        </body>
    </html>
  )
}
