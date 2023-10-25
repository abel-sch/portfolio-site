'use client';

import Image from "next/image";
import Link from "next/link";
import {useRef, useMemo} from 'react';
import useResizeObserver from '@scripts/hooks/useResizeObserver';
import { getLinkTarget } from "@scripts/utils/getLinkTarget";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";

type Project = {
	title: string,
	slug: string,
	thumbnail?: string
}

interface Props {
	project: Project
}

export default function ProjectTile(props: Props) {
	const {
		project
	} = props;

	const ref = useRef(null);
	const containerRef = useRef(null);
	const containerSize = useResizeObserver(containerRef);
	const textSize = useResizeObserver(ref);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["end start", "start end"]
	});

	const calculateOffset = (textWidth: number, containerWidth: number) => {
		if (textWidth > containerWidth) {
			return -1 * (textWidth - containerWidth);
		} else {
			return containerWidth - textWidth;
		}
	}
	const maxOffset = useMemo(() => {
		if (textSize && containerSize) {
			return calculateOffset(textSize.width,containerSize.width)
		}
	}, [textSize, containerSize]);

	const xSpring = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 50,
		restDelta: 0.001
	});

	const x = useTransform(
		xSpring,
		[0, 1],
		[0, maxOffset]
	)

	return (
		<Link
			scroll={false}
			href={`${project.slug}`}
			target={getLinkTarget(project.slug)}
			className={`
				bg-grey text-8xl lg:text-[10rem] font-bold px-4 py-12 lg:p-8 lg:py-16 flex group
				hover:text-white hover:bg-black
				transition ease-in-out duration-700
				relative overflow-hidden
			`}
		>
			<motion.div style={{ x }} className='block whitespace-nowrap' ref={ref}>{project.title}</motion.div>
			<motion.div ref={containerRef} className='absolute top-0 bottom-0 left-4 right-4 lg:left-8 lg:right-8'></motion.div>
			{ project.thumbnail && (
				<Image
					src={project.thumbnail}
					className={`
						opacity-0 group-hover:opacity-100 scale group-hover:scale-125
						ease-in-out duration-700 transition object-contain`}
					alt=''
					fill
				/>
			)}
		</Link>
	)
}