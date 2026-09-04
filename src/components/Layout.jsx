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
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

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
