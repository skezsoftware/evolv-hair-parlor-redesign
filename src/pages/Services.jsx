import { salon } from '../data/salon'
import { usePageTitle } from '../hooks/usePageTitle'
import ServiceCategory from '../components/ServiceCategory'
import PageHero from '../components/PageHero'
import Button from '../components/Button'

export default function Services() {
  usePageTitle('Services')

  return (
    <div className="menu-page">
      <PageHero
        image={salon.images.tools}
        eyebrow="Services"
        title="Life isn’t perfect, but your hair can be."
        subtitle="Cuts, color, shaves, and finishing services for men and women."
      />

      <div className="menu-nav-wrap">
        <nav className="container menu-nav" aria-label="Service categories">
          {salon.services.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              {category.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="container">
        <div className="menu-toolbar">
          <p>
            Questions about a service not listed? Call{' '}
            <a href={salon.phone.href}>{salon.phone.display}</a>.
          </p>
          <Button href={salon.primaryCta.href}>{salon.primaryCta.label}</Button>
        </div>

        {salon.services.map((category) => (
          <ServiceCategory key={category.id} category={category} />
        ))}
        <p className="menu-disclaimer">{salon.servicesDisclaimer}</p>
      </div>
    </div>
  )
}
