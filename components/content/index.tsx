import Mockup from './Mockup';

interface ContentBlocks {
    [key: string]: (props: any) => JSX.Element
}

const contentBlocks: ContentBlocks = {
	mockup: Mockup,
}

export default contentBlocks;