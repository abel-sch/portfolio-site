import {motion} from 'framer-motion';

import StaggeredLetters from '@components/StaggeredLetters';

export default function PageHeader(props) {
	const {
		title
	} = props;

	return (
		<motion.div className="text-5xl lg:text-8xl mb-24 lg:mb-40 break-all font-bold px-4 py-4 bg-black text-white relative">
			<h1><StaggeredLetters text={title}/></h1>
		</motion.div>
	)
}