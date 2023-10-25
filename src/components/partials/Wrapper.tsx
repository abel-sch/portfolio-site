'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { ReactNode } from 'react';

type Props = {
    className?: string,
    children: ReactNode
}

export default function Wrapper(props: Props) {
	const {
		className = '',
		children
	} = props;

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: DOMHighResTimeStamp) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		}
	}, []);

	return (
        <div
            className={`wrapper flex flex-col relative ${className}`}>
            { children }
        </div>
	)
}