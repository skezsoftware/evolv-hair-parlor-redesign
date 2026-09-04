import { salon } from '../data/salon'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/Button'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>This page doesn’t exist.</h1>
      <p>
        The page you’re looking for isn’t at {salon.name}. Head home, or call to
        book your next appointment.
      </p>
      <div className="btn-group" style={{ justifyContent: 'center' }}>
        <Button to="/">Back Home</Button>
        <Button href={salon.primaryCta.href} variant="secondary">
          {salon.primaryCta.label}
        </Button>
      </div>
    </section>
  )
}
