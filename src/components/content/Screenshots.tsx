'use client'
import Image from 'next/image';
import Container from '@components/Container';
import { Screenshots } from '@/sanity/schemas/fields/blocks/screenshots';

import { PortableText } from '@portabletext/react';
import { BlurhashCanvas } from "react-blurhash";
import { decode } from 'blurhash';
import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function Screenshots(props: Screenshots) {
	const {
		images,
		text
	} = props;
	const [loaded, isLoaded] = useState(false)
	console.log(images)

	const cols:number = images.length;
	const aspectRatio:string = cols == 1 ? 'aspect-[1.88]' : 'aspect-[9/16]';
	const colClasses:string = cols == 1 ? 'md:col-span-3' : 'md:col-span-1';

	return (
		<Container>
			<figure className='grid md:cols-3 w-full mb-12 lg:mb-24 gap-8'>
				{ images.map(image => (
					<div key={image.url} className={`relative w-full ${aspectRatio} ${colClasses} rounded overflow-hidden`}>
						{/* <img src={image.metadata.blurHash}/> */}
						{/* <BlurhashCanvas className="w-full h-full object-cover" hash={image.metadata.blurHash} width={image.metadata.dimensions.width} height={image.metadata.dimensions.height}/> */}
						<Image blurDataURL={image.metadata.blurHash} placeholder="blur" src={image.url} sizes='100vw' fill alt="" onLoadingComplete={() => isLoaded(true)}/>
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

