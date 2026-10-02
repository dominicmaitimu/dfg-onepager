import { useEffect } from 'react'
import type { GalleryItemContent } from '../../content/types'

interface LightboxProps {
  items: GalleryItemContent[]
  activeIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function Lightbox({ items, activeIndex, onClose, onNext, onPrev }: LightboxProps) {
  const activeItem = items[activeIndex]

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
      if (event.key === 'ArrowRight') {
        onNext()
      }
      if (event.key === 'ArrowLeft') {
        onPrev()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, onNext, onPrev])

  if (!activeItem) {
    return null
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Fotovergrootweergave">
      <button type="button" className="lightbox-close" onClick={onClose}>
        Sluiten
      </button>
      <button type="button" className="lightbox-nav prev" onClick={onPrev} aria-label="Vorige foto">
        <span aria-hidden="true">&larr;</span>
      </button>
      <figure>
        <img src={activeItem.src} alt={activeItem.alt} className="lightbox-image" />
        <figcaption>{activeItem.caption}</figcaption>
      </figure>
      <button type="button" className="lightbox-nav next" onClick={onNext} aria-label="Volgende foto">
        <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  )
}
