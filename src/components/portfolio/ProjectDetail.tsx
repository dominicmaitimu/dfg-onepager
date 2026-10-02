import type { PortfolioProject, RoleSlug } from '../../content/types'
import { Image } from '../ui/Image'

interface ProjectDetailProps {
  project: PortfolioProject
  onClose: () => void
}

const roleLabels: Record<RoleSlug, string> = {
  fotografe: 'Fotografe',
  gastvrouw: 'Gastvrouw',
  'fotografische-gastvrouw': 'Fotografische Gastvrouw',
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <div className="project-detail" role="dialog" aria-modal="true" aria-labelledby="project-detail-title">
      <button type="button" className="lightbox-close" onClick={onClose}>Terug naar portfolio</button>
      <div className="project-detail-inner">
        <div className="project-detail-heading">
          <p className="eyebrow">{project.type} · {project.date}</p>
          <h2 id="project-detail-title">{project.title}</h2>
          <p className="project-detail-meta">{project.client} · {project.location}</p>
          <p className="role-tags">{project.roles.map((role) => roleLabels[role]).join(' · ')}</p>
          <p className="role-intro">{project.intro}</p>
          <p>{project.description}</p>
        </div>
        <div className="project-detail-gallery">
          <Image src={project.coverImage.src} alt={project.coverImage.alt} className="project-detail-cover" loading="eager" />
          {project.gallery.map((image) => <Image key={image.src} src={image.src} alt={image.alt} className="project-detail-image" />)}
        </div>
      </div>
    </div>
  )
}
