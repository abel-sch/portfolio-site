import Banner from './Banner';
import Frame from './Frame';
import ImageBlock from './ImageBlock';
import Mockup from './Mockup';
import Screenshots from './Screenshots';

interface ContentBlocks {
	[key: string]: (props: any) => JSX.Element
}

const contentBlocks: ContentBlocks = {
	banner: Banner,
	frame: Frame,
	image: ImageBlock,
	mockup: Mockup,
	screenshots: Screenshots,
}

export default contentBlocks;