import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {motion} from 'framer-motion';

import PageHeader from '@components/PageHeader';
import ProjectList from '@components/project/ProjectList';

import getSlugs from '@scripts/content/getSlugs';
import getContent from '@scripts/content/getContent';
import getProjects from '@scripts/content/getProjects';

export default function Page(props) {
	const {
		attributes: {
			title = ''
		} = {},
		projects = [],
	} = props;


	console.log(projects, 'hoi');
	const variants = {
		initial: {
			opacity: 0
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 1
			}
		},
		exit: {
			opacity: 0,
			transition: {
				duration: .5
			}
		}
	}

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className="h-full w-full bg-black grow">
				<PageHeader title={title}/>
				<motion.div
					initial="initial"
					animate="animate"
					transition={{ duration: 1}}
					exit="exit"
					variants={variants}
					className="px-4 grid grid-cols-12 gap-4 w-full"
					>
					<div className="col-span-12 md:col-span-9 md:col-start-4 lg:col-start-6 lg:col-span-6 prose prose-invert prose-xl" dangerouslySetInnerHTML={{__html: props.html}}></div>
				</motion.div>
				<ProjectList projects={projects}/>
			</div>
		</>
	)
}


export async function getStaticProps(props) {
	const content = await getContent(`${props.params.slug}.md`);
	const projects = await getProjects('design');

	return {
		props: {
			...content,
			projects
		}
	};
}



export async function getStaticPaths() {
	return getSlugs('content/**.md');
}
