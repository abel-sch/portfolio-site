import ContentTypes from '@components/content';

interface Prop {
    content: ContentBlock[]
}

interface ContentBlock {
    type: string,
    [key: string]: any
}

export default function ContentBlocks(props: Prop) {
	const {
		content,
	} = props;

    return content?.map((c, i) => {
		const ContentType = ContentTypes[c.type];
		return <ContentType key={`content-${i}`} {...c}  />;
	}) || null;
}