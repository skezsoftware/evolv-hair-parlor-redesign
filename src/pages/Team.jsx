import { getImage, salon } from '../data/salon'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import SafeImage from '../components/SafeImage'
import SectionHeading from '../components/SectionHeading'

export default function Team() {
  usePageTitle('Team')

  return (
    <>
      <PageHero
        image={salon.images.cut}
        eyebrow="The Team"
        title="Style starts here."
        subtitle="Barbers, stylists, and educators dedicated to the craft — for men and women."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Stylists"
            title="Meet the Êvolv team."
            subtitle="Book directly with your stylist, or call the parlor to find the right fit."
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
                  <a className="team-card__phone" href={member.phoneHref}>
                    {member.phone}
                  </a>
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
            title="Ready to sit in the chair?"
            subtitle="Call the parlor or reach out to your preferred stylist."
          />
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Button href={salon.primaryCta.href}>{salon.primaryCta.label}</Button>
            <Button to="/contact" variant="light">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
