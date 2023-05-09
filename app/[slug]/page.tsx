import {motion} from 'framer-motion';

import PageHeader from '@components/PageHeader';
import ProjectList from '@components/project/ProjectList';
import SectionFooter from '@components/partials/SectionFooter';

async function getData() {
    const res = await fetch('http://localhost:3000/api/pages', { cache: 'force-cache' });
   
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
}

async function getPageData(slug: string) {
    const res = await fetch(`http://localhost:3000/api/projects?slug=${slug}`, { cache: 'force-cache'});
   
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
}


export default async function Page(props: any) {
    const { params }  = props;
    const pageData = await getPageData(params.slug);
    const { pages } = await getData();
    const {
        attributes: {
            title,
            projects
        },
        html,
        slug
     } = await getPageData(params.slug);

     return (
		<>
			<div className="h-full w-full bg-black grow">
				<PageHeader title={title}/>
				{/* <motion.div
					initial="initial"
					animate="animate"
					transition={{ duration: 1}}
					exit="exit"
					className="px-4 grid grid-cols-12 gap-4 w-full"
					>
					<div
						className="col-span-12 md:col-span-9 md:col-start-4 lg:col-start-6 lg:col-span-6 prose prose-invert prose-xl lg:mb-24"
						dangerouslySetInnerHTML={{__html: props.html}}>
					</div>
				</motion.div> */}
				{ projects && <ProjectList projects={projects}/> }
				<SectionFooter currentSlug={slug} pages={pages}/>
			</div>
		</>
	)
}

export async function generateStaticParams() {
    const { pages } = await getData();
    return pages.map((page: any) => {
        return { slug: page.slug.replace(/^\/+/, '')};
    });
}