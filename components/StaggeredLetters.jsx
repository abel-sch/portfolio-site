import {motion} from 'framer-motion';

export default function StaggeredLetters(props) {
	const {
		text
	} = props;

	const staggerChildren = 0.2 / text.length;

	const variants = {
		initial: {
			backgroundSize: "0% .15em",
			transition: {
				staggerChildren
			}
		},
		animate: {
			backgroundSize: "100% .15em",
			transition: {
				delay: .5,
				duration: .5,
				delayChildren: .2,
				staggerChildren
			}
		},
		exit: {
			backgroundSize: "0% .15em",
			transition: {
				duration: .5,
				staggerDirection: -1,
				staggerChildren
			}
		}
	}

	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			className="inline bg-gradient-to-r from-blue to-blue bg-left-bottom bg-no-repeat bg-[length:100%_0.15em]"
			variants={variants}
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
		},
		animate: {
			opacity: 1,
		},
		exit: {
			opacity: 0,
		}
	}

	return <motion.span variants={variants} transition={{ ease: "easeInOut"}}>{children}</motion.span>;
}