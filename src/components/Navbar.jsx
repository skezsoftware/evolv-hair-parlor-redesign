import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks, salon } from '../data/salon'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24)
  const location = useLocation()
  const overlay = location.pathname === '/' && !scrolled && !open

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const headerClass = [
    'site-header',
    overlay ? 'site-header--overlay' : 'site-header--solid',
    scrolled ? 'is-scrolled' : '',
    open ? 'is-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClass}>
      <div className="container-wide nav-bar">
        <Link
          className="brand"
          to="/"
          aria-label={`${salon.name} home`}
          onClick={() => setOpen(false)}
        >
          <img
            className="brand__logo brand__logo--dark"
            src={salon.images.logo}
            alt=""
            width={185}
            height={79}
          />
          <img
            className="brand__logo brand__logo--light"
            src={salon.images.logoLight}
            alt=""
            width={185}
            height={79}
          />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Button to={salon.primaryCta.to}>{salon.primaryCta.label}</Button>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav ${open ? 'is-open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <Button to={salon.primaryCta.to} onClick={() => setOpen(false)}>
          {salon.primaryCta.label}
        </Button>
      </nav>
    </header>
  )
}
