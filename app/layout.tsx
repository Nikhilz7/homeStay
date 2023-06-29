import ClientOnly from './components/ClientOnly';
import Navbar from './components/navbar/navbar.component';
import './globals.css'
import { Nunito_Sans  } from 'next/font/google'
import RegisterModal from './components/modals/registerModal.component';
import ToasterProvider from './providers/ToasterProvider';
const bitter  = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: 'Reservation',
  description: 'Hotel reservation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bitter.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
