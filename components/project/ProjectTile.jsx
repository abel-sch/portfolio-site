import Image from "next/image";
import Link from "next/link";
import {useRef} from 'react';
import smoothScroller from '@scripts/utils/SmoothScroller';
import useIsomorphicLayoutEffect from '@scripts/hooks/useIsomorphicLayoutEffect';
import useResizeObserver from '@scripts/hooks/useResizeObserver';

// type project = {
//     title: string,
//     slug: string,
//     thumbnail: string
// }

// interface Props {
//     project: project
// }

export default function ProjectTile(props) {
	const {
		project
	} = props;

	const ref = useRef(null);
	const containerRef = useRef(null);
	const containerSize = useResizeObserver(containerRef);
	const textSize = useResizeObserver(ref);

	const calculateOffset = (textWidth, containerWidth) => {
		if (textWidth > containerWidth) {
			return -1 * (textWidth - containerWidth);
		} else {
			return containerWidth - textWidth;
		}
	}

	useIsomorphicLayoutEffect(() => {
		if (ref.current && containerRef.current && containerSize) {
			const maxOffset = calculateOffset(textSize.width,containerSize.width);

			smoothScroller.add(ref.current, o => {
				ref.current.style.transform = `translate3d(${o.factor * maxOffset}px, 0, 0)`;
			});
		}

		return () => {
			if (ref.current) {
				smoothScroller.remove(ref.current);
			}
		};
	}, [ref, containerSize, textSize]);

	return (
		<Link
			href={project.slug}
			className={`
				bg-grey text-8xl lg:text-[10rem] font-bold px-4 py-12 lg:p-8 lg:py-16 flex group
				hover:text-white hover:bg-black
				transition ease-in-out duration-700
				relative overflow-hidden
			`}
		>
		<div className='block whitespace-nowrap' ref={ref}>{project.title}</div>
		<div ref={containerRef} className='absolute top-0 bottom-0 left-4 right-4 lg:left-8 lg:right-8'></div>
		{ project.thumbnail && (
			<Image
				src={project.thumbnail}
				className={`
					opacity-0 group-hover:opacity-100 scale group-hover:scale-110
					ease-in-out duration-700 transition object-contain`}
				alt=''
				fill
			/>
		)}
	</Link>
	)
}