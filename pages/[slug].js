import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import PageHeader from '@components/PageHeader';

import getSlugs from '@scripts/content/getSlugs';
import getContent from '@scripts/content/getContent';

export default function Page(props) {
	const {
		attributes: {
			title = ''
		} = {}
	} = props;

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div class="h-full w-full bg-black grow">
				<PageHeader title={title}/>
			</div>
		</>
	)
}


export async function getStaticProps(props) {
	const content = await getContent(`${props.params.slug}.md`);

	return {
		props: {
			...content
		}
	};
}



export async function getStaticPaths() {
	return getSlugs('content/**.md');
}
