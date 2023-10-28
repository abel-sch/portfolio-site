import { Image } from "../header"
import { PortableTextObject, Rule } from "sanity"
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Screenshots',
  name: 'screenshots',
  type: 'object',
  fields: [
    {
        title: 'Images',
        name: 'images',
        type: 'array',
        of: [
            {
                title: 'Image',
                name: 'image',
                type: 'image',
                validation: (Rule: Rule) => Rule.required()
            },
        ]
    },
    {
        name: 'text',
        title: 'Text',
        type: 'blockContent',
    }
  ]
}

export type Screenshots = {
    _type: 'screenshots'
    images: Image[]
    text?: PortableTextObject
}
