import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  icon: () => '📝',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'featuredImage', title: 'Featured Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] }),
    defineField({ name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'readingTime', title: 'Reading Time (mins)', type: 'number' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }, { name: 'caption', title: 'Caption', type: 'string' }] },
        {
          type: 'object', name: 'codeBlock', title: 'Code Block',
          fields: [
            { name: 'language', title: 'Language', type: 'string', options: { list: ['javascript', 'typescript', 'python', 'bash', 'css', 'html', 'json', 'sql'] } },
            { name: 'code', title: 'Code', type: 'text' },
          ],
          preview: { select: { title: 'language' }, prepare({ title }) { return { title: `Code: ${title}` } } },
        },
        {
          type: 'object', name: 'videoEmbed', title: 'Video Embed',
          fields: [
            { name: 'url', title: 'YouTube/Vimeo URL', type: 'url' },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
          preview: { select: { title: 'caption', subtitle: 'url' } },
        },
      ],
    }),
    defineField({
      name: 'seo', title: 'SEO', type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string' },
        { name: 'metaDescription', type: 'text', rows: 3 },
        { name: 'ogImage', type: 'image' },
        { name: 'keywords', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } },
      ],
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'publishedAt', media: 'featuredImage' }, prepare({ title, subtitle, media }) { return { title, subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'Draft', media } } },
})

export const category = defineType({
  name: 'category',
  title: 'Blog Categories',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    defineField({ name: 'title', title: 'Category Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
    defineField({ name: 'color', title: 'Color (hex)', type: 'string' }),
  ],
  preview: { select: { title: 'title' } },
})

export const author = defineType({
  name: 'author',
  title: 'Authors',
  type: 'document',
  icon: () => '👤',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 } }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 3 }),
    defineField({ name: 'designation', title: 'Designation', type: 'string' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
  ],
  preview: { select: { title: 'name', subtitle: 'designation', media: 'photo' } },
})

export const client = defineType({
  name: 'client',
  title: 'Clients',
  type: 'document',
  icon: () => '🏢',
  fields: [
    defineField({ name: 'name', title: 'Client Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'website', title: 'Website URL', type: 'url' }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),
    defineField({ name: 'featured', title: 'Show on Homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: { select: { title: 'name', media: 'logo' } },
})

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  icon: () => '💬',
  fields: [
    defineField({ name: 'clientName', title: 'Client Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'designation', title: 'Designation', type: 'string' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'testimonial', title: 'Testimonial', type: 'text', rows: 5, validation: (Rule) => Rule.required() }),
    defineField({ name: 'rating', title: 'Rating (1-5)', type: 'number', validation: (Rule) => Rule.min(1).max(5) }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: { select: { title: 'clientName', subtitle: 'company', media: 'photo' } },
})

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  icon: () => '👥',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'designation', title: 'Designation', type: 'string' }),
    defineField({ name: 'department', title: 'Department', type: 'string' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 3 }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'featured', title: 'Show on About Page', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'designation', media: 'photo' } },
})

export const technology = defineType({
  name: 'technology',
  title: 'Technologies',
  type: 'document',
  icon: () => '⚡',
  fields: [
    defineField({ name: 'name', title: 'Technology Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Frontend', 'Backend', 'Mobile', 'Cloud', 'AI/ML', 'Database', 'DevOps', 'CMS', 'E-commerce'] }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', title: 'Short Description', type: 'string' }),
    defineField({ name: 'website', title: 'Official Website', type: 'url' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'category', media: 'logo' } },
})

export const statistic = defineType({
  name: 'statistic',
  title: 'Statistics',
  type: 'document',
  icon: () => '📊',
  fields: [
    defineField({ name: 'value', title: 'Value (e.g. 100+)', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Short Description', type: 'string' }),
    defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: { select: { title: 'value', subtitle: 'label' } },
})

export const processStep = defineType({
  name: 'processStep',
  title: 'Process Steps',
  type: 'document',
  icon: () => '🔄',
  fields: [
    defineField({ name: 'step', title: 'Step Number', type: 'number', validation: (Rule) => Rule.required() }),
    defineField({ name: 'title', title: 'Step Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
    defineField({ name: 'duration', title: 'Duration (e.g. 1-2 weeks)', type: 'string' }),
    defineField({ name: 'deliverables', title: 'Deliverables', type: 'array', of: [{ type: 'string' }] }),
  ],
  orderings: [{ title: 'Step Order', name: 'stepAsc', by: [{ field: 'step', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'step' }, prepare({ title, subtitle }) { return { title: `Step ${subtitle}: ${title}` } } },
})

export const companyValue = defineType({
  name: 'companyValue',
  title: 'Company Values',
  type: 'document',
  icon: () => '💎',
  fields: [
    defineField({ name: 'title', title: 'Value Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: { select: { title: 'title', icon: 'icon' }, prepare({ title, icon }) { return { title: `${icon || '💎'} ${title}` } } },
})

export const officeLocation = defineType({
  name: 'officeLocation',
  title: 'Office Locations',
  type: 'document',
  icon: () => '📍',
  fields: [
    defineField({ name: 'city', title: 'City', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'country', title: 'Country', type: 'string' }),
    defineField({ name: 'address', title: 'Full Address', type: 'text', rows: 3 }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'mapUrl', title: 'Google Maps Embed URL', type: 'url' }),
    defineField({ name: 'isHeadquarters', title: 'Is Headquarters', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: { select: { title: 'city', subtitle: 'country' }, prepare({ title, subtitle }) { return { title: `📍 ${title}`, subtitle } } },
})

export const contactSubmission = defineType({
  name: 'contactSubmission',
  title: 'Contact Submissions',
  type: 'document',
  icon: () => '📩',
  readOnly: true,
  fields: [
    defineField({ name: 'firstName', title: 'First Name', type: 'string' }),
    defineField({ name: 'lastName', title: 'Last Name', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'service', title: 'Service Interested In', type: 'string' }),
    defineField({ name: 'budget', title: 'Budget Range', type: 'string' }),
    defineField({ name: 'message', title: 'Message', type: 'text', rows: 5 }),
    defineField({ name: 'submittedAt', title: 'Submitted At', type: 'datetime' }),
    defineField({ name: 'formType', title: 'Form Type', type: 'string', options: { list: ['contact', 'consultation'] } }),
    defineField({ name: 'status', title: 'Status', type: 'string', options: { list: ['new', 'in-review', 'responded', 'closed'] }, initialValue: 'new' }),
    defineField({ name: 'projectDetails', title: 'Project Details', type: 'text', rows: 5 }),
    defineField({ name: 'preferredContact', title: 'Preferred Contact Method', type: 'string' }),
  ],
  preview: { select: { title: 'email', subtitle: 'submittedAt', company: 'company' }, prepare({ title, subtitle, company }) { return { title: company ? `${company} - ${title}` : title, subtitle: subtitle ? new Date(subtitle).toLocaleString() : '' } } },
})
