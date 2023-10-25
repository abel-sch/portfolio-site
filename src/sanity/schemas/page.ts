import {Slug, defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'blockContent',
    }),
    defineField({
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Links',
            value: 'links'
          }, {
            title: 'Projects',
            value: 'projects'
          }
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          name: 'link',
          type: 'object',
          title: 'Link',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              validation: Rule => Rule.required()
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
            }
          ]
        }
      ]
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})