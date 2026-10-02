import { useState } from 'react'
import type { ContactContent, SiteSettings } from '../../content/types'

interface ContactSectionProps {
  content: ContactContent
  settings: SiteSettings
}

export function ContactSection({ content, settings }: ContactSectionProps) {
  const [sent, setSent] = useState(false)

  return (
    <section className="panel panel-contact" id="contact" data-section-id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">08 Contact</p>
        <h2 id="contact-title">{content.title}</h2>
        <p>{content.description}</p>
        <p className="contact-meta">
          {settings.location} · {settings.email} · {settings.phone}
        </p>
      </div>
      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault()
          setSent(true)
        }}
      >
        <label>
          Naam
          <input name="name" type="text" required />
        </label>
        <label>
          E-mail
          <input name="email" type="email" required />
        </label>
        <label>
          Opdracht of datum
          <input name="date" type="text" required />
        </label>
        <label>
          Locatie
          <input name="location" type="text" required />
        </label>
        <label>
          Vertel iets over je opdracht
          <textarea name="story" rows={4} required />
        </label>
        <button className="btn" type="submit">
          {content.ctaLabel}
        </button>
        {sent ? <p className="submit-note">Bedankt. Ik neem snel contact met jullie op.</p> : null}
      </form>
    </section>
  )
}
