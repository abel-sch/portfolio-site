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
    _id: string
    links?: Link[]
}

type Link = {
    title: string
    slug: string
}

export const getPages = async () => {
    return await client.fetch<Page[]>(
        `*[_type == "page"] {
            title,
            introduction,
              _id,
            "slug": slug.current,
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
            introduction,
            contentType,
            contentType == "links" => {
              links[] {
                "title": label,
                image,
                "slug": url
              }
            },
            contentType == "projects" => {
                "links": *[_type == "project"] {
                    title,
                    "slug": "project/" + slug.current
                }
            }
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
