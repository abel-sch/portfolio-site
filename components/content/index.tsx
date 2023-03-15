import Mockup from './Mockup';
import Screenshots from './Screenshots';

interface ContentBlocks {
    [key: string]: (props: any) => JSX.Element
}

const contentBlocks: ContentBlocks = {
	mockup: Mockup,
	screenshots: Screenshots,
}

export default contentBlocks;