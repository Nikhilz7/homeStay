import { Nunito_Sans  } from 'next/font/google';
import './globals.css';
import ClientOnly from './components/ClientOnly';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

import Navbar from './components/navbar/navbar.component';

import RegisterModal from './components/modals/registerModal.component';
import LoginModal from './components/modals/loginModal.component';
import RentModal from './components/modals/rentModal.component';

const NunSans  = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: 'Vacayhome',
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
            <LoginModal />
            <RegisterModal />
            <RentModal />
            <Navbar currentUser={currentUser} />
        </ClientOnly>
        {/* pt-24 but goes above */}
          <div className="pb-20 pt-36">
              {children}
          </div>
      </body>
    </html>
  )
}
