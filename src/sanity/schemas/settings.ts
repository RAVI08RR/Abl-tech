import { defineField, defineType } from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: () => '🧭',
  fields: [
    defineField({ name: 'title', title: 'Navigation Label', type: 'string', initialValue: 'Main Navigation' }),
    defineField({
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [{
        type: 'object',
        name: 'navItem',
        title: 'Nav Item',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'href', title: 'URL', type: 'string' },
          { name: 'openInNewTab', title: 'Open in new tab', type: 'boolean', initialValue: false },
          { name: 'megaMenu', title: 'Has Mega Menu?', type: 'boolean', initialValue: false },
          {
            name: 'children', title: 'Dropdown Items', type: 'array',
            of: [{
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'href', title: 'URL', type: 'string' },
                { name: 'description', title: 'Short Description', type: 'string' },
                { name: 'icon', title: 'Icon (emoji)', type: 'string' },
              ],
              preview: { select: { title: 'label', subtitle: 'href' } },
            }],
          },
        ],
        preview: { select: { title: 'label', subtitle: 'href' } },
      }],
    }),
    defineField({
      name: 'cta', title: 'CTA Button', type: 'object',
      fields: [
        { name: 'label', title: 'Button Label', type: 'string', initialValue: "Let's Talk" },
        { name: 'href', title: 'URL', type: 'string', initialValue: '/contact' },
      ],
    }),
  ],
  preview: { select: { title: 'title' } },
})

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: () => '🦶',
  fields: [
    defineField({ name: 'title', title: 'Footer Title', type: 'string', initialValue: 'Footer' }),
    defineField({
      name: 'columns', title: 'Footer Columns', type: 'array',
      of: [{
        type: 'object', name: 'footerColumn',
        fields: [
          { name: 'heading', title: 'Column Heading', type: 'string' },
          {
            name: 'links', title: 'Links', type: 'array',
            of: [{
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'href', title: 'URL', type: 'string' },
                { name: 'openInNewTab', title: 'New Tab', type: 'boolean' },
              ],
              preview: { select: { title: 'label', subtitle: 'href' } },
            }],
          },
        ],
        preview: { select: { title: 'heading' } },
      }],
    }),
    defineField({ name: 'tagline', title: 'Footer Tagline', type: 'string' }),
    defineField({ name: 'copyright', title: 'Copyright Text', type: 'string' }),
    defineField({
      name: 'bottomLinks', title: 'Bottom Links (Legal)', type: 'array',
      of: [{
        type: 'object',
        fields: [{ name: 'label', title: 'Label', type: 'string' }, { name: 'href', title: 'URL', type: 'string' }],
        preview: { select: { title: 'label' } },
      }],
    }),
  ],
  preview: { select: { title: 'title' } },
})

export const homePage = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  icon: () => '🏠',
  fields: [
    defineField({ name: 'title', title: 'Document Title', type: 'string', initialValue: 'Homepage' }),
    defineField({
      name: 'hero', title: 'Hero Section', type: 'object',
      fields: [
        { name: 'enabled', title: 'Enabled', type: 'boolean', initialValue: true },
        { name: 'headline', title: 'Headline', type: 'string', initialValue: 'Build Digital Products That Move Your Business Forward.' },
        { name: 'subheadline', title: 'Supporting Text', type: 'text', rows: 3 },
        {
          name: 'buttons', title: 'CTA Buttons', type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'label', title: 'Label', type: 'string' },
              { name: 'href', title: 'URL', type: 'string' },
              { name: 'variant', title: 'Variant', type: 'string', options: { list: ['primary', 'secondary', 'outline'] } },
            ],
            preview: { select: { title: 'label' } },
          }],
        },
      ],
    }),
    defineField({ name: 'clients', title: 'Client Logos Section', type: 'object', fields: [{ name: 'enabled', type: 'boolean', initialValue: true }, { name: 'heading', type: 'string' }] }),
    defineField({ name: 'services', title: 'Services Section', type: 'object', fields: [{ name: 'enabled', type: 'boolean', initialValue: true }, { name: 'heading', type: 'string' }, { name: 'description', type: 'text', rows: 2 }] }),
    defineField({ name: 'featuredWork', title: 'Featured Work Section', type: 'object', fields: [{ name: 'enabled', type: 'boolean', initialValue: true }, { name: 'heading', type: 'string' }, { name: 'description', type: 'text', rows: 2 }] }),
    defineField({ name: 'stats', title: 'Statistics Section', type: 'object', fields: [{ name: 'enabled', type: 'boolean', initialValue: true }, { name: 'heading', type: 'string' }] }),
    defineField({ name: 'industries', title: 'Industries Section', type: 'object', fields: [{ name: 'enabled', type: 'boolean', initialValue: true }, { name: 'heading', type: 'string' }, { name: 'description', type: 'text', rows: 2 }] }),
    defineField({ name: 'technologyStack', title: 'Tech Stack Section', type: 'object', fields: [{ name: 'enabled', type: 'boolean', initialValue: true }, { name: 'heading', type: 'string' }, { name: 'description', type: 'text', rows: 2 }] }),
    defineField({ name: 'process', title: 'Process Section', type: 'object', fields: [{ name: 'enabled', type: 'boolean', initialValue: true }, { name: 'heading', type: 'string' }, { name: 'description', type: 'text', rows: 2 }] }),
    defineField({ name: 'whyUs', title: 'Why Us Section', type: 'object', fields: [{ name: 'enabled', type: 'boolean', initialValue: true }, { name: 'heading', type: 'string' }, { name: 'description', type: 'text', rows: 2 }] }),
    defineField({ name: 'testimonials', title: 'Testimonials Section', type: 'object', fields: [{ name: 'enabled', type: 'boolean', initialValue: true }, { name: 'heading', type: 'string' }] }),
    defineField({ name: 'insights', title: 'Insights Section', type: 'object', fields: [{ name: 'enabled', type: 'boolean', initialValue: true }, { name: 'heading', type: 'string' }, { name: 'description', type: 'text', rows: 2 }] }),
    defineField({
      name: 'cta', title: 'Final CTA Section', type: 'object',
      fields: [
        { name: 'enabled', type: 'boolean', initialValue: true },
        { name: 'heading', type: 'string' },
        { name: 'description', type: 'text', rows: 3 },
        {
          name: 'buttons', type: 'array',
          of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'string' }, { name: 'variant', type: 'string', options: { list: ['primary', 'secondary', 'outline'] } }], preview: { select: { title: 'label' } } }],
        },
      ],
    }),
  ],
  preview: { select: { title: 'title' }, prepare({ title }) { return { title: title || 'Homepage Settings' } } },
})
