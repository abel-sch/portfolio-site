import '../styles/globals.css';
import { Manrope } from '@next/font/google';
import { useRouter } from 'next/router';
import { AnimatePresence,motion } from 'framer-motion';
import PageWrapper from '@components/partials/PageWrapper';


const inter = Manrope({
	subsets: ['latin'],
	variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<AnimatePresence initial={false} mode="wait">
			<PageWrapper key={router.asPath} className={`${inter.variable} font-sans`}>
				<motion.div
					initial={{ x: ["0%", "-100%"] }}
					animate={{ x: "-100%" }}
					exit={{ x: ['100%', '0%']}}
					transition={{ ease: "easeInOut", duration: .25}}
					className="bg-black z-50 w-screen fixed inset-0 pointer-events-none">
				</motion.div>
				<Component {...pageProps}/>
			</PageWrapper>
		</AnimatePresence>
	)
}