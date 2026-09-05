import { getImage, salon } from '../data/salon'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/Button'
import SafeImage from '../components/SafeImage'
import SectionHeading from '../components/SectionHeading'

export default function Team() {
  usePageTitle('Team')

  return (
    <>
      <section className="team-hero">
        <div className="team-hero__frame">
          <div className="team-hero__media" aria-hidden="true">
            <SafeImage
              src={salon.images.teamGroup}
              alt=""
              priority
            />
          </div>
          <div className="container team-hero__content">
            <p className="eyebrow team-hero__eyebrow">The Team</p>
            <h1>Style starts here.</h1>
            <p>
              Barbers, stylists, and educators dedicated to the craft — for men
              and women. Book your appointment today.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Stylists"
            title="Meet the Êvolv team."
            subtitle="Find your stylist below — or call the parlor and we’ll help you book."
          />
          <div className="team-grid">
            {salon.team.map((member) => (
              <article className="team-card" key={member.name}>
                <SafeImage
                  src={getImage(member.imageKey)}
                  alt={member.name}
                  hover
                />
                <div className="team-card__body">
                  <h3>{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p>{member.bio}</p>
                  <div className="team-card__links">
                    {member.phoneHref ? (
                      <a className="team-card__phone" href={member.phoneHref}>
                        {member.phone}
                      </a>
                    ) : null}
                    {member.booksyUrl ? (
                      <a
                        className="team-card__phone"
                        href={member.booksyUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Book on Booksy
                      </a>
                    ) : null}
                    {member.instagramUrl ? (
                      <a
                        className="team-card__phone"
                        href={member.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Book on Instagram {member.instagram}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container cta-band">
          <SectionHeading
            align="center"
            eyebrow="Book"
            title="Call Êvolv Hair Parlor."
            subtitle={`Reach us at ${salon.phone.display} — or book directly with your stylist above.`}
          />
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Button href={salon.phone.href}>Call {salon.phone.display}</Button>
            <Button to="/contact" variant="light">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
