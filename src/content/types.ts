export type RoleSlug = 'fotografe' | 'gastvrouw' | 'fotografische-gastvrouw'

export type StorySectionId = 'wie-ik-ben' | RoleSlug | 'portfolio' | 'verhalen' | 'contact'

export interface SiteSettings {
  siteTitle: string
  description: string
  email: string
  phone: string
  instagram: string
  location: string
  logoAlt: string
}

export interface HeroContent {
  eyebrow: string
  title: string
  titleAccent: string
  description: string
  ctaLabel: string
  ctaTarget: StorySectionId
  image: { src: string; alt: string }
}

export interface AboutContent {
  eyebrow: string
  title: string
  intro: string
  body: string
  accent: string
  image: { src: string; alt: string }
}

export interface RoleContent {
  slug: RoleSlug
  title: string
  shortTitle: string
  intro: string
  description: string
  accent: string
  image: { src: string; alt: string }
  services: string[]
}

export interface PortfolioProject {
  id: string
  title: string
  type: string
  date: string
  client: string
  location: string
  roles: RoleSlug[]
  intro: string
  description: string
  coverImage: { src: string; alt: string }
  gallery: Array<{ src: string; alt: string }>
  featured: boolean
  rotate: number
}

export interface GalleryItemContent {
  id: string
  src: string
  alt: string
  caption: string
  category: string
  rotate: number
}

export interface TimelineItemContent {
  id: string
  title: string
  description: string
  icon: string
}

export interface TestimonialContent {
  id: string
  quote: string
  names: string
  role: string
  project: string
}

export interface ContactContent {
  title: string
  description: string
  ctaLabel: string
}

export interface AppContent {
  settings: SiteSettings
  hero: HeroContent
  about: AboutContent
  roles: RoleContent[]
  projects: PortfolioProject[]
  timeline: TimelineItemContent[]
  testimonials: TestimonialContent[]
  contact: ContactContent
}
