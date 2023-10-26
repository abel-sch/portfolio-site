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
        // validation: (Rule) => Rule.required()
    }
  ]
}

export type MockupBlock = {
    _type: 'mockup'
    video: string
}