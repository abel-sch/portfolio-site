import Frame from './Frame';
import ImageBlock from './ImageBlock';
import Mockup from './Mockup';
import Screenshots from './Screenshots';

interface ContentBlocks {
	[key: string]: (props: any) => JSX.Element
}

const contentBlocks: ContentBlocks = {
	frame: Frame,
	image: ImageBlock,
	mockup: Mockup,
	screenshots: Screenshots,
}

export default contentBlocks;