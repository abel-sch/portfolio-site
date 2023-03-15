import Frame from './Frame';
import Mockup from './Mockup';
import Screenshots from './Screenshots';

interface ContentBlocks {
    [key: string]: (props: any) => JSX.Element
}

const contentBlocks: ContentBlocks = {
	frame: Frame,
	mockup: Mockup,
	screenshots: Screenshots,
}

export default contentBlocks;