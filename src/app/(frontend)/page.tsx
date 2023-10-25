import Hero from '@components/Hero';
import ProjectList from '@components/project/ProjectList';
import { type Page, getPages } from '@/sanity/query/page';
import { getHomePage } from '@/sanity/query/homePage';

export default async function Page() {
    const pages = await getPages()
    const homePage = await getHomePage()
    return (
        <>
            <Hero {...homePage}/>
            <ProjectList className="mt-8" projects={pages}/>
        </>
    )
}