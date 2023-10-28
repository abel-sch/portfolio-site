import { Image } from "../header"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Mockup',
  name: 'mockup',
  type: 'object',
  fields: [
    {
        title: 'Video',
        name: 'video',
        type: 'file',
    }
  ]
}

export type MockupBlock = {
    _type: 'mockup'
    video: string
}

export type ImageBlock = {
    _type: 'image'
    image: Image
}

export type Banner = {
    _type: 'banner'
    video: string
}

export type Frame = {
    _type: 'frame'
    image: Image
}
export type Screenshots = {
    _type: 'screenshots'
    video: string
}