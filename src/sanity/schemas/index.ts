import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import {
  navigation, footer, homePage, aboutPage, contactPage,
  servicesPage, industriesPage, workPage, insightsPage,
} from './settings'
import { service, industry, caseStudy } from './content'
import {
  post, category, author, client, testimonial, teamMember,
  technology, statistic, processStep, companyValue, officeLocation, contactSubmission,
} from './people'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    navigation,
    footer,
    homePage,
    aboutPage,
    contactPage,
    servicesPage,
    industriesPage,
    workPage,
    insightsPage,
    service,
    industry,
    caseStudy,
    post,
    category,
    author,
    client,
    testimonial,
    teamMember,
    technology,
    statistic,
    processStep,
    companyValue,
    officeLocation,
    contactSubmission,
  ],
}

