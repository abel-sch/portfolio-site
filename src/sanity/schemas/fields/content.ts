import {defineType} from 'sanity'
import mockup, { ImageBlock, MockupBlock } from './blocks/mockup'
import { Screenshots } from '@components/content/Screenshots'
import { Frame } from '@components/content/Frame'
import { Banner } from '@components/content/Banner'

export default defineType({
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    mockup
  ]
})

export const query = ` {
    _type == 'mockup' => {
        ...,
    }
}`

export type ContentBlock = MockupBlock | ImageBlock  | Banner | Frame | Screenshots

export type ContentBlocks = ContentBlock[]