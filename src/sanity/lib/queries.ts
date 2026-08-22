import { client } from "./client";

const fetchOptions = { next: { revalidate: 0 } };

// =============================================
// SITE SETTINGS
// =============================================
export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0]{
      siteName, tagline, contactEmail, phone, address,
      socialLinks, defaultSeo, googleAnalyticsId,
      logo{ asset->{ url } },
      favicon{ asset->{ url } }
    }`,
    {},
    fetchOptions
  );
}

// =============================================
// NAVIGATION
// =============================================
export async function getNavigation() {
  return client.fetch(
    `*[_type == "navigation"][0]{
      items[]{ label, href, megaMenu, openInNewTab, children[]{ label, href, description, icon } },
      cta{ label, href }
    }`,
    {},
    fetchOptions
  );
}

// =============================================
// FOOTER
// =============================================
export async function getFooter() {
  return client.fetch(
    `*[_type == "footer"][0]{
      columns[]{ heading, links[]{ label, href, openInNewTab } },
      tagline, copyright,
      bottomLinks[]{ label, href }
    }`,
    {},
    fetchOptions
  );
}

// =============================================
// PAGE SETTINGS
// =============================================
export async function getHomePage() {
  return client.fetch(
    `*[_type == "homePage"][0]`,
    {},
    fetchOptions
  );
}

export async function getAboutPage() {
  return client.fetch(
    `*[_type == "aboutPage"][0]`,
    {},
    fetchOptions
  );
}

export async function getContactPage() {
  return client.fetch(
    `*[_type == "contactPage"][0]`,
    {},
    fetchOptions
  );
}

export async function getServicesPage() {
  return client.fetch(
    `*[_type == "servicesPage"][0]`,
    {},
    fetchOptions
  );
}

export async function getIndustriesPage() {
  return client.fetch(
    `*[_type == "industriesPage"][0]`,
    {},
    fetchOptions
  );
}

export async function getWorkPage() {
  return client.fetch(
    `*[_type == "workPage"][0]`,
    {},
    fetchOptions
  );
}

export async function getInsightsPage() {
  return client.fetch(
    `*[_type == "insightsPage"][0]`,
    {},
    fetchOptions
  );
}

// =============================================

// SERVICES
// =============================================
export async function getServices() {
  return client.fetch(
    `*[_type == "service"] | order(order asc){
      _id, title, slug, shortDescription, icon, featured, order
    }`,
    {},
    fetchOptions
  );
}

export async function getFeaturedServices() {
  return client.fetch(
    `*[_type == "service" && featured == true] | order(order asc){
      _id, title, slug, shortDescription, icon, order
    }`,
    {},
    fetchOptions
  );
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0]{
      _id, title, slug, shortDescription, icon,
      heroTitle, heroDescription, heroImage{ asset->{ url, metadata } },
      features[]{ title, description, icon },
      benefits, process[]{ step, title, description },
      faqs[]{ question, answer },
      technologies[]->{ _id, name, category, logo{ asset->{ url } } },
      caseStudies[]->{ _id, title, slug, shortDescription, heroImage{ asset->{ url } }, client },
      seo
    }`,
    { slug },
    fetchOptions
  );
}

// =============================================
// INDUSTRIES
// =============================================
export async function getIndustries() {
  return client.fetch(
    `*[_type == "industry"] | order(order asc){
      _id, name, slug, description, icon, featured, order,
      heroImage{ asset->{ url } }
    }`,
    {},
    fetchOptions
  );
}

export async function getFeaturedIndustries() {
  return client.fetch(
    `*[_type == "industry" && featured == true] | order(order asc){
      _id, name, slug, description, icon, order,
      heroImage{ asset->{ url } }
    }`,
    {},
    fetchOptions
  );
}

export async function getIndustryBySlug(slug: string) {
  return client.fetch(
    `*[_type == "industry" && slug.current == $slug][0]{
      _id, name, slug, description, icon,
      heroImage{ asset->{ url, metadata } },
      challenges[]{ title, description },
      solutions[]{ title, description },
      services[]->{ _id, title, slug, shortDescription, icon },
      technologies[]->{ _id, name, category, logo{ asset->{ url } } },
      caseStudies[]->{ _id, title, slug, shortDescription, heroImage{ asset->{ url } }, client },
      faqs[]{ question, answer },
      seo
    }`,
    { slug },
    fetchOptions
  );
}

// =============================================
// CASE STUDIES
// =============================================
export async function getCaseStudies() {
  return client.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc){
      _id, title, slug, client, shortDescription, featured, publishedAt,
      heroImage{ asset->{ url } },
      industry->{ name, slug },
      service->{ title, slug }
    }`,
    {},
    fetchOptions
  );
}

export async function getFeaturedCaseStudies() {
  return client.fetch(
    `*[_type == "caseStudy" && featured == true] | order(publishedAt desc)[0...6]{
      _id, title, slug, client, shortDescription, publishedAt,
      heroImage{ asset->{ url } },
      industry->{ name, slug },
      service->{ title, slug },
      metrics[]{ value, metric, description }
    }`,
    {},
    fetchOptions
  );
}

export async function getCaseStudyBySlug(slug: string) {
  return client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0]{
      _id, title, slug, client, shortDescription, publishedAt,
      heroImage{ asset->{ url, metadata } },
      gallery[]{ asset->{ url } },
      challenge, solution, approach,
      technologyStack[]->{ _id, name, category, logo{ asset->{ url } } },
      metrics[]{ value, metric, description },
      testimonial->{ clientName, designation, company, testimonial, photo{ asset->{ url } } },
      industry->{ _id, name, slug },
      service->{ _id, title, slug },
      seo
    }`,
    { slug },
    fetchOptions
  );
}

// =============================================
// BLOG / INSIGHTS
// =============================================
export async function getPosts(limit = 10) {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...$limit]{
      _id, title, slug, excerpt, publishedAt, readingTime, featured,
      featuredImage{ asset->{ url } },
      author->{ name, photo{ asset->{ url } } },
      category->{ title, slug }
    }`,
    { limit },
    fetchOptions
  );
}

export async function getFeaturedPosts() {
  return client.fetch(
    `*[_type == "post" && featured == true] | order(publishedAt desc)[0...3]{
      _id, title, slug, excerpt, publishedAt, readingTime,
      featuredImage{ asset->{ url } },
      author->{ name, photo{ asset->{ url } } },
      category->{ title, slug }
    }`,
    {},
    fetchOptions
  );
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id, title, slug, excerpt, publishedAt, updatedAt, readingTime, tags,
      featuredImage{ asset->{ url, metadata } },
      author->{ name, bio, designation, photo{ asset->{ url } }, linkedin, twitter },
      category->{ title, slug },
      content,
      seo
    }`,
    { slug },
    fetchOptions
  );
}

export async function getPostsByCategory(categorySlug: string) {
  return client.fetch(
    `*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc){
      _id, title, slug, excerpt, publishedAt, readingTime,
      featuredImage{ asset->{ url } },
      author->{ name, photo{ asset->{ url } } },
      category->{ title, slug }
    }`,
    { categorySlug },
    fetchOptions
  );
}

export async function getCategories() {
  return client.fetch(
    `*[_type == "category"] | order(title asc){ _id, title, slug, description, color }`,
    {},
    fetchOptions
  );
}

// =============================================
// CLIENTS
// =============================================
export async function getClients() {
  return client.fetch(
    `*[_type == "client"] | order(order asc){
      _id, name, industry, featured, order,
      logo{ asset->{ url } }
    }`,
    {},
    fetchOptions
  );
}

export async function getFeaturedClients() {
  return client.fetch(
    `*[_type == "client" && featured == true] | order(order asc){
      _id, name, industry, order,
      logo{ asset->{ url } }
    }`,
    {},
    fetchOptions
  );
}

// =============================================
// TESTIMONIALS
// =============================================
export async function getTestimonials() {
  return client.fetch(
    `*[_type == "testimonial"] | order(order asc){
      _id, clientName, designation, company, testimonial, rating, featured, order,
      photo{ asset->{ url } }
    }`,
    {},
    fetchOptions
  );
}

export async function getFeaturedTestimonials() {
  return client.fetch(
    `*[_type == "testimonial" && featured == true] | order(order asc){
      _id, clientName, designation, company, testimonial, rating, order,
      photo{ asset->{ url } }
    }`,
    {},
    fetchOptions
  );
}

// =============================================
// TEAM MEMBERS
// =============================================
export async function getTeamMembers() {
  return client.fetch(
    `*[_type == "teamMember"] | order(order asc){
      _id, name, designation, department, bio, linkedin, twitter, featured, order,
      photo{ asset->{ url } }
    }`,
    {},
    fetchOptions
  );
}

export async function getFeaturedTeamMembers() {
  return client.fetch(
    `*[_type == "teamMember" && featured == true] | order(order asc){
      _id, name, designation, department, linkedin, twitter, order,
      photo{ asset->{ url } }
    }`,
    {},
    fetchOptions
  );
}

// =============================================
// TECHNOLOGIES
// =============================================
export async function getTechnologies() {
  return client.fetch(
    `*[_type == "technology"] | order(order asc){
      _id, name, category, description, website, featured, order,
      logo{ asset->{ url } }
    }`,
    {},
    fetchOptions
  );
}

// =============================================
// STATISTICS
// =============================================
export async function getStatistics() {
  return client.fetch(
    `*[_type == "statistic"] | order(order asc){ _id, value, label, description, icon, order }`,
    {},
    fetchOptions
  );
}

// =============================================
// PROCESS STEPS
// =============================================
export async function getProcessSteps() {
  return client.fetch(
    `*[_type == "processStep"] | order(step asc){ _id, step, title, description, icon, duration, deliverables }`,
    {},
    fetchOptions
  );
}

// =============================================
// COMPANY VALUES
// =============================================
export async function getCompanyValues() {
  return client.fetch(
    `*[_type == "companyValue"] | order(order asc){ _id, title, description, icon, order }`,
    {},
    fetchOptions
  );
}

// =============================================
// OFFICE LOCATIONS
// =============================================
export async function getOfficeLocations() {
  return client.fetch(
    `*[_type == "officeLocation"] | order(order asc){ _id, city, country, address, phone, email, mapUrl, isHeadquarters, order }`,
    {},
    fetchOptions
  );
}

// =============================================
// SEARCH
// =============================================
export async function searchContent(query: string) {
  const searchQuery = `*_`;
  return client.fetch(
    `{
      "services": *[_type == "service" && (title match $q || shortDescription match $q)][0...5]{ _id, title, slug, shortDescription, icon },
      "caseStudies": *[_type == "caseStudy" && (title match $q || shortDescription match $q)][0...5]{ _id, title, slug, shortDescription, heroImage{ asset->{ url } } },
      "industries": *[_type == "industry" && (name match $q || description match $q)][0...5]{ _id, name, slug, description, icon },
      "posts": *[_type == "post" && (title match $q || excerpt match $q)][0...5]{ _id, title, slug, excerpt, featuredImage{ asset->{ url } } }
    }`,
    { q: `${query}*` },
    { next: { revalidate: 0 } }
  );
}

// =============================================
// SLUGS FOR STATIC GENERATION
// =============================================
export async function getAllServiceSlugs() {
  return client.fetch(`*[_type == "service"]{ "slug": slug.current }`);
}

export async function getAllIndustrySlugs() {
  return client.fetch(`*[_type == "industry"]{ "slug": slug.current }`);
}

export async function getAllCaseStudySlugs() {
  return client.fetch(`*[_type == "caseStudy"]{ "slug": slug.current }`);
}

export async function getAllPostSlugs() {
  return client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
}

export async function getAllCategorySlugs() {
  return client.fetch(`*[_type == "category"]{ "slug": slug.current }`);
}
