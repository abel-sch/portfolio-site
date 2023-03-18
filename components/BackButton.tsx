import {useState} from "react";
import {motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function BackButton() {
	const { scrollY } = useScroll();
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest >= 100 && !isVisible) {
			setIsVisible(true);
		} else if (latest < 100 && isVisible) {
			setIsVisible(false);
		}
	  });

	return (
		<motion.div className="fixed top-4 left-4 z-50 text-white drop-shadow-xl text-5xl lg:text-8xl font-bold">
			<AnimatePresence>
				{ isVisible && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>←</motion.div>
				)}	
			</AnimatePresence>
		</motion.div>
	);
}