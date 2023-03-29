import Container from "@components/Container";
import Link from "next/link";
import { Fragment, useRef } from "react";
import {motion} from "framer-motion";
import useResizeObserver from "@scripts/hooks/useResizeObserver";

interface Props {
	pages: Page[],
	currentSlug: string
}

interface Page {
	title: string
	path: string
}

export default function SectionFooter(props: Props) {
	const {
		pages,
		currentSlug
	} = props;

	const filteredPages = pages.filter(page => page.path != currentSlug);
	const sectionLinks = () => filteredPages.map((page, index) =>(
		<Fragment key={page.path}>
			{ index > 0 && <> of </>}
			<SectionLink href={`/${page.path}`}>{page.title}</SectionLink>
		</Fragment>
	))

	return (
		<Container>
			<section className="py-12 lg:py-24 text-white w-full text-xl lg:text-4xl">
				Bekijk ook {sectionLinks()} projecten.
			</section>
		</Container>
	)
}

interface LinkProps {
	href: string,
	children: JSX.Element | string
}

function SectionLink(props: LinkProps) {
	const {
		href,
		children
	} = props;

	const ref = useRef(null);
	const size = useResizeObserver(ref);
	const width = size ? size.width * -1 : 0;

	return (
		<Link href={href} >
			<motion.div
				ref={ref}
				whileHover={{
					backgroundPositionX: '0px',
					transition: {
						ease: 'easeInOut',
						duration: .5
					}
				}}
				style={{backgroundPositionX: `${-1 * size.width}px`}}
				className="inline-block font-bold bg-gradient-to-r from-blue to-blue bg-left-bottom bg-no-repeat bg-[length:100%_0.15em]"
			>
				{children}
			</motion.div>
		</Link>
	)
}