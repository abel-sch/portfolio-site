'use client'

import { ContentBlocks } from '@/sanity/schemas/fields/content';
import ContentTypes from '@components/content';

export default function ContentBlocks({ content }: { content: ContentBlocks }) {
    return content?.map((c, i) => {
		const ContentType = ContentTypes[c._type];
		return <ContentType key={`content-${i}`} {...c}  />;
	}) || null;
}