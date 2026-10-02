import type { StorySectionId } from '../../content/types'

interface SiteNavigationProps {
  sections: Array<{ id: StorySectionId; label: string }>
  activeSection: StorySectionId
  onNavigate: (id: StorySectionId) => void
}

export function SiteNavigation({ sections, activeSection, onNavigate }: SiteNavigationProps) {
  return (
    <nav className="site-nav" aria-label="Hoofdnavigatie">
      <ol>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              type="button"
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => onNavigate(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}
