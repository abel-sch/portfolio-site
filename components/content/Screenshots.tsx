import Image from 'next/image';
import { RefObject, useRef } from 'react';
import Container from '@components/Container';
import { motion, MotionValue, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';

interface Props {
	type: string,
	images: string[],
	html: string
}

export default function Screenshots(props: Props) {
	const {
		images,
		html
	} = props;

	const containerRef = useRef<HTMLDivElement>(null);
	const cols:number = images.length;
	const aspectRatio:string = cols == 1 ? 'aspect-[1.88]' : 'aspect-[9/16]';
	const colClasses:string = cols == 1 ? 'md:col-span-3' : 'md:col-span-1';

	return (
		<Container>
			<div className="w-full" ref={containerRef}>
				<motion.figure
				className='grid md:cols-3 w-full mb-12 lg:mb-24 gap-8'>
					{ images.length >= 3 && images.map((image, index) => (
						<ImageBlock
							container={containerRef}
							aspectRatio={aspectRatio}
							colClasses={colClasses}
							key={image}
							image={image}
							animate={ cols == 3}
							index={ 2 - index}/>
					))}
					<figcaption className="prose prose-xs mx-auto prose-grey prose-a:text-grey prose-invert w-full md:col-span-3 text-grey text-center -mt-4 text-xs" dangerouslySetInnerHTML={{__html: html}}/>
				</motion.figure>
			</div>
		</Container>
	)
}

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageBlock(props: {
	image: string;
	index: number;
	aspectRatio: string;
	colClasses: string;
	container: RefObject<HTMLDivElement>;
	animate: boolean
}) {
	const {
		image,
		index,
		aspectRatio,
		colClasses,
		container,
		animate
	} = props;

	console.log(animate);


	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"]
	});

	const progress = useTransform(scrollYProgress,
		(progress) => (((-2 - index) * progress + (1 + index / 3)) ** 3));

	const clampedProgress = useTransform(progress, [-1, 1], [-1, 1], { clamp: true});
	
	const y = useTransform(clampedProgress,
		[-1, 1], [-50, 50], { clamp: true }
		);

	const opacity = useTransform(clampedProgress,
		(progress) => {
			
			return 1 - .75 * Math.abs(progress)
		}
	);
		
	
	const setY = animate == true ? y : 0;
	

	return (
		<motion.div key={image} style={{ y: setY, opacity }} className={`relative w-full ${aspectRatio} ${colClasses} rounded overflow-hidden`}>
			<Image src={image} fill alt=""/>
		</motion.div>
	)
}