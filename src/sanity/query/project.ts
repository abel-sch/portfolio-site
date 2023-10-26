import { PortableTextObject } from "sanity"
import { client } from "../lib/client"
import { Header } from "../schemas/fields/header"

export type Project = {
    title: string
    slug: string
}

export type FullProject = {
    title: string,
    slug: string
    introduction: PortableTextObject
    text: PortableTextObject
    _id: string
    links?: Link[]
    header: Header
}

type Link = {
    title: string
    slug: string
}

export const getProjects = async () => {
    return await client.fetch<Project[]>(
        `*[_type == "projects"] {
            _id,
            title,
            text,
            introduction,
            "slug": slug.current,
        }`,
        {},
        {
            cache: 'force-cache',
            next: {tags: ['projects']},
        },
    )
}

export const getProjectBySlug = async (slug: string) => {
    return await client.fetch<FullProject>(
        `*[_type == "project" && slug.current == $slug][0] {
            ...,
            "slug": slug.current,
            introduction,
            header {
                type,
                "video": video.asset->.url,
                color,
                image {
                    "url": asset->.url,
                    "metadata": {
                        "dimensions": asset->.metadata.dimensions,
                        "blurHash": asset->.metadata.blurHash
                    }
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
