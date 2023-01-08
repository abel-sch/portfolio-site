import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import Head from 'next/head';

export default function PageWrapper(props) {
	const {
		className = '',
		children
	} = props;

	const router = useRouter();

	const backgroundColor = router.asPath == '/' ? 'bg-grey' : 'bg-black';

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<motion.div 
				className={`wrapper transition ${backgroundColor} ${className}`}>
				{ children }
			</motion.div>
		</>
	)
}