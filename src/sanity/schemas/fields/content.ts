import {defineType} from 'sanity'
import mockup, { ImageBlock, MockupBlock } from './blocks/mockup'
import screenshots, { Screenshots } from './blocks/screenshots'
import { Frame } from '@components/content/Frame'
import { Banner } from '@components/content/Banner'

export default defineType({
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    mockup,
    screenshots
  ]
})

export type ContentBlock = MockupBlock | ImageBlock  | Banner | Frame | Screenshots

export type ContentBlocks = ContentBlock[]