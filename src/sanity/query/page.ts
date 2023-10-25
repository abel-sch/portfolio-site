import { PortableTextObject } from "sanity"
import { client } from "../lib/client"

export type Page = {
    title: string
    slug: string
}

export type FullPage = {
    title: string,
    slug: string
    introduction: PortableTextObject
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

export const getPageBySlug = async (slug: string) => {
    return await client.fetch<FullPage>(
        `*[_type == "page" && slug.current == $slug][0] {
            ...,
            "slug": slug.current,
            introduction 
        }`,
        {
            slug
        },
        {
            cache: 'force-cache',
            next: {tags: ['pages', `page-${slug}`]},
        },
    )
}