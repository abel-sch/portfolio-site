import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import Head from 'next/head';

export default function PageWrapper(props) {
	const {
		className = '',
		children
	} = props;

	const router = useRouter();
	const isHome = router.asPath == '/';

	const homeVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 0,
			y: "100%"
		}, 
		exit: {
			opacity: 0,
			y:"0%"
		}, 
	}

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				className={`wrapper flex flex-col relative ${className}`}>
				{ children }
			</div>
		</>
	)
}

{/*<motion.div
					initial={{ x: ["0%", "-100%"] }}
					animate={{ x: "-100%" }}
					exit={{ x: ['100%', '0%']}}
					transition={{ ease: "easeInOut", duration: .25}}
					className="bg-black z-50 w-screen fixed inset-0 pointer-events-none">
				</motion.div>*/}