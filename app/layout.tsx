import { Nunito_Sans  } from 'next/font/google';
import './globals.css';
import ClientOnly from './components/ClientOnly';
import Navbar from './components/navbar/navbar.component';
import RegisterModal from './components/modals/registerModal.component';
import LoginModal from './components/modals/loginModal.component';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

const NunSans  = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: 'Reservation',
  description: 'Hotel reservation',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={NunSans.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
