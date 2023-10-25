import { client } from "../lib/client"

export type HomePage = {
    title: string,
    subtitle?: string
    email?: string
}

export const getHomePage = async () => {
    return await client.fetch<HomePage>(
        `*[_type == "homePage"][0] {
            ...,
        }`,
        {},
        {
            cache: 'force-cache',
            next: {tags: ['homePage']},
        },
    )
}