import './globals.css'
import Header from './components/Header'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: "Youtube next.js crash course",
  description: "checking out new features of next.js 13",
  keywords: "youtube live-stream next.js new features"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
