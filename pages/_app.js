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
	const isHome = router.asPath == '/';

	const variants = {
		initial: {
			y: ["0%", "0"],
		},
		animate: {
			y: "100%",
			transition: {
				delay: .2,
				ease: "easeInOut",
				duration: .2
			}
		},
		exit: {
			y: ['100%', '0%'],
		}
	}


	return (
		<AnimatePresence initial={false} mode="wait">
			<PageWrapper key={router.asPath} className={`${inter.variable} font-sans`}>
				{ isHome && <motion.div
					initial="initial" animate="animate" exit="exit"
					variants={variants}
					transition={{ ease: "easeInOut"}}
					className="bg-black z-50 w-screen fixed inset-0 pointer-events-none">
				</motion.div>
				}
				<Component {...pageProps}/>
			</PageWrapper>
		</AnimatePresence>
	)
}