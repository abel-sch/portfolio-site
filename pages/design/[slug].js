import Head from 'next/head';
import getSlugs from '@scripts/content/getSlugs';
import getContent from '@scripts/content/getContent';
import ProjectHeader from '@components/project/ProjectHeader';
import ProjectDescription from '@components/project/ProjectDescription';
import ContentBlocks from '@components/ContentBlocks';
import SectionFooter from '@components/partials/SectionFooter';
import ProjectList from '@components/project/ProjectList';
import getProjects from '@scripts/content/getProjects';
import getPages from '@scripts/content/getPages';

export default function Page(props) {
	const {
		attributes: {
			title = '',
			featured_image = '',
			content = [],
			header_type = 'image',
			header_video = null,
			header_color = 'white'
		} = {},
		projects = [],
		intro,
		html,
		pages
	} = props;

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
				{ projects && (
					<div className="mt-24 lg:mt-32">
						<ProjectList currentProject={title} projects={projects}/>
					</div>
				)}
				<SectionFooter currentSlug="design" pages={pages} />
			</article>
		</>
	)
}


export async function getStaticProps(props) {
	const content = await getContent(`design/${props.params.slug}.md`);
	const projects = await getProjects('design');
	const pages = await getPages();

	return {
		props: {
			...content,
			projects,
			pages
		}
	};
}


export async function getStaticPaths() {
	return getSlugs('content/design/**.md');
}
