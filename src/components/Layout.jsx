import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { salon } from '../data/salon'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    const { colors } = salon
    const root = document.documentElement
    root.style.setProperty('--ivory', colors.ivory)
    root.style.setProperty('--charcoal', colors.charcoal)
    root.style.setProperty('--olive', colors.olive)
    root.style.setProperty('--gold', colors.gold)
    if (colors.goldSoft) {
      root.style.setProperty('--gold-soft', colors.goldSoft)
    }
  }, [])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    // Jump to top on every route change (ignore in-page hash links)
    if (location.hash) return

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [location.pathname, location.key])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
