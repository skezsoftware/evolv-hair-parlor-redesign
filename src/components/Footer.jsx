import { Link } from 'react-router-dom'
import { navLinks, salon } from '../data/salon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container-wide footer-grid">
        <div>
          <Link to="/" className="footer-brand" aria-label={`${salon.name} home`}>
            <img
              className="footer-brand__logo"
              src={salon.images.logoLight}
              alt={salon.name}
              width={220}
              height={94}
            />
          </Link>
          <p className="footer-tagline">{salon.tagline}</p>
        </div>

        <div>
          <h2>Visit</h2>
          <ul className="footer-list">
            <li>
              <a href={salon.address.mapsUrl} target="_blank" rel="noreferrer">
                {salon.address.street}
                <br />
                {salon.address.city}, {salon.address.state} {salon.address.zip}
              </a>
            </li>
            <li>
              <a href={salon.address.mapsUrl} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </li>
            <li>
              <a href={salon.phone.href}>{salon.phone.display}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Explore</h2>
          <ul className="footer-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            {salon.social.map((item) => (
              <li key={item.name}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Hours</h2>
          <ul className="footer-hours">
            {salon.hours.map((item) => (
              <li key={item.days}>
                <span>{item.days}</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-wide footer-bottom">
        <p>
          © {year} {salon.name}. A hybrid salon in Hillcrest, San Diego.
        </p>
        <p>Est. {salon.established}</p>
      </div>
    </footer>
  )
}
