import '../styles/globals.css';
import { Manrope } from '@next/font/google';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AnimatePresence,motion } from 'framer-motion';
import PageWrapper from '@components/partials/PageWrapper';

const inter = Manrope({
	subsets: ['latin'],
	variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const isHome = router.asPath == '/';
	const [targetRoute, setTargetRoute] = useState('');
	const variants = {
		initial: {
			y: ["100%", "0"],
		},
		animate: {
			y: "100%",
		},
		exit: {
			y: ['100%', '0%'],
		}
	}

	useEffect(() => {
		const handleStart = (string) => {
			setTargetRoute(string);
		}

		router.events.on('routeChangeStart', handleStart)

		return () => {
			router.events.off('routeChangeStart', handleStart)
		}
	}, [router, setTargetRoute]);

	return (
		<>
			<AnimatePresence initial={false} mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
				<PageWrapper key={router.asPath} className={`${inter.variable} font-sans`}>
					<Component {...pageProps}/>
					<div className='z-50 fixed inset-0 w-full h-full pointer-events-none'>
						<motion.div
							transition={{
								duration: .25,
								ease: "easeInOut"
							}}
							initial="initial"
							animate="animate"
							exit="exit"
							variants={variants}
							className={`absolute bottom-0 left-0 right-0 h-full ${targetRoute == '/' ? 'bg-grey' : 'bg-black'}`}>
						</motion.div>
					</div>
				</PageWrapper>
			</AnimatePresence>
		</>
	)
}