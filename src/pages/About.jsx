import { getImage, salon } from '../data/salon'
import { usePageTitle } from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import SafeImage from '../components/SafeImage'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  usePageTitle('Our Story')
  const { about, founder } = salon

  return (
    <>
      <PageHero
        image={salon.images.brick}
        eyebrow={about.eyebrow}
        title={about.title}
        subtitle={about.lead}
      />

      <section className="section">
        <div className="container">
          <blockquote className="story-quote">
            <p>“{about.quote.text}”</p>
            <cite>— {about.quote.attribution}</cite>
          </blockquote>
          <SectionHeading
            eyebrow={`Since ${salon.established}`}
            title="A hybrid salon built on craft."
          />
          <div className="story-prose">
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="image-band">
        <SafeImage
          src={salon.images.salonInterior}
          alt="Êvolv Hair Parlor salon interior"
        />
      </div>

      <section className="section">
        <div className="container chef-grid">
          <div className="chef-media">
            <SafeImage
              src={getImage(founder.imageKey)}
              alt={founder.name}
              hover
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={founder.title}
              title={founder.name}
              subtitle="Cutting hair since age eleven. Teaching the craft every day."
            />
            <div className="story-prose">
              {founder.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Philosophy"
            title={about.philosophy.title}
            subtitle={about.philosophy.text}
          />
          <div className="philosophy-grid">
            {about.philosophy.points.map((point) => (
              <article className="philosophy-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading eyebrow="The Space" title={about.interior.title} />
            <p className="notes" style={{ marginTop: '1.2rem' }}>
              {about.interior.text}
            </p>
          </div>
          <div className="split-media">
            <SafeImage
              src={salon.images.chair}
              alt="Brick and black-and-white salon interior"
              hover
            />
          </div>
        </div>
      </section>
    </>
  )
}
