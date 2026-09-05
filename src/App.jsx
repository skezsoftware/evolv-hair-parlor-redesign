import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Team from './pages/Team'
import Spotlight from './pages/Spotlight'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './styles/components.css'
import './styles/pages.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Navigate to="/services" replace />} />
          <Route path="/book" element={<Navigate to="/team" replace />} />
          <Route path="/private-dining" element={<Navigate to="/team" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
