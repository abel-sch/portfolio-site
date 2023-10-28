import Image from 'next/image';
import Container from '@components/Container';

export type Screenshots = {
	_type: 'screenshots'
	type: string,
	images: string[],
	html: string
}

export default function Screenshots(props: Screenshots) {
	const {
		images,
		html
	} = props;

	const cols:number = images.length;
	const aspectRatio:string = cols == 1 ? 'aspect-[1.88]' : 'aspect-[9/16]';
	const colClasses:string = cols == 1 ? 'md:col-span-3' : 'md:col-span-1';

	return (
		<Container>
			<figure className='grid md:cols-3 w-full mb-12 lg:mb-24 gap-8'>
				{ images.map(image => (
					<div key={image} className={`relative w-full ${aspectRatio} ${colClasses} rounded overflow-hidden`}>
						<Image src={image} fill alt=""/>
					</div>
				))}
				<figcaption className="prose prose-xs mx-auto prose-grey prose-a:text-grey prose-invert w-full md:col-span-3 text-grey text-center -mt-4 text-xs" dangerouslySetInnerHTML={{__html: html}}/>
			</figure>
		</Container>
	)
}