import {motion} from 'framer-motion';
import {useRef, useMemo} from 'react';
import useResizeObserver from '@scripts/hooks/useResizeObserver';
import dynamic from 'next/dynamic';

export default function Hero() {
	const canvasRef = useRef(null);
	const canvasSize = useResizeObserver(canvasRef);
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

	const HeroCanvas = useMemo(() => dynamic(() => import('@components/HeroCanvas'), {
		ssr: false,
	}), []);

	return (
		<header className="w-full h-screen flex flex-col">
			<div ref={canvasRef} className="grow relative">
				{ canvasSize && <HeroCanvas rect={canvasSize}/> }
			</div>
			<div className="font-bold text-4xl lg:text-6xl py-4 px-4">
				<motion.h1
					initial="initial"
					animate="animate"
					exit="exit"
					variants={variants}
				>
					Abel Schupp <br/>
					<span className="font-normal">Creative developer</span>
				</motion.h1>
				<p className="font-medium text-3xl text-white">hallo@abelschupp.nl</p>
			</div>
		</header>
	);
}