import { getHomePage } from '@/sanity/query/homePage';
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const homePage = await getHomePage()

  return (
    <html lang="nl">
      <body className={`${inter.variable} font-sans`}>
        <Wrapper>
          {children}
        </Wrapper>
        { homePage.email && <MailButton email={homePage.email}/>}
      </body>
    </html>
  )
}
