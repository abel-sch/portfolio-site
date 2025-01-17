import Image from "next/image";

interface Props {
	width: number,
	height: number,
	image: string
}
export default function ImageBlock(props: Props) {
	const {
		image
	} = props;

	return (
		<div className="mb-12 lg:mb-24 last:mb-0 h-80 relative overflow-hidden">
			<Image
				src={image}
				fill
				className="object-cover"
				alt=""/>
		</div>
	)
}