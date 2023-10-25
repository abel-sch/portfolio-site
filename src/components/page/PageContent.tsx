'use client'

import { FullPage, Page } from "@/sanity/query/page"
import {motion} from 'framer-motion';
import {PortableText} from '@portabletext/react'

import PageHeader from '@components/PageHeader';
import ProjectList from '@components/project/ProjectList';
import SectionFooter from '@components/partials/SectionFooter';

interface PageContent {
    pages: Page[]
    content: FullPage
}

export default  function PageContent({ content, pages }: PageContent) {
    const { title, introduction, slug } = content
     return (
		<>
			<div className="h-full w-full bg-black grow">
				<PageHeader title={title}/>
				<motion.div
					initial="initial"
					animate="animate"
					transition={{ duration: 1}}
					exit="exit"
					className="px-4 grid grid-cols-12 gap-4 w-full"
					>
                    <div
						className="col-span-12 md:col-span-9 md:col-start-4 lg:col-start-6 lg:col-span-6 prose prose-invert prose-xl lg:mb-24"
						>
                            <PortableText value={ introduction }/>
					</div>
				</motion.div>

				{/* { projects && <ProjectList projects={projects}/> } */}
				<SectionFooter currentSlug={slug} pages={pages}/>
			</div>
		</>
	)
}
