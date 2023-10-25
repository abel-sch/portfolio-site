import MailButton from '@components/MailButton';
import Wrapper from '@components/partials/Wrapper';
import '@styles/globals.css';
import { Manrope } from 'next/font/google';

const inter = Manrope({
	subsets: ['latin'],
	variable: '--font-inter',
})

export const metadata = {
  title: 'Abel Schupp',
  description: 'Creative developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} font-sans`}>
        <Wrapper>
          {children}
        </Wrapper>
        <MailButton/>
      </body>
    </html>
  )
}
