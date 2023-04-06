import {useState} from "react";
import {motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

export default function BackButton() {
	const { scrollY } = useScroll();
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const router = useRouter();

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest >= 100 && !isVisible) {
			setIsVisible(true);
		} else if (latest < 100 && isVisible) {
			setIsVisible(false);
		}
	});

	if (router.asPath == '/') return;

	const backPath = (path: string) : string => {
		const dirs = path.split('/');
		const lastDir = dirs[dirs.length - 1].length;
		return path.substring(0, path.length - lastDir);
	}

	return (
		<motion.div className="fixed top-4 left-4 z-40 text-white drop-shadow-xl text-5xl lg:text-8xl font-bold">
			<AnimatePresence>
				{ isVisible && (
					<motion.div
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -10}}
						whileHover={{
							x: -10,
							transition: {
								type: 'spring',
								damping: 8,
								mass: 1
							},
						}}
					><Link scroll={false} href={backPath(router.asPath)}>←</Link>
					</motion.div>
				)}	
			</AnimatePresence>
		</motion.div>
	);
}