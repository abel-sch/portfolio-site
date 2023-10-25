import { NextResponse } from 'next/server';
import getContent from '@scripts/content/getContent';
import getProjects from '@scripts/content/getProjects';
import getSlugs from '@scripts/content/getSlugs';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const content = await getContent(`${slug}.md`);

	if (slug == 'design') {
		const projects = await getProjects('design');
        content.attributes.projects = projects;
	}
    return NextResponse.json({ ...content })
}