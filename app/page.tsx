import Hero from '@components/Hero';
import ProjectList from '@components/project/ProjectList';

async function getData() {
    const res = await fetch('http://localhost:3000/api/pages', { cache: 'force-cache' });
   
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
}

export default async function Page() {
    const { pages } = await getData();

    return (
        <>
            <Hero/>
            <ProjectList className="mt-8" projects={pages}/>
        </>
    )
}