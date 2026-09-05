import { getSpotlightImage, salon } from '../data/salon'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/Button'
import SafeImage from '../components/SafeImage'
import SectionHeading from '../components/SectionHeading'

export default function Spotlight() {
  usePageTitle('Client Spotlight')
  const [featured, ...archive] = salon.spotlights

  return (
    <>
      <section
        className="page-hero page-hero--community page-hero--media-only"
        aria-label="Our community"
      >
        <div className="page-hero__media" aria-hidden="true">
          <SafeImage
            src={salon.images.community}
            mobileSrc={salon.images.communityMobile}
            alt=""
            priority
            objectPosition="center center"
          />
        </div>
        <h1 className="visually-hidden">Client Spotlight</h1>
      </section>

      <section className="section section--after-community">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Client Spotlight"
            title="Faces of Êvolv."
            subtitle="Every so often we feature a client — their look, their story, and why they keep coming back."
          />

          {featured ? (
            <div className="spotlight-feature" style={{ marginTop: '3rem' }}>
              <div className="spotlight-feature__media">
                <SafeImage
                  src={getSpotlightImage(featured)}
                  alt={featured.name}
                  hover
                />
              </div>
              <div className="spotlight-feature__copy">
                <p className="eyebrow">{featured.month}</p>
                <h2>{featured.name}</h2>
                {featured.stylist ? (
                  <p className="spotlight-meta">Styled by {featured.stylist}</p>
                ) : null}
                <p className="spotlight-summary">{featured.summary}</p>
              </div>
            </div>
          ) : (
            <>
              <SectionHeading
                align="center"
                eyebrow="Coming soon"
                title="Our first spotlight is on the way."
                subtitle="Check back soon — or book a cut and you might be next."
              />
              <div className="btn-group" style={{ justifyContent: 'center' }}>
                <Button to={salon.primaryCta.to}>{salon.primaryCta.label}</Button>
              </div>
            </>
          )}
        </div>
      </section>

      {archive.length > 0 ? (
        <section className="section section--alt">
          <div className="container">
            <SectionHeading
              eyebrow="Archive"
              title="Past spotlights."
              subtitle="A look back at clients we’ve been proud to feature."
            />
            <div className="spotlight-archive">
              {archive.map((client) => (
                <article className="spotlight-archive__item" key={`${client.name}-${client.month}`}>
                  <div className="spotlight-archive__media">
                    <SafeImage
                      src={getSpotlightImage(client)}
                      alt={client.name}
                      hover
                    />
                  </div>
                  <div>
                    <p className="eyebrow">{client.month}</p>
                    <h3>{client.name}</h3>
                    {client.stylist ? (
                      <p className="spotlight-meta">Styled by {client.stylist}</p>
                    ) : null}
                    <p className="spotlight-summary">{client.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--dark">
        <div className="container cta-band">
          <SectionHeading
            align="center"
            eyebrow="Your turn"
            title="Want to be featured?"
            subtitle="Book with the parlor, bring your best energy, and ask your stylist about the next spotlight."
          />
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Button to={salon.primaryCta.to}>{salon.primaryCta.label}</Button>
            <Button to="/contact" variant="light">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
