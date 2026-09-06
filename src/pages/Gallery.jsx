import { salon } from '../data/salon'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/Button'
import SafeImage from '../components/SafeImage'
import SectionHeading from '../components/SectionHeading'

export default function Gallery() {
  usePageTitle('Gallery')

  return (
    <>
      <section className="section gallery-page">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Gallery"
            title="The work speaks."
            subtitle="Cuts, fades, and finishes from the chair at Êvolv — more looks coming soon."
          />

          <div className="gallery-grid">
            {salon.gallery.map((shot) => (
              <figure className="gallery-shot" key={shot.src}>
                <SafeImage src={shot.src} alt={shot.alt} hover />
              </figure>
            ))}
          </div>

          <div className="btn-group" style={{ justifyContent: 'center', marginTop: '3rem' }}>
            <Button to={salon.primaryCta.to}>{salon.primaryCta.label}</Button>
            <Button to="/services" variant="secondary">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
