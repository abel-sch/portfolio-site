import Hero from '@components/Hero';
import ProjectList from '@components/project/ProjectList';
// import { type Page, getPages } from '@/sanity/';

export default async function Page() {
    // const pages = await getPages()

    return (
        <>
            <Hero/>
            {/* <ProjectList className="mt-8" projects={pages}/> */}
        </>
    )
}