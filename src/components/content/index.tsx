import React from 'react';
import Banner from './Banner';
import Frame from './Frame';
import ImageBlock from './ImageBlock';
import Mockup from './Mockup';
import Screenshots from './Screenshots';
import { MockupBlock } from '@/sanity/schemas/fields/blocks/mockup';
import { type ContentBlock } from '@/sanity/schemas/fields/content';

type ContentTypes = {
	'mockup': (props: MockupBlock) => JSX.Element
}

const contentBlocks: ContentTypes = {
	// banner: Banner,
	// frame: Frame,
	// image: ImageBlock,
	mockup: Mockup,
	// screenshots: Screenshots,
}

export default contentBlocks;