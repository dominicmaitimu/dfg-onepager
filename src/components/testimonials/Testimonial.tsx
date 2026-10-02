import type { TestimonialContent } from '../../content/types'

interface TestimonialProps {
  testimonials: TestimonialContent[]
}

export function Testimonial({ testimonials }: TestimonialProps) {
  return (
    <section
      className="panel panel-testimonials"
      id="herinneringen"
      aria-labelledby="herinneringen-title"
    >
      <p className="eyebrow">Ervaringen</p>
      <h2 id="herinneringen-title">Woorden die blijven, net als de beelden.</h2>
      <div className="testimonial-list">
        {testimonials.map((item) => (
          <blockquote key={item.id}>
            <p>"{item.quote}"</p>
            <footer>
              {item.names} · {item.role} · {item.project}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
