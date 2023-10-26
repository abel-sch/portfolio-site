import {defineType} from 'sanity'
import mockup from './blocks/mockup'

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
        "mock": "test"
    }
}`