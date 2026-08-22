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

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: () => 'ℹ️',
  fields: [
    defineField({ name: 'title', title: 'Document Title', type: 'string', initialValue: 'About Page Settings' }),
    defineField({ name: 'eyebrow', title: 'Hero Eyebrow Text', type: 'string', initialValue: 'About AB BusinessTech LLP' }),
    defineField({ name: 'headline', title: 'Hero Headline', type: 'string', initialValue: 'We Build Technology That Moves Business' }),
    defineField({ name: 'subheadline', title: 'Hero Subheadline', type: 'text', rows: 3 }),
    defineField({
      name: 'buttons', title: 'Hero Buttons', type: 'array',
      of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'string' }, { name: 'variant', type: 'string' }], preview: { select: { title: 'label' } } }],
    }),
    defineField({ name: 'missionEyebrow', title: 'Mission Section Eyebrow', type: 'string', initialValue: 'Our Mission' }),
    defineField({ name: 'missionTitle', title: 'Mission Section Title', type: 'string', initialValue: 'Making World-Class Technology Accessible to Ambitious Businesses' }),
    defineField({ name: 'missionParagraphs', title: 'Mission Story Paragraphs', type: 'array', of: [{ type: 'text', rows: 3 }] }),
    defineField({ name: 'teamEyebrow', title: 'Team Section Eyebrow', type: 'string', initialValue: 'Our Team' }),
    defineField({ name: 'teamTitle', title: 'Team Section Title', type: 'string', initialValue: 'The People Behind the Product' }),
    defineField({ name: 'officesEyebrow', title: 'Offices Section Eyebrow', type: 'string', initialValue: 'Where We Are' }),
    defineField({ name: 'officesTitle', title: 'Offices Section Title', type: 'string', initialValue: 'Our Offices' }),
    defineField({
      name: 'cta', title: 'CTA Section', type: 'object',
      fields: [
        { name: 'heading', type: 'string', initialValue: 'Join the AB BusinessTech Team' },
        { name: 'description', type: 'text', rows: 2 },
        { name: 'buttons', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'string' }, { name: 'variant', type: 'string' }] }] },
      ],
    }),
  ],
})

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: () => '📞',
  fields: [
    defineField({ name: 'title', title: 'Document Title', type: 'string', initialValue: 'Contact Page Settings' }),
    defineField({ name: 'eyebrow', title: 'Hero Eyebrow Text', type: 'string', initialValue: 'Contact Us' }),
    defineField({ name: 'headline', title: 'Hero Headline', type: 'string', initialValue: "Let's Build Something Great Together" }),
    defineField({ name: 'subheadline', title: 'Hero Subheadline', type: 'text', rows: 3 }),
    defineField({ name: 'formHeading', title: 'Form Heading', type: 'string', initialValue: 'Send Us a Message' }),
    defineField({ name: 'infoHeading', title: 'Info Section Heading', type: 'string', initialValue: 'Contact Information' }),
    defineField({ name: 'expectHeading', title: 'What to Expect Heading', type: 'string', initialValue: 'What to Expect' }),
    defineField({
      name: 'expectations', title: 'Expectation Items', type: 'array',
      of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'description', type: 'text', rows: 2 }], preview: { select: { title: 'title' } } }],
    }),
    defineField({
      name: 'consultationCard', title: 'Consultation Banner Card', type: 'object',
      fields: [
        { name: 'title', type: 'string', initialValue: 'Need something faster?' },
        { name: 'description', type: 'string', initialValue: 'For urgent inquiries, call us directly or book a consultation.' },
        { name: 'buttonLabel', type: 'string', initialValue: 'Book a Free Consultation →' },
        { name: 'buttonHref', type: 'string', initialValue: '/contact/book-consultation' },
      ],
    }),
  ],
})

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  icon: () => '💼',
  fields: [
    defineField({ name: 'title', title: 'Document Title', type: 'string', initialValue: 'Services Page Settings' }),
    defineField({ name: 'eyebrow', title: 'Hero Eyebrow Text', type: 'string', initialValue: 'What We Do' }),
    defineField({ name: 'headline', title: 'Hero Headline', type: 'string', initialValue: 'Technology Services That Drive Real Results' }),
    defineField({ name: 'subheadline', title: 'Hero Subheadline', type: 'text', rows: 3 }),
    defineField({
      name: 'cta', title: 'Bottom CTA Section', type: 'object',
      fields: [
        { name: 'heading', type: 'string', initialValue: 'Not Sure Which Service You Need?' },
        { name: 'description', type: 'text', rows: 2 },
        { name: 'buttonLabel', type: 'string', initialValue: 'Book a Free Consultation' },
        { name: 'buttonHref', type: 'string', initialValue: '/contact/book-consultation' },
      ],
    }),
  ],
})

export const industriesPage = defineType({
  name: 'industriesPage',
  title: 'Industries Page',
  type: 'document',
  icon: () => '🏭',
  fields: [
    defineField({ name: 'title', title: 'Document Title', type: 'string', initialValue: 'Industries Page Settings' }),
    defineField({ name: 'eyebrow', title: 'Hero Eyebrow Text', type: 'string', initialValue: 'Industries' }),
    defineField({ name: 'headline', title: 'Hero Headline', type: 'string', initialValue: 'Technology Built Around Your Industry' }),
    defineField({ name: 'subheadline', title: 'Hero Subheadline', type: 'text', rows: 3 }),
    defineField({
      name: 'cta', title: 'Bottom CTA Section', type: 'object',
      fields: [
        { name: 'heading', type: 'string', initialValue: "Don't See Your Industry?" },
        { name: 'description', type: 'text', rows: 2 },
        { name: 'buttonLabel', type: 'string', initialValue: 'Talk to Our Team' },
        { name: 'buttonHref', type: 'string', initialValue: '/contact' },
      ],
    }),
  ],
})

export const workPage = defineType({
  name: 'workPage',
  title: 'Work Page',
  type: 'document',
  icon: () => '🚀',
  fields: [
    defineField({ name: 'title', title: 'Document Title', type: 'string', initialValue: 'Work Page Settings' }),
    defineField({ name: 'eyebrow', title: 'Hero Eyebrow Text', type: 'string', initialValue: 'Our Work' }),
    defineField({ name: 'headline', title: 'Hero Headline', type: 'string', initialValue: 'Real Problems. Measurable Outcomes.' }),
    defineField({ name: 'subheadline', title: 'Hero Subheadline', type: 'text', rows: 3 }),
    defineField({
      name: 'cta', title: 'Bottom CTA Section', type: 'object',
      fields: [
        { name: 'heading', type: 'string', initialValue: 'Ready to Start Your Project?' },
        { name: 'description', type: 'text', rows: 2 },
        { name: 'buttonLabel', type: 'string', initialValue: 'Start a Conversation' },
        { name: 'buttonHref', type: 'string', initialValue: '/contact' },
      ],
    }),
  ],
})

export const insightsPage = defineType({
  name: 'insightsPage',
  title: 'Insights Page',
  type: 'document',
  icon: () => '📰',
  fields: [
    defineField({ name: 'title', title: 'Document Title', type: 'string', initialValue: 'Insights Page Settings' }),
    defineField({ name: 'eyebrow', title: 'Hero Eyebrow Text', type: 'string', initialValue: 'Insights & Thought Leadership' }),
    defineField({ name: 'headline', title: 'Hero Headline', type: 'string', initialValue: 'Perspectives on Technology, Strategy, and Digital Transformation' }),
    defineField({ name: 'subheadline', title: 'Hero Subheadline', type: 'text', rows: 3 }),
    defineField({
      name: 'cta', title: 'Bottom CTA Section', type: 'object',
      fields: [
        { name: 'heading', type: 'string', initialValue: 'Stay Ahead of the Curve' },
        { name: 'description', type: 'text', rows: 2 },
        { name: 'buttonLabel', type: 'string', initialValue: 'Subscribe to Newsletter' },
        { name: 'buttonHref', type: 'string', initialValue: '/contact' },
      ],
    }),
  ],
})

