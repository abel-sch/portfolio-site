import { PortableTextObject } from "sanity"
import { client } from "../lib/client"
import { Header } from "../schemas/fields/header"
import { ContentBlocks } from "../schemas/fields/content"
import { content, image } from "./content"

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
    content: ContentBlocks
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
            next: {tags: ['project']},
        },
    )
}

const contentQuery = `{
    ...,
    _type == 'mockup' => {
        ...,
        "mock": "test"
    }
}`

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
                image ${image}
            },
            content[] ${content},
        }`,
        {
            slug
        },
        {
            cache: 'force-cache',
            next: {tags: ['project', `project-${slug}`]},
        },
    )
}            
