import Head from 'next/head';
import Link from 'next/link';
import Hero from '@components/Hero';
import {motion} from 'framer-motion';
import getPages from '@scripts/content/getPages';
import ProjectList from '@components/project/ProjectList';

export default function Home(props) {
	const {
		pages
	} = props;

	const projects = pages.map(({title, path}) => ({
		title,
		slug: `/${path}`
	}));

	return (
		<>
			<Head>
				<title>Abel Schupp</title>
			</Head>
			<Hero/>
			<ProjectList className="mt-8" projects={projects}/>
		</>
	)
}

export async function getStaticProps() {
	const pages = await getPages();

	return {
		props: {
			pages
		},
	}
}