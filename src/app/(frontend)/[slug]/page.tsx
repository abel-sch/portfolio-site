
import { getPageBySlug, getPages } from '@/sanity/query/page';
import PageContent from '@components/page/PageContent';


export default async function Page({ params }: { params: { slug: string}}) {
    const pageData = await getPageBySlug(params.slug)
    const pages = await getPages()

     return (
      <PageContent content={{...pageData}} pages={pages}/>
	)
}

export async function generateStaticParams() {
    const pages = await getPages()
    return pages.map((page: any) => {
        return { slug: page.slug.replace(/^\/+/, '')};
    });
}