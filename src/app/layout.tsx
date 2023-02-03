import './globals.css'
import { Poppins } from '@next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import QueryProvider from '@/context/QueryProvider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['system-ui', 'arial'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <QueryProvider>
          <div
            className={`${poppins.variable} font-sans w-full flex justify-start flex-col items-center`}
          >
            <Header />
            {children}
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  )
}
