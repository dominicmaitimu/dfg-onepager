import type { RoleContent } from '../../content/types'
import { RoleSection } from './RoleSection'

interface RolesSectionProps {
  roles: RoleContent[]
}

export function RolesSection({ roles }: RolesSectionProps) {
  return (
    <section className="panel panel-roles" aria-labelledby="roles-title">
      <div className="roles-heading">
        <p className="eyebrow">02 / 03 / 04 Mijn rollen</p>
        <h2 id="roles-title">Drie manieren om aanwezig te zijn.</h2>
      </div>
      <div className="role-grid">
        {roles.map((role, index) => <RoleSection key={role.slug} role={role} index={index} />)}
      </div>
    </section>
  )
}
