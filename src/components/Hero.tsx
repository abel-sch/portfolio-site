'use client';

import {motion} from 'framer-motion';
import {useRef, useMemo} from 'react';
import useResizeObserver from '@scripts/hooks/useResizeObserver';
import dynamic from 'next/dynamic';
import { HomePage } from '@/sanity/query/homePage';

export default function Hero({ title, subtitle, email } : HomePage) {
	const canvasRef = useRef(null);
	const canvasSize = useResizeObserver(canvasRef);
	const variants = {
		initial: {
			opacity: 0
		},
		animate: {
			opacity: 1,
			transition: {
				duration: .2
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
		<motion.header
		initial="initial"
		animate="animate"
		exit="exit"
		variants={variants}
		
		className="w-full h-screen flex flex-col">
			<div ref={canvasRef} className="grow relative">
				{ canvasSize && <HeroCanvas rect={canvasSize}/> }
			</div>
			<div className="font-bold text-4xl lg:text-6xl py-4 px-4">
				<motion.h1

				>
					{ title } <br/>
					{ <span className="font-normal">{ subtitle }</span> }
				</motion.h1>
				{ email && <p className="mt-2 md:mt-4 font-normal text-3xl">{ email }</p> }
			</div>
		</motion.header>
	);
}
