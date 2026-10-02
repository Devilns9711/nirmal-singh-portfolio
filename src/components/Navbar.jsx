import { useEffect, useState } from 'react'
import services from '../data/services.js'
import '../styles/Navbar.css'

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  //{ href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo">Devil<span className="navbar__cursor">_</span></a>

        <nav className="navbar__links navbar__links--desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="pencil-link">{l.label}</a>
          ))}

          <div
            className="navbar__dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="navbar__dropdown-trigger"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              <span className="pencil-link">free services</span>
              <span className={`navbar__dropdown-arrow ${servicesOpen ? 'navbar__dropdown-arrow--open' : ''}`}>
                ▾
              </span>
            </button>

            {servicesOpen && (
              <div className="navbar__dropdown-menu">
                {services.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="navbar__dropdown-item"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <a href="/NirmalSinghResume.pdf" download className="navbar__resume">Resume ↓</a>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="navbar__links navbar__links--mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}

          <div className="navbar__mobile-services">
            <p className="navbar__mobile-services-label">free services</p>
            {services.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
            ))}
          </div>

          <a 
            href="/NirmalSinghResume.pdf" 
            download 
            className="navbar__resume-mobile"
            onClick={() => setOpen(false)}
          >
            Download Resume ↓
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar
