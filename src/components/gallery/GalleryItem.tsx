import type { GalleryItemContent } from '../../content/types'
import { Image } from '../ui/Image'

interface GalleryItemProps {
  item: GalleryItemContent
  onOpen: () => void
}

export function GalleryItem({ item, onOpen }: GalleryItemProps) {
  return (
    <button
      type="button"
      className="gallery-item"
      style={{ ['--rotate' as string]: `${item.rotate}deg` }}
      onClick={onOpen}
    >
      <Image src={item.src} alt={item.alt} className="gallery-image" />
      <span className="gallery-caption">{item.caption}</span>
    </button>
  )
}
