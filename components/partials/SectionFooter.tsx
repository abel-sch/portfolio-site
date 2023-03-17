import Container from "@components/Container";
import Link from "next/link";

export default function SectionFooter() {
	return (
		<Container>
			<section className="py-12 lg:py-24 text-white w-full text-xl lg:text-4xl">
				Bekijk ook <SectionLink href="/design">Design</SectionLink> of <SectionLink href="/type">Type</SectionLink> projecten.
			</section>
		</Container>
	)
}

interface Props {
	href: string,
	children: JSX.Element | string
}

function SectionLink(props: Props) {
	const {
		href,
		children
	} = props;

	return <Link href={href} className="font-bold bg-gradient-to-r from-blue to-blue bg-left-bottom bg-no-repeat bg-[length:100%_0.15em]">{children}</Link>
}