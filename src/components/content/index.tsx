import { FC } from 'react';
import Banner from './Banner';
import Frame from './Frame';
import ImageBlock from './ImageBlock';
import Mockup from './Mockup';
import Screenshots from './Screenshots';
import { type ContentBlock } from '@/sanity/schemas/fields/content';

type ContentTypes = {
    [Type in ContentBlock['_type']]: FC<Extract<ContentBlock, { _type: Type }>>;
};

const contentTypes: ContentTypes = {
	image: ImageBlock,
	mockup: Mockup,
	banner: Banner,
	frame: Frame,
	screenshots: Screenshots
}

export default contentTypes;