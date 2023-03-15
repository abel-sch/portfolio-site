import Image from "next/image";
import Link from "next/link";
import {useRef} from 'react';
import smoothScroller from '@scripts/utils/SmoothScroller';
import useIsomorphicLayoutEffect from '@scripts/hooks/useIsomorphicLayoutEffect';


type project = {
    title: string,
    slug: string,
    thumbnail: string
}

interface Props {
    project: project
}

export default function ProjectTile(props: Props) {
    const {
        project
    } = props;

    const ref = useRef(null);

	useIsomorphicLayoutEffect(() => {
		if (ref.current) {
            smoothScroller.add(ref.current, o => {
                console.log(o);
            });
		}

		return () => {
			if (ref.current) {
				smoothScroller.remove(ref.current);
			}
		};
	}, [ref]);

    return (
        <Link
            href={project.slug}
            className={`
                bg-white text-8xl lg:text-[10rem] font-bold px-4 py-16 lg:p-8 block group
                hover:text-white hover:bg-black
                transition ease-in-out duration-700
                relative overflow-hidden
            `}
        >
        <span ref={ref}>{project.title}</span>
        <Image
            src={project.thumbnail}
            className={`
                opacity-0 group-hover:opacity-100 scale group-hover:scale-110
                ease-in-out duration-700 transition object-contain`}
            alt=''
            fill
        />
    </Link>
    )
}