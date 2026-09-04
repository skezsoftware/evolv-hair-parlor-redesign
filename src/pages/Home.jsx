import { Check } from 'lucide-react'
import { formatPrice, getImage, salon } from '../data/salon'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/Button'
import SafeImage from '../components/SafeImage'
import SectionHeading from '../components/SectionHeading'

export default function Home() {
  usePageTitle()

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <SafeImage src={salon.images.hero} alt="" priority />
        </div>
        <div className="container home-hero__content">
          <p className="eyebrow home-hero__place">
            {salon.neighborhood} · {salon.address.city}
          </p>
          <h1>{salon.name}</h1>
          <p className="home-hero__tagline">{salon.tagline}</p>
          <div className="btn-group">
            <Button href={salon.primaryCta.href} variant="primary">
              {salon.primaryCta.label}
            </Button>
            <Button to="/services" variant="light">
              View Services
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div className="intro-copy">
            <SectionHeading
              eyebrow="Welcome"
              title="Highest quality hair service in San Diego."
            />
            <p>{salon.description}</p>
            <p>
              Located in Hillcrest at 409 University Avenue. From the moment you
              step in to the moment you leave, the focus is simple: no bad hair
              days.
            </p>
            <Button to="/about" variant="secondary">
              Our Story
            </Button>
          </div>
          <div className="intro-media">
            <SafeImage
              src={salon.images.salonInterior}
              alt="Interior of Êvolv Hair Parlor"
              hover
            />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Services"
            title="Cuts, color, and classic barbering."
            subtitle="Life isn’t perfect, but your hair can be."
          />
          <div className="featured-grid">
            {salon.featuredServices.map((item) => (
              <article className="featured-card" key={item.name}>
                <SafeImage src={getImage(item.imageKey)} alt={item.name} hover />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>{formatPrice(item.price)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-media">
            <SafeImage
              src={salon.images.chair}
              alt="Salon chair and brick interior at Êvolv"
              hover
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={salon.experience.eyebrow}
              title={salon.experience.title}
            />
            <p style={{ marginTop: '1.1rem', color: 'var(--text-muted)' }}>
              {salon.experience.text}
            </p>
            <ul className="experience-list">
              {salon.experience.points.map((point) => (
                <li key={point}>
                  <Check size={18} strokeWidth={1.75} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button href={salon.primaryCta.href}>{salon.primaryCta.label}</Button>
          </div>
        </div>
      </section>

      <section className="private-promo">
        <SafeImage src={salon.images.brick} alt="" />
        <div className="container private-promo__content">
          <p className="eyebrow">The Team</p>
          <h2>Style starts here.</h2>
          <p>
            Meet the barbers and stylists behind Êvolv — hybrid talent for men
            and women, led by founder Mario Garcia.
          </p>
          <Button to="/team" variant="light">
            Meet the Team
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Guests"
            title="What clients remember."
          />
          <div className="testimonials">
            {salon.testimonials.map((item) => (
              <figure className="testimonial" key={item.name + item.detail}>
                <blockquote>"{item.quote}"</blockquote>
                <figcaption>
                  {item.name}
                  <br />
                  {item.detail}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container hours-grid">
          <div className="hours-panel">
            <SectionHeading eyebrow="Hours" title="Open seven days a week." />
            <ul>
              {salon.hours.map((item) => (
                <li key={item.days}>
                  <span>{item.days}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="location-panel">
            <SectionHeading eyebrow="Location" title="On University Avenue." />
            <p style={{ color: 'var(--text-muted)' }}>{salon.address.full}</p>
            <p>
              <a href={salon.phone.href}>{salon.phone.display}</a>
            </p>
            <div className="btn-group" style={{ marginTop: '1.2rem' }}>
              <Button href={salon.address.mapsUrl} variant="secondary">
                Get Directions
              </Button>
              <Button to="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container cta-band">
          <SectionHeading
            align="center"
            eyebrow="Book"
            title="Ready for a better hair day?"
            subtitle="Call to make an appointment. Walk-ins welcome when the schedule allows."
          />
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Button href={salon.primaryCta.href}>{salon.primaryCta.label}</Button>
            <Button to="/services" variant="light">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
