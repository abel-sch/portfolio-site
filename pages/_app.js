import '../styles/globals.css';
import { Manrope } from '@next/font/google';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from '@components/partials/PageWrapper';


const inter = Manrope({
	subsets: ['latin'],
	variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
			<PageWrapper key={router.asPath} className={`${inter.variable} font-sans`}>
				<Component {...pageProps}/>
			</PageWrapper>
		</AnimatePresence>
	)
}