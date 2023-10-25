import { client } from "sanity/lib/client"

export type Page = {
    title: string,
    slug: string
}

export const getPages = async () => {
    return await client.fetch<Page[]>(
        `*[_type == "page"] {
            ...,
            "slug": slug.current
        }`,
        {},
        {
            cache: 'force-cache',
            next: {tags: ['pages']},
        },
    )
}