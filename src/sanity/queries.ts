export const siteQuery = `*[_type == "siteSettings"][0]{...}`

export const heroQuery = `*[_type == "hero"][0]{...}`

export const aboutQuery = `*[_type == "about"][0]{...}`

export const rolesQuery = `*[_type == "role"] | order(order asc){...}`

export const servicesQuery = `*[_type == "service"] | order(order asc){...}`

export const projectsQuery = `*[_type == "portfolioProject"] | order(order asc){...}`

export const timelineQuery = `*[_type == "timelineItem"] | order(order asc){...}`

export const testimonialQuery = `*[_type == "testimonial"] | order(order asc){...}`
