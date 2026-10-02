import { useState } from 'react'
import type { GalleryItemContent } from '../../content/types'
import { GalleryItem } from './GalleryItem'
import { Lightbox } from './Lightbox'

interface GalleryProps {
  items: GalleryItemContent[]
}

export function Gallery({ items }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = () => setActiveIndex(null)
  const next = () => setActiveIndex((current) => (current === null ? 0 : (current + 1) % items.length))
  const prev = () =>
    setActiveIndex((current) => (current === null ? 0 : (current - 1 + items.length) % items.length))

  return (
    <section className="panel panel-gallery" id="momenten" data-section-id="momenten" aria-labelledby="momenten-title">
      <div className="gallery-header">
        <p className="eyebrow">04 Momenten</p>
        <h2 id="momenten-title">Een selectie verhalen vol licht, liefde en sfeer.</h2>
      </div>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <GalleryItem key={item.id} item={item} onOpen={() => setActiveIndex(index)} />
        ))}
      </div>
      {activeIndex !== null ? (
        <Lightbox items={items} activeIndex={activeIndex} onClose={close} onNext={next} onPrev={prev} />
      ) : null}
    </section>
  )
}
