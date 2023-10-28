'use client'
import Image from 'next/image';
import Container from '@components/Container';
import { Screenshots } from '@/sanity/schemas/fields/blocks/screenshots';

import { PortableText } from '@portabletext/react';
import useNextBlurhash from "use-next-blurhash";
import { FC } from 'react';

export default function Screenshots(props: Screenshots) {
	const {
		images,
		text
	} = props;

	const cols:number = images.length;
	const aspectRatio:string = cols == 1 ? 'aspect-[1.88]' : 'aspect-[9/16]';
	const colClasses:string = cols == 1 ? 'md:col-span-3' : 'md:col-span-1';

	return (
		<Container>
			<figure className='grid md:cols-3 w-full mb-12 lg:mb-24 gap-8'>
				{ images.map(image => (
					<div key={image.url} className={`relative w-full ${aspectRatio} ${colClasses} rounded overflow-hidden`}>
						{/* <Image src={image.url} sizes='100vw' fill alt=""/> */}
						<BlurImage url={image.url} blurHash={image.metadata.blurHash}/>
					</div>
				))}
				{ text && (
					<figcaption className="prose prose-xs mx-auto prose-grey prose-a:text-grey prose-invert w-full md:col-span-3 text-grey text-center -mt-4 text-xs">
							<PortableText value={text}/>
					</figcaption>
				)}
			</figure>
		</Container>
	)
}

const BlurImage = ({url, blurHash} : {url: string, blurHash: string}) => {
	const [blurDataUrl] = useNextBlurhash(blurHash);
	console.log(blurDataUrl)

	return <Image src={url} sizes='100vw' placeholder="blur" blurDataURL={blurDataUrl} fill alt=""/>
}