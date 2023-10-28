import {defineType} from 'sanity'

export type Header = VideoHeader | ImageHeader

type VideoHeader = {
    color: 'black' | 'white'
    type: 'video'
    video: string
}

type ImageHeader = {
    color: 'black' | 'white'
    type: 'image'
    image: Image
}

export type Image = {
    url: string
    metadata: {
        dimensions: {
            width: number
            height: number
        }
        blurHash: string
    }
}


export default defineType({
  title: 'Header',
  name: 'header',
  type: 'object',
  fields: [
    {
        title: 'Type',
        name: 'type',
        type: 'string',
        options: {
            list: ['video', 'image'],
            layout: 'radio'
        }
    },
    {
        title: 'Video',
        name: 'video',
        type: 'file',
        hidden: ({parent}) => parent?.type !== 'video'
    },
    {
        title: 'Image',
        name: 'image',
        type: 'image',
        hidden: ({parent}) => parent?.type !== 'image'
    },
    {
        title: 'Color',
        name: 'color',
        type: 'string',
        options: {
            list: ['black', 'white'],
            layout: 'radio'
        }
    },
  ]
})