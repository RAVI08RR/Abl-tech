import { defineField, defineType } from 'sanity'

const seoField = defineField({
  name: 'seo', title: 'SEO', type: 'object',
  fields: [
    { name: 'metaTitle', title: 'Meta Title', type: 'string' },
    { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 },
    { name: 'ogImage', title: 'OG Image', type: 'image' },
    { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } },
    { name: 'robots', title: 'Robots', type: 'string', options: { list: ['index,follow', 'noindex,follow', 'index,nofollow', 'noindex,nofollow'] }, initialValue: 'index,follow' },
  ],
})

export const service = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: () => '🛠️',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text', rows: 3 }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'features', title: 'Features', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Feature Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text', rows: 2 },
          { name: 'icon', title: 'Icon', type: 'string' },
        ],
        preview: { select: { title: 'title' } },
      }],
    }),
    defineField({ name: 'benefits', title: 'Benefits', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'technologies', title: 'Technologies Used', type: 'array', of: [{ type: 'reference', to: [{ type: 'technology' }] }] }),
    defineField({
      name: 'process', title: 'Process Steps', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'step', title: 'Step Number', type: 'number' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'title', subtitle: 'step' }, prepare({ title, subtitle }) { return { title: `Step ${subtitle}: ${title}` } } },
      }],
    }),
    defineField({
      name: 'faqs', title: 'FAQs', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
        ],
        preview: { select: { title: 'question' } },
      }],
    }),
    defineField({ name: 'caseStudies', title: 'Related Case Studies', type: 'array', of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }] }),
    seoField,
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'shortDescription' }, prepare({ title, subtitle }) { return { title, subtitle } } },
})

export const industry = defineType({
  name: 'industry',
  title: 'Industries',
  type: 'document',
  icon: () => '🏭',
  fields: [
    defineField({ name: 'name', title: 'Industry Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'challenges', title: 'Industry Challenges', type: 'array', of: [{ type: 'object', fields: [{ name: 'title', title: 'Challenge', type: 'string' }, { name: 'description', title: 'Description', type: 'text', rows: 2 }], preview: { select: { title: 'title' } } }] }),
    defineField({ name: 'solutions', title: 'Our Solutions', type: 'array', of: [{ type: 'object', fields: [{ name: 'title', title: 'Solution', type: 'string' }, { name: 'description', title: 'Description', type: 'text', rows: 2 }], preview: { select: { title: 'title' } } }] }),
    defineField({ name: 'services', title: 'Related Services', type: 'array', of: [{ type: 'reference', to: [{ type: 'service' }] }] }),
    defineField({ name: 'technologies', title: 'Technologies', type: 'array', of: [{ type: 'reference', to: [{ type: 'technology' }] }] }),
    defineField({ name: 'caseStudies', title: 'Case Studies', type: 'array', of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }] }),
    defineField({ name: 'faqs', title: 'FAQs', type: 'array', of: [{ type: 'object', fields: [{ name: 'question', title: 'Question', type: 'string' }, { name: 'answer', title: 'Answer', type: 'text', rows: 3 }], preview: { select: { title: 'question' } } }] }),
    seoField,
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: { select: { title: 'name', icon: 'icon' }, prepare({ title, icon }) { return { title: `${icon || '🏭'} ${title}` } } },
})

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  icon: () => '📁',
  fields: [
    defineField({ name: 'title', title: 'Project Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'client', title: 'Client Name', type: 'string' }),
    defineField({ name: 'industry', title: 'Industry', type: 'reference', to: [{ type: 'industry' }] }),
    defineField({ name: 'service', title: 'Primary Service', type: 'reference', to: [{ type: 'service' }] }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Image Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'challenge', title: 'The Challenge', type: 'text', rows: 5 }),
    defineField({ name: 'solution', title: 'Our Solution', type: 'text', rows: 5 }),
    defineField({ name: 'approach', title: 'Our Approach', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'technologyStack', title: 'Technology Stack', type: 'array', of: [{ type: 'reference', to: [{ type: 'technology' }] }] }),
    defineField({
      name: 'metrics', title: 'Results & Metrics', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value (e.g. 42%)', type: 'string' },
          { name: 'metric', title: 'Metric Label', type: 'string' },
          { name: 'description', title: 'Description', type: 'string' },
        ],
        preview: { select: { title: 'value', subtitle: 'metric' } },
      }],
    }),
    defineField({ name: 'testimonial', title: 'Client Testimonial', type: 'reference', to: [{ type: 'testimonial' }] }),
    seoField,
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
  ],
  preview: { select: { title: 'title', subtitle: 'client', media: 'heroImage' } },
})
