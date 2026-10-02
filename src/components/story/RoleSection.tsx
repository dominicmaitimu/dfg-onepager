import { HandwrittenAccent } from '../brand/HandwrittenAccent'
import { Image } from '../ui/Image'
import type { RoleContent } from '../../content/types'

interface RoleSectionProps {
  role: RoleContent
  index: number
}

export function RoleSection({ role, index }: RoleSectionProps) {
  return (
    <article className={`role-card role-card-${role.slug}`} id={role.slug} data-section-id={role.slug} aria-labelledby={`${role.slug}-title`}>
      <div className="role-copy">
        <p className="eyebrow">0{index + 2} {role.title}</p>
        <h2 id={`${role.slug}-title`}>{role.shortTitle}</h2>
        <p className="role-intro">{role.intro}</p>
        <p>{role.description}</p>
        <ul className="service-list" aria-label={`Diensten als ${role.title}`}>
          {role.services.map((service) => <li key={service}>{service}</li>)}
        </ul>
        <p className="story-accent"><HandwrittenAccent text={role.accent} /></p>
      </div>
      <div className="photo-card role-photo-card">
        <Image src={role.image.src} alt={role.image.alt} className="story-image" />
      </div>
    </article>
  )
}
