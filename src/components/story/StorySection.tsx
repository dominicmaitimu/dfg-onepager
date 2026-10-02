import { HandwrittenAccent } from '../brand/HandwrittenAccent'
import { Image } from '../ui/Image'
import type { AboutContent } from '../../content/types'

interface StorySectionProps {
  story: AboutContent
}

export function StorySection({ story }: StorySectionProps) {
  return (
    <section
      className="panel panel-story"
      id="wie-ik-ben"
      data-section-id="wie-ik-ben"
      aria-labelledby="wie-ik-ben-title"
    >
      <div className="story-card">
        <p className="eyebrow">{story.eyebrow}</p>
        <h2 id="wie-ik-ben-title">{story.title}</h2>
        <p className="role-intro">{story.intro}</p>
        <p>{story.body}</p>
        <p className="story-accent">
          <HandwrittenAccent text={story.accent} />
        </p>
      </div>
      <div className="photo-card">
        <Image src={story.image.src} alt={story.image.alt} className="story-image" />
      </div>
    </section>
  )
}
