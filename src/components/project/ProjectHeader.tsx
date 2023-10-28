"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/sanity/schemas/fields/header';

export default function ProjectHeader(props: Header) {
	const {
		type,
		color = 'black'
	} = props;

	const colors = {
		'white': 'bg-white',
		'black': 'bg-pure-black'
	};

	const getBackgroundColorClass = () => {
		switch (color) {
			case 'black':
			return colors['black'];
			case 'white':
			return colors['white'];
			default:
			return false;
		}
	}
	
	const backgroundColorClass = getBackgroundColorClass();
	const style = !backgroundColorClass ? {
		backgroundColor: color
	} : {};
	console.log(props)

	return (
		<header
			style={style}
			className={`w-full flex justify-center py-8 lg:py-16 ${backgroundColorClass}`}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: .5, ease: "easeInOut"}}
				className="max-w-screen-lg w-full aspect-video relative">
				{ type == 'image'&& props.image &&   (
					<Image
						src={props.image.url}
						alt=""
						priority
						width={props.image.metadata.dimensions.width}
						height={props.image.metadata.dimensions.height}
					/>
				)}
				{ type == 'video' && (
					<video autoPlay muted loop playsInline>
						<source src={props.video} type="video/mp4"/>
					</video>
				)}
			</motion.div>
		</header>
	)
}