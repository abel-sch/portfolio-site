import {motion} from 'framer-motion';

export default function Hero(props) {

	const variants = {
		initial: {
			opacity: 0
		},
		animate: {
			opacity: 1,
			transition: {
				delay: .5 ,
				duration: .5
			}
		},
		exit: {
			opacity: 1
		}
	}

	return (
		<header className="w-full h-screen flex flex-col">
			<div className="grow"></div>
			<div className="font-bold text-6xl py-4 px-4">
				<motion.h1
					initial="initial"
					animate="animate"
					exit="exit"
					variants={variants}
				>
					Abel Schupp <br/>
					<span className="font-normal">Designer</span> + <span className="font-normal">Developer</span>
				</motion.h1>
				<p className="font-medium text-white">hallo@abelschupp.nl</p>
			</div>
		</header>
	);
}