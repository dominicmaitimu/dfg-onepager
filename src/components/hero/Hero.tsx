import { HandwrittenAccent } from '../brand/HandwrittenAccent'
import { Logo } from '../brand/Logo'
import { Image } from '../ui/Image'
import type { HeroContent, SiteSettings } from '../../content/types'

interface HeroProps {
  hero: HeroContent
  settings: SiteSettings
  onCtaClick: () => void
}

export function Hero({ hero, settings, onCtaClick }: HeroProps) {
  return (
    <section className="panel panel-hero" id="welkom" data-section-id="welkom" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">
          {hero.title} <HandwrittenAccent text={hero.titleAccent} />
        </h1>
        <p>{hero.description}</p>
        <button type="button" className="btn" onClick={onCtaClick}>
          {hero.ctaLabel}
          {' ->'}
        </button>
      </div>
      <Logo alt={settings.logoAlt} />
      <div className="hero-image-frame">
        <Image src={hero.image.src} alt={hero.image.alt} loading="eager" className="hero-image" />
      </div>
    </section>
  )
}
