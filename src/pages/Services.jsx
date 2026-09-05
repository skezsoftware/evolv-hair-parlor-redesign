import { useEffect, useState } from 'react'
import { salon } from '../data/salon'
import { usePageTitle } from '../hooks/usePageTitle'
import ServiceCategory from '../components/ServiceCategory'
import PageHero from '../components/PageHero'
import Button from '../components/Button'

export default function Services() {
  usePageTitle('Services')
  const [activeId, setActiveId] = useState(salon.services[0]?.id ?? '')

  useEffect(() => {
    const sections = salon.services
      .map((category) => document.getElementById(category.id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        root: null,
        // Account for sticky site nav + category nav
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const activeLink = document.querySelector(
      `.menu-nav a[href="#${activeId}"]`,
    )
    activeLink?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [activeId])

  return (
    <div className="menu-page">
      <PageHero
        className="page-hero--anchor-top"
        image={salon.images.tools}
        objectPosition="center top"
        eyebrow="Services"
        title="Life isn’t perfect, but your hair can be."
        subtitle="Cuts, color, shaves, and finishing services for men and women."
      />

      <div className="menu-nav-wrap">
        <nav className="container menu-nav" aria-label="Service categories">
          {salon.services.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className={activeId === category.id ? 'is-active' : undefined}
              aria-current={activeId === category.id ? 'true' : undefined}
            >
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
          <Button to={salon.primaryCta.to}>{salon.primaryCta.label}</Button>
        </div>

        {salon.services.map((category) => (
          <ServiceCategory key={category.id} category={category} />
        ))}
        <p className="menu-disclaimer">{salon.servicesDisclaimer}</p>
      </div>
    </div>
  )
}
