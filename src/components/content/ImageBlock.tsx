import Image from "next/image";
import Container from "@components/Container";

interface Props {
	width: number,
	height: number,
	image: string
}
export default function ImageBlock(props: Props) {
	const {
		width,
		height,
		image
	} = props;

	return (
		<Container>
			<div className="grid grid-cols-12 mb-12 lg:mb-24">
				<Image
					src={image}
					width={width}
					height={height}
					className="col-span-12 lg:col-span-10 lg:col-start-2"
					alt=""/>
			</div>
		</Container>
	)
}