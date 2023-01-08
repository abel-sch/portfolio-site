import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@components/Hero';
import {motion} from 'framer-motion';
import getPages from '@scripts/content/getPages';

export default function Home(props) {
	const {
		pages
	} = props;

	return (
		<>
			<Head>
				<title>Abel Schupp</title>
			</Head>
			<Hero/>
			<div className="flex flex-col">
				{ pages.map(page => (
					<Row key={page.path} {...page}/>
				))}
			</div>
		</>
	)
}

function Row(props) {
	const {
		title,
		path = '#'
	} = props;

	return (
		<Link href={path}>
			<motion.div className={`
				text-8xl font-bold px-4 py-12 shadow-top bg-grey hover:bg-black
				hover:text-white transition
			`}>
				{title}
			</motion.div>
		</Link>
	)
}

export async function getStaticProps(context) {
	const pages = await getPages();

	return {
		props: {
			pages
		},
	}
}