import type { StorySectionId } from '../../content/types'

interface ProgressIndicatorProps {
  sections: Array<{ id: StorySectionId; label: string }>
  activeSection: StorySectionId
  onNavigate: (id: StorySectionId) => void
}

export function ProgressIndicator({
  sections,
  activeSection,
  onNavigate,
}: ProgressIndicatorProps) {
  return (
    <aside className="progress" aria-label="Sectievoortgang">
      {sections.map((section, index) => (
        <button
          key={section.id}
          type="button"
          className={`progress-item ${activeSection === section.id ? 'active' : ''}`.trim()}
          onClick={() => onNavigate(section.id)}
          aria-label={`Ga naar ${section.label}`}
        >
          <span className="dot" aria-hidden="true" />
          <span className="label">{index + 1}. {section.label}</span>
        </button>
      ))}
    </aside>
  )
}
