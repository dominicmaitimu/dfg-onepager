import { useState } from 'react'
import type { PortfolioProject, RoleSlug } from '../../content/types'
import { Image } from '../ui/Image'

interface PortfolioProps {
  projects: PortfolioProject[]
  onOpenProject: (project: PortfolioProject) => void
}

const roleLabels: Record<RoleSlug, string> = {
  fotografe: 'Fotografe',
  gastvrouw: 'Gastvrouw',
  'fotografische-gastvrouw': 'Fotografische Gastvrouw',
}

export function Portfolio({ projects, onOpenProject }: PortfolioProps) {
  const [activeRole, setActiveRole] = useState<RoleSlug | 'alle'>('alle')
  const filteredProjects = activeRole === 'alle'
    ? projects
    : projects.filter((project) => project.roles.includes(activeRole))

  return (
    <section className="panel panel-portfolio" id="portfolio" data-section-id="portfolio" aria-labelledby="portfolio-title">
      <div className="portfolio-header">
        <div>
          <p className="eyebrow">05 Portfolio</p>
          <h2 id="portfolio-title">Werk vanuit verschillende rollen, altijd met aandacht.</h2>
        </div>
        <div className="portfolio-filters" aria-label="Filter portfolio op rol">
          <button type="button" className={activeRole === 'alle' ? 'active' : ''} onClick={() => setActiveRole('alle')}>Alles</button>
          {(Object.keys(roleLabels) as RoleSlug[]).map((role) => (
            <button key={role} type="button" className={activeRole === role ? 'active' : ''} onClick={() => setActiveRole(role)}>
              {roleLabels[role]}
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <button
            type="button"
            key={project.id}
            className="project-card"
            style={{ ['--rotate' as string]: `${project.rotate}deg` }}
            onClick={() => onOpenProject(project)}
          >
            <Image src={project.coverImage.src} alt={project.coverImage.alt} className="project-image" />
            <span className="project-meta">{project.type} · {project.date}</span>
            <strong>{project.title}</strong>
            <span>{project.roles.map((role) => roleLabels[role]).join(' + ')}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
