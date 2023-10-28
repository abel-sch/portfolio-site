'use client'

import { ContentBlock, ContentBlocks } from '@/sanity/schemas/fields/content';
import contentTypes from '@components/content';

export default function ContentBlocks({ content }: { content?: ContentBlocks }) {
    if (content == null) {
        return null;
    }

    return (
        <>
            {content.map((c, i) => {
                const ContentType = contentTypes[c._type] as React.FC<ContentBlock>;
                return <ContentType key={`content-${i}`} {...c} />;
            })}
        </>
    );
}