import type { TimelineItemContent } from '../../content/types'

interface TimelineItemProps {
  item: TimelineItemContent
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <li className="timeline-item">
      <span className="timeline-icon" aria-hidden="true">
        {item.icon}
      </span>
      <p className="timeline-time">{item.icon}</p>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </li>
  )
}
