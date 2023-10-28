import Image from "next/image";
import Container from "@components/Container";
import { ImageBlock } from "@/sanity/schemas/fields/blocks/mockup";
import { ReactElement } from "react";

export default function ImageBlock(props: ImageBlock): ReactElement {
	const {
		image
	} = props;

	return (
		<Container>
			<div className="grid grid-cols-12 mb-12 lg:mb-24">
				<Image
					src={image.url}
					width={image.metadata.dimensions.width}
					height={image.metadata.dimensions.height}
					className="col-span-12 lg:col-span-10 lg:col-start-2"
					alt=""/>
			</div>
		</Container>
	)
}