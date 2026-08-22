import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getServiceBySlug, getAllServiceSlugs } from '@/sanity/lib/queries'
import type { Service } from '@/types'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllServiceSlugs()
    return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const service = await getServiceBySlug(slug)
    if (!service) return { title: 'Service Not Found' }
    return {
      title: service.seo?.metaTitle || service.title,
      description: service.seo?.metaDescription || service.shortDescription,
    }
  } catch {
    return { title: 'Service' }
  }
}

const serviceDefaults: Record<string, Partial<Service>> = {
  'ai-data-engineering': {
    title: 'AI & Data Engineering',
    icon: '🤖',
    shortDescription: 'Turn AI hype into hard enterprise ROI. We engineer production-ready AI agents, automate data pipelines, and deploy custom ML models that solve real operational bottlenecks—securely and at scale.',
    heroTitle: 'Turn AI Hype into Hard Enterprise ROI.',
    heroDescription: 'Stop getting stuck in the pilot phase. We engineer production-ready AI agents, automate data pipelines, and deploy custom machine learning models that solve real operational bottlenecks—securely and at scale.',
    features: [
      { title: 'Custom AI Software Development', description: 'We architect end-to-end custom AI applications tailored strictly to your legacy infrastructure, handling everything from data engineering to front-end integration.', icon: '🧠' },
      { title: 'Autonomous AI Agents', description: 'We engineer autonomous agentic systems with memory, tool-use capabilities, and safety guardrails that reason, plan, and execute operational tasks across your CRM and ERP automatically.', icon: '🤖' },
      { title: 'AI Automation Solutions', description: 'We replace manual bottlenecks with intelligent, high-speed data processing pipelines combining Robotic Process Automation (RPA) with AI decisioning.', icon: '⚡' },
      { title: 'Generative AI Development', description: 'We build secure, internal GenAI tools using private, fine-tuned models—summarizing documents, generating code, and automating enterprise content creation at scale.', icon: '✨' },
      { title: 'LLM Integration Services', description: 'We safely connect foundation models (GPT-4o, Claude 3.5, Llama) to your proprietary databases using secure RAG and advanced vector databases—zero data leakage risk.', icon: '🔗' },
      { title: 'Machine Learning & MLOps', description: 'We develop predictive analytics pipelines and continuous MLOps infrastructure that forecast trends and flag anomalies in real time.', icon: '📈' },
      { title: 'Computer Vision', description: 'We deploy visual intelligence systems capable of object detection, facial recognition, and real-time spatial mapping—on the edge or in the cloud.', icon: '👁️' },
      { title: 'NLP & Voice AI', description: 'We build text-analysis engines and voice recognition systems that extract intent, analyze sentiment, and classify unstructured data at enterprise scale.', icon: '🗣️' },
      { title: 'AI Consulting', description: 'We provide strategic advisory to identify your highest-ROI AI use cases, audit your infrastructure, assess feasibility, and map a pragmatic phased deployment architecture.', icon: '🎯' },
    ],
    benefits: [
      'Access top 1% AI engineers within 2 weeks, bypassing the 6-month hiring cycle',
      'Proprietary data never trains public models — complete data sovereignty',
      'Cut time-to-market by up to 40% with pre-built solution accelerators',
      'Reduce human intervention in routine tasks by up to 70% with AI agents',
      'Secure PoC delivered within 4–6 weeks, production in 3–6 months',
    ],
    process: [
      { step: 1, title: 'Data Readiness & Architecture Audit', description: 'We assess your infrastructure, data quality, and identify your highest-ROI AI use cases before writing a single line of code.' },
      { step: 2, title: 'Private Environment Setup', description: 'We deploy isolated, secure cloud environments ensuring your proprietary data never leaves your control.' },
      { step: 3, title: 'Agile AI Build & Iteration', description: 'We build in 2-week sprints, delivering a functional PoC within 4–6 weeks for validation and stakeholder buy-in.' },
      { step: 4, title: 'Production Deployment & MLOps', description: 'We deploy to production with continuous monitoring, model retraining, and infrastructure support for long-term accuracy.' },
    ],
    faqs: [
      { question: 'How do you ensure our proprietary data doesn\'t leak into public AI models?', answer: 'We operate on a strict zero-retention, private-deployment model. Your data never leaves your environment and is never used to train public foundation models. We use secure RAG and private instances (Azure OpenAI, AWS Bedrock) to ensure total data sovereignty.' },
      { question: 'How long does it take to move an AI project from concept to production?', answer: 'We typically deliver a functional, secure Proof of Concept (PoC) within 4 to 6 weeks. From there, we iterate and scale into production within 3 to 6 months.' },
      { question: 'Do we need an internal team of AI experts to maintain the system?', answer: 'No. We offer flexible engagement models — we can train your existing engineers post-launch, or provide managed teams for continuous MLOps, model tuning, and infrastructure support.' },
      { question: 'What is the difference between your custom AI solutions and off-the-shelf tools?', answer: 'Off-the-shelf tools force your business to adapt to their software. Our custom AI solutions are engineered to adapt to your business, understanding your specific industry jargon, legacy databases, and security frameworks.' },
    ],
  },
  'software-engineering': {
    title: 'Software Engineering',
    icon: '💻',
    shortDescription: 'Build software that scales, not technical debt. We co-engineer robust enterprise software, high-performance SaaS applications, and custom digital products designed to drive hard ROI.',
    heroTitle: 'Build Software That Scales, Not Technical Debt.',
    heroDescription: 'Stop fighting with rigid, off-the-shelf platforms. We co-engineer robust enterprise software, high-performance SaaS applications, and custom digital products designed to solve complex business bottlenecks and drive hard ROI.',
    features: [
      { title: 'Custom Software Development', description: 'We architect bespoke applications from the ground up — from requirements gathering and UI/UX design to backend architecture and deployment.', icon: '⚙️' },
      { title: 'Enterprise Software Development', description: 'We build secure, centralized enterprise solutions including custom ERPs, HRMS, and business process automation platforms that unify fragmented departments.', icon: '🏢' },
      { title: 'SaaS Development', description: 'We engineer high-performance, multi-tenant SaaS platforms with dynamic billing engines, robust user roles, and scalable cloud infrastructure designed for recurring revenue.', icon: '☁️' },
      { title: 'Product Engineering Services', description: 'We cover the full product lifecycle — UX methodologies, A/B testing, and agile sprints to validate ideas quickly and build features users actually want.', icon: '🚀' },
      { title: 'API Development & Integration', description: 'We design and develop secure, high-performance REST and GraphQL APIs that allow your legacy systems and modern cloud applications to communicate in real time.', icon: '🔌' },
      { title: 'Legacy System Modernization', description: 'We execute zero-disruption modernization — untangling monolithic codebases, re-platforming to the cloud, and refactoring into agile microservices.', icon: '🔄' },
    ],
    benefits: [
      'Proprietary digital asset that perfectly matches your workflows',
      'Eliminating licensing bloat and giving you total IP ownership',
      'Cloud-native architecture for zero downtime and multi-tenant scalability',
      'Continuous CI/CD deployment with zero business downtime',
      'Engineering pod onboarded within 2 to 4 weeks',
    ],
    process: [
      { step: 1, title: 'Discovery & Architecture', description: 'We analyze your business logic, map out data architecture, and create high-fidelity UI/UX wireframes before a single line of code is written.' },
      { step: 2, title: 'Agile Sprints', description: 'We build in iterative 2-week delivery cycles with continuous demos for rapid feedback and total transparency.' },
      { step: 3, title: 'QA & Security Testing', description: 'Quality engineering is integrated from day one with automated testing and DevSecOps pipelines ensuring vulnerability-free code.' },
      { step: 4, title: 'CI/CD Deployment', description: 'We utilize continuous integration and continuous deployment to launch your software into the cloud with zero business downtime.' },
    ],
    faqs: [
      { question: 'Who owns the intellectual property (IP) and source code?', answer: 'You do. We work strictly under NDAs. Once the project is completed and compensated, 100% of the IP, source code, and design assets are legally transferred to your organization.' },
      { question: 'How do you mitigate risks of legacy system modernization?', answer: 'We use an incremental, microservices-based approach. We isolate specific components, modernize them, and run them in parallel to ensure zero business disruption during the transition.' },
      { question: 'How quickly can you onboard an engineering team?', answer: 'Because we maintain a deep bench of vetted top-tier talent, we can typically assemble and onboard a dedicated development pod tailored to your tech stack within 2 to 4 weeks.' },
      { question: 'Will my software be built to scale?', answer: 'Absolutely. We take a cloud-native, API-first approach to all software engineering — your application is designed from day one to handle increased traffic and future feature expansions without a total rebuild.' },
    ],
  },
  'digital-experiences-web-mobile': {
    title: 'Digital Experiences (Web & Mobile)',
    icon: '📱',
    shortDescription: 'Stop losing users to clunky interfaces. We design and engineer high-performance web applications, enterprise portals, and custom mobile apps that drive adoption, engagement, and revenue.',
    heroTitle: 'Stop Losing Users to Clunky Interfaces.',
    heroDescription: 'A powerful backend means nothing if your frontend frustrates the user. We design and engineer high-performance web applications, enterprise portals, and custom mobile apps that drive adoption, engagement, and hard revenue.',
    features: [
      { title: 'UI/UX Design', description: 'We execute user-centric design — user testing, wireframing, and interactive prototyping to build intuitive UI/UX architectures that feel natural to the user.', icon: '🎨' },
      { title: 'Web Application Development', description: 'We build lightning-fast Single Page Applications (SPAs) and Progressive Web Apps (PWAs) using modern JavaScript frameworks for a frictionless cross-device experience.', icon: '🌐' },
      { title: 'Mobile App Development', description: 'We build high-performance native apps (iOS/Android) and efficient cross-platform solutions (React Native) equipped with secure APIs and offline capabilities.', icon: '📱' },
      { title: 'Enterprise Portals', description: 'We architect role-based enterprise portals that securely aggregate data from your CRM, ERP, and third-party tools into a single, intuitive dashboard.', icon: '🏢' },
      { title: 'Website Development', description: 'We engineer fast, scalable, and SEO-optimized corporate websites backed by headless CMS architectures — turning your site from a brochure into a lead-generation engine.', icon: '🚀' },
    ],
    benefits: [
      'UX-led engineering — design mapped before a single line of frontend code',
      'Cross-platform velocity using React Native and Flutter',
      'Sub-second load times engineered for heavy-traffic performance',
      'Simultaneous iOS & Android launch cutting projected dev budget by 30%',
      'Ongoing support contracts for OS updates and continuous UX optimization',
    ],
    process: [
      { step: 1, title: 'Research & Empathy', description: 'We analyze your target audience, define user personas, and map required features to solve their specific pain points.' },
      { step: 2, title: 'Wireframing & Prototyping', description: 'We create interactive prototypes allowing you to click through the application and validate the user flow before development begins.' },
      { step: 3, title: 'Frontend & Backend Build', description: 'Our engineers work in parallel, integrating the UI with secure, scalable cloud infrastructure and APIs.' },
      { step: 4, title: 'User Testing & Launch', description: 'We conduct rigorous QA, device-compatibility testing, and load testing to ensure a flawless launch.' },
    ],
    faqs: [
      { question: 'Should we build a Native or Cross-Platform app?', answer: 'If your app requires heavy use of native device hardware (complex AR, extreme graphics), Native is best. If you need to hit the market quickly on both Apple and Android, React Native is usually the smartest business decision.' },
      { question: 'Do you provide ongoing support after launch?', answer: 'Yes. We offer long-term support contracts to handle OS updates, security patches, feature expansions, and continuous UX optimization based on live user data.' },
      { question: 'How do you ensure the web application is secure?', answer: 'Security is engineered into the architecture from day one — strict data encryption, secure API gateways, and role-based access controls (RBAC) to ensure your enterprise data is never exposed.' },
    ],
  },
  'enterprise-applications': {
    title: 'Enterprise Applications',
    icon: '🏢',
    shortDescription: 'Architected for scale. Engineered for your enterprise. We design and build custom ERPs, CRMs, and enterprise apps that adapt to your exact business operations.',
    heroTitle: 'Architected for Scale. Engineered for Your Enterprise.',
    heroDescription: 'The difference between an expensive, unstable system and a swift, reliable platform is how well the foundation is architected. We design and build custom enterprise applications, CRMs, and ERPs that adapt to your exact business operations—not the other way around.',
    features: [
      { title: 'CRM Development Services', description: 'We architect custom CRM solutions designed specifically for your sales funnels — automating lead scoring, pipeline tracking, and customer communication.', icon: '🤝' },
      { title: 'ERP Development Services', description: 'We engineer bespoke ERP systems that centralize your finance, supply chain, procurement, and manufacturing data into a single, high-speed, modular platform.', icon: '🏭' },
      { title: 'HRMS Development', description: 'We develop secure, role-based HRMS portals automating leave management, benefits administration, and performance reviews wrapped in enterprise-grade data privacy.', icon: '👥' },
      { title: 'Core Business Applications', description: 'We build custom desktop and web applications tailored exclusively to your proprietary operational logic for niche tasks no commercial software handles.', icon: '⚙️' },
      { title: 'Workflow & Automation Systems', description: 'We architect intelligent workflow systems with custom rule engines — automating task routing, triggering notifications, and enforcing strict approval hierarchies digitally.', icon: '🔄' },
    ],
    benefits: [
      '99.9% inventory accuracy eliminating data silos between departments',
      'Saved $2M+ in annual licensing fees by replacing boxed software',
      'Increased CRM sales team adoption by 80%',
      'API-first approach ensuring new apps integrate with legacy databases',
      'Zero ongoing vendor licensing fees — you own the IP outright',
    ],
    process: [
      { step: 1, title: 'System Architecture & Blueprinting', description: 'We audit your existing environment, identify security vulnerabilities, and design a scalable, cloud-ready architecture before any code is written.' },
      { step: 2, title: 'Technology Selection', description: 'We define the exact tech stack needed to achieve low latency and high portability for your specific use case.' },
      { step: 3, title: 'Agile Engineering', description: 'Our dedicated pods build the application in iterative sprints, ensuring you see continuous progress and functioning modules.' },
      { step: 4, title: 'Enterprise Security & Deployment', description: 'We implement strict access controls and deploy via CI/CD pipelines ensuring zero disruption to your daily operations.' },
    ],
    faqs: [
      { question: 'Build vs. Buy: Why build custom enterprise software instead of a SaaS subscription?', answer: 'Buying generic software forces you to change your business to fit the tool, and you are locked into escalating per-user licensing costs. Custom software means you own the IP, pay zero ongoing licensing fees, and the platform is architected for your competitive advantage.' },
      { question: 'How do you ensure the new application communicates with our legacy systems?', answer: 'Integration is an architectural priority. We develop secure APIs and middleware that allow your new custom application to seamlessly push and pull data from your existing legacy mainframes or third-party tools.' },
      { question: 'How do you handle data security in enterprise applications?', answer: 'Security is baked into the architecture. We implement Data Security Gateways, strict Role-Based Access Control (RBAC), and data encryption at rest and in transit, aligning our builds with global compliance standards like SOC2 or GDPR.' },
    ],
  },
  'cloud-and-devops': {
    title: 'Cloud & DevOps',
    icon: '☁️',
    shortDescription: 'Ship code faster. Never go down. We architect scalable cloud solutions, execute zero-downtime migrations, and implement elite DevOps pipelines so your engineering teams can ship secure code in minutes, not months.',
    heroTitle: 'Ship Code Faster. Never Go Down.',
    heroDescription: 'Your infrastructure should accelerate your business, not hold it hostage. We architect scalable cloud solutions, execute zero-downtime migrations, and implement elite DevOps pipelines so your engineering teams can ship secure code in minutes, not months.',
    features: [
      { title: 'Cloud Migration Services', description: 'We architect phased, risk-free cloud migrations — assessing readiness, mapping dependencies, and shifting workloads incrementally using parallel environments.', icon: '🚀' },
      { title: 'DevOps Consulting Services', description: 'We audit your delivery inefficiencies and implement automated testing, infrastructure as code (IaC), and continuous monitoring to transform IT from a cost center to a delivery engine.', icon: '🔄' },
      { title: 'CI/CD Pipeline Engineering', description: 'We engineer automated CI/CD pipelines where every code commit is automatically built, security-scanned, and tested before being safely deployed to staging or production.', icon: '⚡' },
      { title: 'AWS Architecture', description: 'Our certified AWS architects optimize your infrastructure — implementing EC2 auto-scaling, secure S3 data lakes, and serverless architectures to maximize performance and slash costs.', icon: '🌩️' },
      { title: 'Microsoft Azure', description: 'We engineer enterprise-grade hybrid and public cloud solutions deploying secure AKS Kubernetes services, Azure DevOps pipelines, and seamless Active Directory integrations.', icon: '🔷' },
      { title: 'DevSecOps & Cloud Security', description: 'We implement DevSecOps — deploying Cloud Security Gateways, automated vulnerability scanning, and strict identity policies directly into the CI/CD pipeline for absolute compliance.', icon: '🔒' },
      { title: 'Cloud Cost Optimization (FinOps)', description: 'We conduct rigorous FinOps audits identifying orphaned resources, right-sizing compute instances, and architecting serverless functions — you only pay for what you use.', icon: '💰' },
    ],
    benefits: [
      'Reduced monthly AWS infrastructure costs by 45%',
      'Eliminated deployment downtime and released updates 10x faster',
      'Zero data loss, zero business disruption on cloud migrations',
      'Absolute compliance with SOC2, HIPAA, and GDPR standards',
      'FinOps governance providing predictable, optimized monthly cloud costs',
    ],
    process: [
      { step: 1, title: 'Cloud Readiness & Security Audit', description: 'We audit your existing codebase, database structures, and security posture to identify the exact cloud architecture you need.' },
      { step: 2, title: 'Blueprinting & Infrastructure as Code', description: 'We design the architecture and write it as code (Terraform/Ansible) so your infrastructure is version-controlled, repeatable, and secure.' },
      { step: 3, title: 'Phased Execution & Containerization', description: 'We migrate or deploy in tightly controlled sprints using Docker and Kubernetes to ensure applications run perfectly in any environment.' },
      { step: 4, title: 'Continuous Monitoring (SRE)', description: 'Post-deployment, we implement advanced telemetry and auto-healing scripts to catch and resolve anomalies before your users ever notice.' },
    ],
    faqs: [
      { question: 'Should we use a single cloud provider or a multi-cloud strategy?', answer: 'A single provider simplifies management and allows deep native feature use. A multi-cloud strategy prevents vendor lock-in and increases resilience but requires more complex architecture. We assess your business goals to determine the best path.' },
      { question: 'How does DevOps actually save us money?', answer: 'DevOps reduces the hidden costs of custom software development. By automating testing and deployments, you drastically reduce manual engineering hours on operations. Catching bugs instantly in the CI/CD pipeline also avoids the massive financial cost of fixing a critical error in production.' },
      { question: 'Can you migrate our legacy monolith without rewriting it?', answer: 'Yes. We can perform a "lift and shift" to get you out of your physical data center quickly. However, to truly gain cost-saving and performance benefits of the cloud, we recommend a phased refactoring process to break the monolith into cloud-native microservices over time.' },
    ],
  },
  'data-analytics-solutions': {
    title: 'Data & Analytics Solutions',
    icon: '📊',
    shortDescription: 'Stop drowning in data. Start driving revenue. We architect high-speed data pipelines, implement powerful BI platforms, and build custom dashboards that turn raw enterprise data into hard ROI.',
    heroTitle: 'Stop Drowning in Data. Start Driving Revenue.',
    heroDescription: 'Having terabytes of data means nothing if you cannot extract immediate, actionable truth from it. We architect high-speed data pipelines, implement powerful business intelligence platforms, and build custom dashboards that turn raw enterprise data into hard ROI.',
    features: [
      { title: 'Data Engineering', description: 'We architect scalable data infrastructure using Big Data technologies (Hadoop, Spark, NoSQL) and build automated ETL pipelines that clean and route data into a centralized, secure data warehouse.', icon: '🔧' },
      { title: 'Business Intelligence (BI)', description: 'We implement and customize leading BI engines (Power BI, Tableau, custom builds) with intuitive semantic layers so anyone can explore data naturally without submitting IT tickets.', icon: '📊' },
      { title: 'Predictive Analytics', description: 'We build advanced descriptive, diagnostic, and predictive analytics models using historical data and machine learning to forecast trends and flag anomalies before they become problems.', icon: '🔮' },
      { title: 'Custom Dashboards', description: 'We design role-based, real-time visual interfaces — from the CEO tracking revenue to the warehouse manager tracking daily output — that cut through the noise and highlight exact KPIs.', icon: '📈' },
      { title: 'Automated Reporting', description: 'We engineer automated reporting systems that pull live data, format it against your exact templates, and distribute it securely on a set schedule — eliminating manual copy-paste forever.', icon: '📋' },
    ],
    benefits: [
      'Single source of truth replacing three conflicting revenue reporting systems',
      'Executives get real-time clarity on business health at a glance',
      'Anticipate supply chain shortages and predict customer churn',
      'Recoup thousands of analyst hours from manual reporting tasks',
      'HIPAA-compliant, encrypted data warehousing for healthcare and finance',
    ],
    process: [
      { step: 1, title: 'Data Discovery & Audit', description: 'We map your existing data sources, identify bottlenecks, and define the business questions you need answered.' },
      { step: 2, title: 'Pipeline Architecture', description: 'We design ETL processes and select the right data warehousing solutions (Snowflake, Redshift, BigQuery) for your specific data volume.' },
      { step: 3, title: 'Agile Engineering', description: 'Our data engineers build the infrastructure in iterative sprints, ensuring data flows accurately before layering visualization tools.' },
      { step: 4, title: 'BI Integration & DataOps', description: 'We build dashboards, deploy predictive models, and implement continuous data monitoring for long-term accuracy and security.' },
    ],
    faqs: [
      { question: 'Can you analyze unstructured data like PDFs, emails, and images?', answer: 'Yes. We utilize modern NoSQL databases and data lakes to store unstructured data, then deploy NLP and machine learning models to extract structured insights from your unstructured documents.' },
      { question: 'How do you ensure our sensitive business data remains secure during analytics?', answer: 'We implement strict Role-Based Access Control (RBAC), data masking, encryption at rest, and encryption in transit to ensure absolute compliance with global standards.' },
      { question: 'What is the difference between a Data Lake and a Data Warehouse?', answer: 'A Data Lake stores raw, unstructured data — highly flexible and scalable. A Data Warehouse stores processed, structured data optimized for fast BI querying. We typically architect a combination of both to maximize your analytics capabilities.' },
    ],
  },
  'quality-assurance-testing': {
    title: 'Quality Assurance & Testing',
    icon: '✅',
    shortDescription: 'Ruthless software testing. Enterprise quality assurance. We deploy senior QA engineering pods to stress-test your architecture, automate release pipelines, and execute rigorous security testing.',
    heroTitle: 'Ruthless Software Testing. Enterprise Quality Assurance.',
    heroDescription: 'A brilliant application is a liability if it crashes under pressure or exposes user data. We deploy senior Quality Engineering pods to stress-test your architecture, automate your release pipelines, and execute rigorous security testing so you can deploy with absolute certainty.',
    features: [
      { title: 'Test Automation', description: 'We build robust automated test suites covering unit, integration, and end-to-end tests that run on every code commit in your CI/CD pipeline.', icon: '🤖' },
      { title: 'Performance Testing', description: 'We stress-test your architecture under extreme load conditions to identify and eliminate bottlenecks before they impact your users in production.', icon: '⚡' },
      { title: 'Security Testing & Penetration Testing', description: 'We execute thorough security audits, vulnerability scanning, and penetration testing to identify and remediate critical security flaws before deployment.', icon: '🔒' },
      { title: 'API Testing', description: 'We validate your APIs for correctness, performance, and security — ensuring seamless integration between your microservices and third-party tools.', icon: '🔌' },
      { title: 'Mobile App Testing', description: 'We test across hundreds of real device and OS combinations to ensure flawless performance on iOS, Android, and cross-platform environments.', icon: '📱' },
      { title: 'QA Consulting & Process Setup', description: 'We audit your existing QA processes and implement a world-class quality engineering framework tailored to your tech stack and release velocity.', icon: '📋' },
    ],
    benefits: [
      'Zero critical bugs reaching production post-deployment',
      'Automated test suite reducing manual QA time by 70%',
      'Compliance with SOC2, HIPAA, OWASP security standards',
      'Performance validated for 10x your peak expected traffic load',
      'CI/CD integrated testing enabling multiple daily releases with confidence',
    ],
    faqs: [
      { question: 'What is the difference between QA testing and security testing?', answer: 'QA testing validates that your software works correctly and performs under load. Security testing (penetration testing) specifically probes your application for vulnerabilities that malicious actors could exploit. We provide both as integrated services.' },
      { question: 'Can you integrate QA into our existing CI/CD pipeline?', answer: 'Yes. We specialize in integrating automated test suites directly into existing pipelines (Jenkins, GitHub Actions, GitLab CI) so that every code commit is automatically tested before reaching production.' },
      { question: 'How long does a full QA engagement take?', answer: 'It depends on the scope. A QA audit and framework setup typically takes 2–4 weeks. Ongoing QA augmentation integrates with your sprint velocity. We adapt to your release timeline and risk tolerance.' },
    ],
  },
  'staff-augmentation': {
    title: 'Staff Augmentation',
    icon: '👥',
    shortDescription: 'Stop losing 6 months to hiring. Instantly inject vetted, top 1% engineers directly into your existing teams within 2 weeks — with zero long-term commitment.',
    heroTitle: 'Stop Losing 6 Months to Hiring. Start Shipping in 2 Weeks.',
    heroDescription: 'The best engineers are not on job boards. We provide instant access to the top 1% of global engineering talent — AI specialists, cloud architects, full-stack developers — that integrate directly into your teams, work in your timezone, and hit the ground running.',
    features: [
      { title: 'AI & ML Engineers', description: 'Senior AI engineers specializing in LLM integration, ML model development, and autonomous agent systems — available within 2 weeks.', icon: '🧠' },
      { title: 'Full-Stack Developers', description: 'Elite full-stack engineers proficient across React, Node.js, Python, Java, and cloud-native architectures for any enterprise tech stack.', icon: '💻' },
      { title: 'Cloud & DevOps Architects', description: 'Senior cloud architects and DevOps engineers certified in AWS, Azure, and GCP who build and optimize your infrastructure at scale.', icon: '☁️' },
      { title: 'Mobile App Developers', description: 'Top-tier iOS, Android, and React Native engineers who ship polished, high-performance mobile applications on aggressive timelines.', icon: '📱' },
      { title: 'QA & Security Engineers', description: 'Senior quality and security engineers who establish automated testing frameworks and conduct rigorous penetration testing.', icon: '🔒' },
      { title: 'Data Engineers & BI Analysts', description: 'Expert data engineers and BI analysts who design scalable pipelines, data warehouses, and executive dashboards that deliver real-time business clarity.', icon: '📊' },
    ],
    benefits: [
      'Bypass the 6-month hiring cycle — engineers onboarded within 2 weeks',
      'Top 1% of global talent rigorously vetted for technical and cultural fit',
      'Zero long-term commitment — scale up or down as your needs evolve',
      'Engineers work in your timezone and integrate with your existing workflows',
      'Contract-to-hire option available for permanent team additions',
    ],
    faqs: [
      { question: 'How quickly can engineers be onboarded?', answer: 'Because we maintain a deep bench of vetted, senior engineering talent, we can typically present 2–3 pre-screened candidates within 72 hours and have an engineer fully onboarded within 2 weeks.' },
      { question: 'Do the engineers work in our timezone and within our tools?', answer: 'Yes. Our augmented engineers integrate fully into your existing workflows — your Slack, your Jira, your CI/CD pipeline. They work within your sprint cycles and report directly to your team leads.' },
      { question: 'What is the difference between staff augmentation and a managed team?', answer: 'Staff augmentation places individual engineers directly under your management — ideal when you need to extend your capacity. A managed team (dedicated pod) provides a fully self-sufficient team with a tech lead who owns delivery outcomes independently.' },
      { question: 'Can we hire the engineers permanently after the contract?', answer: 'Yes. We offer contract-to-hire engagements. If an augmented engineer is a great fit for your team culture and technical needs, we facilitate a transparent transition to a permanent employment arrangement.' },
    ],
  },
  'ui-ux-design': {
    title: 'UI/UX Design Services',
    icon: '🎨',
    shortDescription: 'Stop losing conversions to poor design. We execute UX-led design strategies — user research, wireframing, prototyping, and design systems — that turn complex workflows into intuitive user experiences.',
    heroTitle: 'Stop Losing Conversions to Poor Design.',
    heroDescription: 'Bad design is costing you market share. We execute UX-led design strategies — user research, wireframing, interactive prototyping, and design systems — that transform complex workflows into intuitive digital experiences users actually want to use.',
    features: [
      { title: 'UX Research & Strategy', description: 'We conduct user interviews, competitive analysis, and heuristic evaluations to map the exact pain points in your current product experience.', icon: '🔍' },
      { title: 'Wireframing & Prototyping', description: 'We create interactive, clickable prototypes that allow you to validate user flows and business logic before a single line of code is written.', icon: '📐' },
      { title: 'UI Design & Design Systems', description: 'We build component-based, scalable design systems in Figma that align your brand, accelerate engineering handoff, and ensure visual consistency across your entire product suite.', icon: '🎨' },
      { title: 'Mobile App Design', description: 'We design high-fidelity iOS and Android interfaces that follow platform conventions while ensuring your brand personality comes through powerfully.', icon: '📱' },
      { title: 'Enterprise Dashboard Design', description: 'We design data-heavy, role-based executive and operational dashboards that make complex data immediately comprehensible and actionable.', icon: '📊' },
      { title: 'Usability Testing', description: 'We conduct structured usability tests with real users to validate design decisions with data, not opinions, before investing in full development.', icon: '👁️' },
    ],
    benefits: [
      'Drastically reduced user onboarding time and support ticket volume',
      'Higher user retention and engagement through intuitive information architecture',
      'Validated prototypes before development investment reduces costly rework',
      'Scalable Figma design system accelerating engineering handoff by 50%',
      'User adoption skyrocketed and support tickets dropped by half',
    ],
    faqs: [
      { question: 'What is the difference between UI and UX design?', answer: 'UX (User Experience) design focuses on the overall flow, information architecture, and how a user navigates through your product to achieve their goal. UI (User Interface) design focuses on the visual presentation — colors, typography, and component aesthetics. Great products require both working in unison.' },
      { question: 'Do you provide development handoff support?', answer: 'Yes. We deliver developer-ready design files in Figma with documented component specifications, interactive prototypes, and asset exports. We also work directly with your engineering team during implementation to ensure pixel-perfect execution.' },
      { question: 'Can you redesign an existing product without rebuilding it from scratch?', answer: 'Absolutely. We specialize in incremental design transformations — auditing your existing product, identifying the highest-impact UX improvements, and redesigning components in a way that can be implemented systematically without requiring a full rebuild.' },
    ],
  },
  // Backward-compatible aliases for old slug formats
  'software-development': {
    title: 'Software Development',
    icon: '💻',
    shortDescription: 'Custom enterprise software engineered for scale, reliability, and performance.',
    heroTitle: 'Build Software That Scales, Not Technical Debt.',
    heroDescription: 'Stop fighting with rigid, off-the-shelf platforms. We co-engineer robust enterprise software, high-performance SaaS applications, and custom digital products designed to solve complex business bottlenecks and drive hard ROI.',
    features: [
      { title: 'Full-Stack Development', description: 'End-to-end engineering from database design to UI — delivered as a unified, integrated system.', icon: '🔗' },
      { title: 'Scalable Architecture', description: 'Built to handle growth from 100 to 10 million users without costly rewrites.', icon: '📐' },
      { title: 'Agile Delivery', description: 'Two-week sprints with weekly demos and continuous deployment.', icon: '🔄' },
      { title: 'API-First Design', description: 'RESTful and GraphQL APIs designed for extensibility and third-party integration.', icon: '🔌' },
    ],
    benefits: ['Total IP ownership — source code legally transferred on completion', 'Cloud-native architecture for zero downtime scaling', 'Engineering pod onboarded within 2–4 weeks', 'CI/CD deployment with zero business downtime'],
  },
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  let service: Service | null = null

  try {
    service = await getServiceBySlug(slug)
  } catch { /* Sanity not configured */ }

  // Use defaults if Sanity data not available
  const defaults = serviceDefaults[slug]
  if (!service && !defaults) {
    notFound()
  }

  const s = service || {
    _id: slug,
    title: defaults?.title || slug.replace(/-/g, ' '),
    slug: { current: slug },
    icon: defaults?.icon || '🛠️',
    shortDescription: defaults?.shortDescription || '',
    heroTitle: defaults?.heroTitle,
    heroDescription: defaults?.heroDescription,
    features: defaults?.features || [],
    benefits: defaults?.benefits || [],
    featured: false,
    ...defaults,
  } as Service

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: s.shortDescription,
    provider: {
      '@type': 'Organization',
      name: 'AB BusinessTech LLP',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D0D1A] to-[#111827] py-24 lg:py-32">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-200" aria-current="page">{s.title}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-6" aria-hidden="true">{s.icon}</div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-6">
                {s.heroTitle || s.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {s.heroDescription || s.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/work" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-[#111111]">
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Benefits quick list */}
            {s.benefits && s.benefits.length > 0 && (
              <div className="glass-card p-7">
                <h2 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">What You Get</h2>
                <ul className="space-y-3">
                  {s.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#E3164F] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Features */}
      {s.features && s.features.length > 0 && (
        <section className="section-padding bg-white" aria-label="Service features">
          <Container>
            <h2 className="text-3xl font-black text-[#111111] mb-12">What We Deliver</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {s.features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl bg-[#F7F8FA] border border-gray-100 hover:border-[#E3164F]/20 hover:shadow-md transition-all duration-200">
                  {feature.icon && <div className="text-2xl mb-4">{feature.icon}</div>}
                  <h3 className="font-bold text-[#111111] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Process */}
      {s.process && s.process.length > 0 && (
        <section className="section-padding bg-[#F7F8FA]" aria-label="Service process">
          <Container>
            <h2 className="text-3xl font-black text-[#111111] mb-12">How We Work</h2>
            <ol className="space-y-6">
              {s.process.map((step) => (
                <li key={step.step} className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#E3164F]/10 flex items-center justify-center">
                    <span className="text-sm font-black text-[#E3164F]">
                      {String(step.step).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-[#111111] mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* FAQs */}
      {s.faqs && s.faqs.length > 0 && (
        <section className="section-padding bg-white" aria-label="Frequently asked questions">
          <Container className="max-w-3xl">
            <h2 className="text-3xl font-black text-[#111111] mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {s.faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-100 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-[#111111] hover:text-[#E3164F] transition-colors list-none">
                    {faq.question}
                    <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
                    <div className="pt-4">{faq.answer}</div>
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#E3164F] to-[#B00E3A]">
        <Container className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Build with {s.title}?
          </h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss your project requirements and create a tailored plan for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/contact/book-consultation" variant="outline" size="lg" className="border-white/50 text-white hover:bg-white hover:text-[#E3164F]">
              Book Free Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
