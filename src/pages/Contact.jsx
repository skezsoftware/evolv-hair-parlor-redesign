import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { salon } from '../data/salon'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  usePageTitle('Contact')
  const [mapFailed, setMapFailed] = useState(false)

  return (
    <>
      <PageHero
        className="page-hero--anchor-top page-hero--contact"
        image={salon.images.detail}
        objectPosition="center 48%"
        eyebrow="Contact"
        title="Ready to book?"
        subtitle="Call the parlor to schedule, or reach out to your preferred stylist on the Team page."
      />

      <section className="section">
        <div className="container contact-details contact-details--solo">
          <SectionHeading eyebrow="Visit" title="Find us in Hillcrest." />

          <div>
            <h2>Address</h2>
            <p>
              <a href={salon.address.mapsUrl} target="_blank" rel="noreferrer">
                {salon.address.street}
                <br />
                {salon.address.city}, {salon.address.state} {salon.address.zip}
              </a>
            </p>
          </div>

          <div>
            <h2>Phone</h2>
            <p>
              <a href={salon.phone.href}>{salon.phone.display}</a>
            </p>
          </div>

          <div>
            <h2>Hours</h2>
            <ul className="hours-panel">
              {salon.hours.map((item) => (
                <li key={item.days}>
                  <span>{item.days}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button to={salon.primaryCta.to}>{salon.primaryCta.label}</Button>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container hours-grid">
          <div>
            <SectionHeading eyebrow="Map" title="409 University Avenue." />
            <p className="notes">
              In the heart of Hillcrest — easy to reach, easy to return to.
            </p>
            <div className="map-placeholder" style={{ marginTop: '1.5rem' }}>
              {mapFailed ? (
                <div className="map-fallback">
                  <MapPin size={28} strokeWidth={1.5} aria-hidden="true" />
                  <p>{salon.address.full}</p>
                  <p>
                    <a href={salon.address.mapsUrl} target="_blank" rel="noreferrer">
                      Open in Maps
                    </a>
                  </p>
                </div>
              ) : (
                <iframe
                  title={`Map showing ${salon.name}`}
                  src={salon.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onError={() => setMapFailed(true)}
                />
              )}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow={salon.parking.title} title="Getting here." />
            <p className="notes">{salon.parking.text}</p>
          </div>
        </div>
      </section>
    </>
  )
}
