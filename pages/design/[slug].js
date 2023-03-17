import Head from 'next/head';
import getSlugs from '@scripts/content/getSlugs';
import getContent from '@scripts/content/getContent';
import ProjectHeader from '@components/project/ProjectHeader';
import ProjectDescription from '@components/project/ProjectDescription';
import ContentBlocks from '@components/ContentBlocks';

export default function Page(props) {
	const {
		attributes: {
			title = '',
			featured_image = '',
			content = [],
			header_type = null,
			header_video = null,
			header_color = 'white'
		} = {},
		intro,
		html
	} = props;

	console.log(props);
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<article className="h-full w-full bg-black grow">
				<ProjectHeader
					featuredImage={featured_image}
					type={header_type}
					video={header_video}
					color={header_color}/>
				<ProjectDescription intro={intro} content={html} title={title}/>
				<ContentBlocks content={content}/>
			</article>
		</>
	)
}


export async function getStaticProps(props) {
	const content = await getContent(`design/${props.params.slug}.md`);

	return {
		props: {
			...content
		}
	};
}



export async function getStaticPaths() {
	return getSlugs('content/design/**.md');
}
