import Head from 'next/head';
import getSlugs from '@scripts/content/getSlugs';
import getContent from '@scripts/content/getContent';
import ProjectHeader from '@components/ProjectHeader';

export default function Page(props) {
	const {
		attributes: {
			title = '',
            featured_image = ''
		} = {}
	} = props;

    console.log(props);
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<article className="h-full w-full bg-black grow">
                <ProjectHeader featured_image={featured_image}/>
                {/* <ProjectDescription/> */}
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
