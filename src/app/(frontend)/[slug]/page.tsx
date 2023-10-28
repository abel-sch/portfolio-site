
import { getPageBySlug, getPages } from '@/sanity/query/page';
import PageHeader from '@components/PageHeader';
import Introduction from '@components/page/Introduction';
import SectionFooter from '@components/partials/SectionFooter';
import ProjectList from '@components/project/ProjectList';
import { PortableText } from '@portabletext/react';

export default async function Page({ params }: { params: { slug: string}}) {
    const pageData = await getPageBySlug(params.slug)
    const { title, introduction, slug } = pageData
    const pages = await getPages()

     return (

			<div className="h-full w-full bg-black grow">
				<PageHeader title={title}/>
                <Introduction>
                    <PortableText value={ introduction }/>
                </Introduction>

				{ pageData.links && <ProjectList projects={pageData.links}/> }
				<SectionFooter currentSlug={slug} pages={pages}/>
			</div>
	)
}

export async function generateStaticParams() {
    const pages = await getPages()
    return pages.map((page: any) => {
        return { slug: page.slug.replace(/^\/+/, '')};
    });
}