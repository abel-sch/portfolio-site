import {motion} from 'framer-motion';

export default function PageHeader(props) {
	const {
		title
	} = props;

	return (
		<motion.div className="text-8xl font-bold px-4 py-4 bg-black text-white">
			<h1 >{title}</h1>
		</motion.div>
	)
}