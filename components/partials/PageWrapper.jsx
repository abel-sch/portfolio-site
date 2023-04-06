import Head from 'next/head';
import MailButton from '@components/MailButton';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import BackButton from '@components/BackButton';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function PageWrapper(props) {
	const {
		className = '',
		children
	} = props;

	const ClickParticles = dynamic(
		() => import('@components/partials/ClickParticles'),
	{ ssr: false });

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		}
	}, []);

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ClickParticles/>
			<div
				className={`wrapper flex flex-col relative ${className}`}>
				<BackButton/>
				{ children }
				<MailButton/>
			</div>
		</>
	)
}