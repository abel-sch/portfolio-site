"use client"

import { FullProject } from "@/sanity/query/project";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion"
import { PortableTextBlock } from "sanity"


export default function ProjectDescription(props: FullProject) {
	const {
		introduction,
		text,
		title
	} = props;

	return (
		<motion.div
			className="text-white p-4 pt-16 lg:p-24 lg:py-28 mx-auto relative overflow-hidden"
		>
			{ title && (
				<motion.h1
				className="absolute top-0 left-0 text-[10rem] lg:text-[15rem] font-bold -translate-y-1/2 opacity-5 whitespace-nowrap">
					<motion.div
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: -100, opacity: 1 }}
						transition={{ duration: 2, ease: "easeInOut"}}
					>{title}</motion.div>
				</motion.h1>
			)}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut", delay: .5}}
				className="mx-auto flex max-w-screen-lg"
			>
				<div className="prose prose-invert">
					{ introduction && <div className="text-2xl lg:text-4xl lg:leading-snug leading-normal"><PortableText value={introduction}/></div> }
					{ text && <div className="text-lg"><PortableText value={text}/></div> }
				</div>
			</motion.div>
		</motion.div>
	);
}