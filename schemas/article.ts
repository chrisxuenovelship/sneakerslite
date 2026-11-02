import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Authentication', value: 'Authentication' },
          { title: 'B2B Solutions', value: 'B2B Solutions' },
          { title: 'Case Study', value: 'Case Study' },
          { title: 'Market Insights', value: 'Market Insights' },
          { title: 'Trends', value: 'Trends' },
          { title: 'Technology', value: 'Technology' },
        ],
      },
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      description: 'BCP 47 tag. Drives the blog language tabs and <html lang>.',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: '中文 (简体)', value: 'zh-CN' },
          { title: '日本語', value: 'ja' },
          { title: '한국어', value: 'ko' },
        ],
      },
      initialValue: 'en',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'translationKey',
      title: 'Translation Key',
      type: 'string',
      description:
        'Same value on every language version of one article (e.g. "authentication-compliance-asia"). Powers the language toggle on article pages.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Override for search results (max 60 chars)',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Meta description (max 160 chars)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      author: 'author',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
        subtitle: selection.author,
      }
    },
  },
})
