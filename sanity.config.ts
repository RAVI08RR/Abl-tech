import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'ab-businesstech-studio',
  title: 'AB BusinessTech LLP',
  projectId,
  dataset,
  document: {
    comments: {
      enabled: false,
    },
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('AB BusinessTech CMS')
          .items([
            S.listItem().title('🏠 Homepage').child(
              S.document().schemaType('homePage').documentId('homePage')
            ),
            S.divider(),
            S.listItem().title('🧭 Navigation').child(
              S.document().schemaType('navigation').documentId('navigation')
            ),
            S.listItem().title('🦶 Footer').child(
              S.document().schemaType('footer').documentId('footer')
            ),
            S.listItem().title('⚙️ Site Settings').child(
              S.document().schemaType('siteSettings').documentId('siteSettings')
            ),
            S.divider(),
            S.listItem().title('🛠️ Services').child(
              S.documentTypeList('service').title('Services')
            ),
            S.listItem().title('🏭 Industries').child(
              S.documentTypeList('industry').title('Industries')
            ),
            S.listItem().title('📁 Case Studies').child(
              S.documentTypeList('caseStudy').title('Case Studies')
            ),
            S.divider(),
            S.listItem().title('📝 Blog Posts').child(
              S.documentTypeList('post').title('Blog Posts')
            ),
            S.listItem().title('🏷️ Categories').child(
              S.documentTypeList('category').title('Blog Categories')
            ),
            S.listItem().title('👤 Authors').child(
              S.documentTypeList('author').title('Authors')
            ),
            S.divider(),
            S.listItem().title('🏢 Clients').child(
              S.documentTypeList('client').title('Clients')
            ),
            S.listItem().title('💬 Testimonials').child(
              S.documentTypeList('testimonial').title('Testimonials')
            ),
            S.listItem().title('👥 Team Members').child(
              S.documentTypeList('teamMember').title('Team Members')
            ),
            S.divider(),
            S.listItem().title('⚡ Technologies').child(
              S.documentTypeList('technology').title('Technologies')
            ),
            S.listItem().title('📊 Statistics').child(
              S.documentTypeList('statistic').title('Statistics')
            ),
            S.listItem().title('🔄 Process Steps').child(
              S.documentTypeList('processStep').title('Process Steps')
            ),
            S.listItem().title('💎 Company Values').child(
              S.documentTypeList('companyValue').title('Company Values')
            ),
            S.listItem().title('📍 Office Locations').child(
              S.documentTypeList('officeLocation').title('Office Locations')
            ),
            S.divider(),
            S.listItem().title('📩 Contact Submissions').child(
              S.documentTypeList('contactSubmission').title('Contact Submissions')
            ),
          ]),
    }),
    visionTool(),
  ],
  schema,
})
