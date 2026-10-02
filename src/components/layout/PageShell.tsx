import { useEffect, useMemo, useRef, useState } from 'react'
import { ContactSection } from '../contact/ContactSection'
import { Hero } from '../hero/Hero'
import { Portfolio } from '../portfolio/Portfolio'
import { ProjectDetail } from '../portfolio/ProjectDetail'
import { ProgressIndicator } from './ProgressIndicator'
import { SiteNavigation } from './SiteNavigation'
import { StorySection } from '../story/StorySection'
import { RolesSection } from '../story/RolesSection'
import { Testimonial } from '../testimonials/Testimonial'
import { Timeline } from '../timeline/Timeline'
import { storySections } from '../../app/routes'
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import type { AppContent, StorySectionId } from '../../content/types'
import type { PortfolioProject } from '../../content/types'

interface PageShellProps {
  content: AppContent
}

export function PageShell({ content }: PageShellProps) {
  const pageRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const isMobile = useMediaQuery('(max-width: 900px)')
  const [activeSection, setActiveSection] = useState<StorySectionId>('wie-ik-ben')
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null)

  useHorizontalScroll(pageRef, trackRef, { enabled: !isMobile })

  const sectionIds = useMemo(
    () => ['welkom', ...storySections.map((section) => section.id)] as const,
    [],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) {
          return
        }

        const value = visible.target.getAttribute('data-section-id')
        if (value && value !== 'welkom' && storySections.some((section) => section.id === value)) {
          setActiveSection(value as StorySectionId)
        }
      },
      {
        root: canvas,
        threshold: [0.3, 0.6],
      },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds])

  const navigateTo = (id: StorySectionId) => {
    const target = document.getElementById(id)
    const panel = target?.closest<HTMLElement>('.panel')
    if (panel) {
      window.scrollTo({ top: panel.offsetLeft, behavior: 'smooth' })
    }
  }

  return (
    <div className="page-shell" ref={pageRef}>
      <SiteNavigation sections={storySections} activeSection={activeSection} onNavigate={navigateTo} />
      <ProgressIndicator sections={storySections} activeSection={activeSection} onNavigate={navigateTo} />
      <main className={`story-canvas ${isMobile ? 'is-mobile' : ''}`.trim()} ref={canvasRef} tabIndex={0}>
        <div className="story-track" ref={trackRef}>
          <Hero hero={content.hero} settings={content.settings} onCtaClick={() => navigateTo(content.hero.ctaTarget)} />
          <StorySection story={content.about} />
          <RolesSection roles={content.roles} />
          <Portfolio projects={content.projects} onOpenProject={setActiveProject} />
          <Timeline items={content.timeline} />
          <Testimonial testimonials={content.testimonials} />
          <ContactSection content={content.contact} settings={content.settings} />
        </div>
      </main>
      {activeProject ? <ProjectDetail project={activeProject} onClose={() => setActiveProject(null)} /> : null}
    </div>
  )
}
