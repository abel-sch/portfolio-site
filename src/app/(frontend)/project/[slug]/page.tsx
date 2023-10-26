
import { getPageBySlug, getPages } from '@/sanity/query/page';
import { getProjectBySlug, getProjects } from '@/sanity/query/project';
import Introduction from '@components/page/Introduction';
import SectionFooter from '@components/partials/SectionFooter';
import ProjectDescription from '@components/project/ProjectDescription';
import ProjectHeader from '@components/project/ProjectHeader';
import ProjectList from '@components/project/ProjectList';
import { PortableText } from '@portabletext/react';

export default async function Page({ params }: { params: { slug: string}}) {
    const pageData = await getProjectBySlug(params.slug)
    const pages = await getPages()
    const projects = await getProjects()
    
    console.log(pageData)
    // if (!pageData) {
    //     notFound()
    // }

    // const { title, introduction, slug } = pageData
    // const pages = await getPages()
    // console.log(pageData)
    

     return (
        <article className="h-full w-full bg-black grow">
        <ProjectHeader
            {...pageData.header}/>
        <ProjectDescription {...pageData}/>
        {/* <ContentBlocks content={content}/> */}
        {/* { projects && (
            <div className="mt-24 lg:mt-32">
                <ProjectList currentProject={pageData.title} projects={projects}/>
            </div>
        )} */}
        <SectionFooter currentSlug="design" pages={pages} />
    </article>


			// <div className="h-full w-full bg-black grow">
			// 	{/* <PageHeader title={title}/>
            //     <Introduction>
            //         <PortableText value={ introduction }/>
            //     </Introduction>

			// 	{ pageData.links && <ProjectList projects={pageData.links}/> }
			// 	<SectionFooter currentSlug={slug} pages={pages}/> */}
			// </div>
	)
}

export async function generateStaticParams() {
    const projects = await getProjects()

    return projects.map((page: any) => {
        return { slug: page.slug.replace(/^\/+/, '')};
    });
}