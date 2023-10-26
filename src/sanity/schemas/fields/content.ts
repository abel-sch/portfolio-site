import {defineType} from 'sanity'
import mockup, { MockupBlock } from './blocks/mockup'

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

export type ContentBlock = MockupBlock

export type ContentBlocks = ContentBlock[]