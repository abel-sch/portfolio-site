import {motion} from 'framer-motion';

export default function StaggeredLetters(props) {
	const {
		text
	} = props;

	const transition =  {
		staggerChildren: 0.25 / text.length
	};

	return (
		<motion.div
			transition={transition}
			initial="initial"
			animate="animate"
			exit="exit"
			className="inline"
		>
			{text.split('').map((letter, index) => <Letter key={index}>{letter}</Letter>)}
		</motion.div>
	)
}

function Letter(props) {
	const {
		children
	} = props;

	const variants = {
		initial: {
			opacity: 0,
			y: 0
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: 0
		}
	}

	return <motion.span variants={variants}>{children}</motion.span>;
}