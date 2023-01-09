import {motion} from 'framer-motion';

import StaggeredLetters from '@components/StaggeredLetters';

export default function PageHeader(props) {
	const {
		title
	} = props;

	return (
		<motion.div className="text-8xl font-bold px-4 py-4 bg-black text-white">
			<h1><StaggeredLetters text={title}/></h1>
		</motion.div>
	)
}