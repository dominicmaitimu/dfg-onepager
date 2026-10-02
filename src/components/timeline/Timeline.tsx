import type { TimelineItemContent } from '../../content/types'
import { TimelineItem } from './TimelineItem'

interface TimelineProps {
  items: TimelineItemContent[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <section className="panel panel-timeline" id="verhalen" data-section-id="verhalen" aria-labelledby="verhalen-title">
      <div className="timeline-header">
        <p className="eyebrow">07 Verhalen</p>
        <h2 id="verhalen-title">Van eerste afstemming tot herinnering.</h2>
      </div>
      <ol className="timeline-list">
        {items.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </ol>
    </section>
  )
}
