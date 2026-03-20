import RecentHighlights from '../RecentHighlights'
import ProjectArchive from '../ProjectArchive'
import ProjectsSlider from '../ProjectsSlider'
import AboutAmanGangwar from '../AboutAmanGangwar'
import Footer from '../Footer'
import JeskoModel from '../JeskoModel'
import { useState, useEffect } from 'react'

const logoSvg = '/mcp/Y2NjZmZmYw.svg'
const linkArrowSvg = '/mcp/BmZmY1Y2I1.svg'
const discordSvg = '/mcp/gzZWI0YWMw.svg'
const instagramSvg = '/mcp/k1MjQ0ZGJj.svg'
const xSvg = '/mcp/I1MjRmOTY5.svg'
const playIconSvg = '/mcp/dkODUwZWMz.svg'
const railVectorSvg = '/mcp/kwYmMyNTk0.svg'

export default function DesktopLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ['Case Studies', 'Experience', 'Stack', 'Contact']

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="navbar" data-node-id="1:502">
        <a className="navbarLogo" href="#" aria-label="Homepage">
          <img src={logoSvg} alt="" />
        </a>

        <nav className="navbarNav desktop-only" aria-label="Primary">
          {navLinks.map((label) => (
            <a key={label} href="#" className="navbarLink">
              <span>{label}</span>
              <img src={linkArrowSvg} alt="" />
            </a>
          ))}
        </nav>

        <div className="navbarSocial desktop-only">
          <a href="#" aria-label="Discord">
            <img src={discordSvg} alt="" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={instagramSvg} alt="" />
          </a>
          <a href="#" aria-label="X">
            <img src={xSvg} alt="" />
          </a>
        </div>

        <a className="hireButton desktop-only" href="#">
          <span>Hire Me</span>
          <img src={linkArrowSvg} alt="" />
        </a>

        <button 
          className="mobileMenuToggle mobile-only" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      <div className={`mobileMenuOverlay ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobileNavLinks">
          {navLinks.map((label) => (
            <a key={label} href="#" className="mobileNavLink" onClick={() => setMobileMenuOpen(false)}>
              <span>{label}</span>
              <img src={linkArrowSvg} alt="" />
            </a>
          ))}
        </nav>
        
        <div className="mobileNavBottom">
          <div className="mobileSocial">
            <a href="#" aria-label="Discord"><img src={discordSvg} alt="" /></a>
            <a href="#" aria-label="Instagram"><img src={instagramSvg} alt="" /></a>
            <a href="#" aria-label="X"><img src={xSvg} alt="" /></a>
          </div>
          <a className="mobileHireButton" href="#" onClick={() => setMobileMenuOpen(false)}>
            <span>Hire Me</span>
            <img src={linkArrowSvg} alt="" />
          </a>
        </div>
      </div>

      <main className="landing" aria-label="Landing section" data-node-id="39:84">
        <section className="landingHero" style={{ position: 'relative' }}>
          <JeskoModel />
          <button className="landingPlayButton" type="button" aria-label="Play intro" style={{ zIndex: 10 }}>
            <img src={playIconSvg} alt="" />
          </button>

          <div className="landingInfoPanel">
            <h1>Aman Gangwar</h1>
            <p>
              Building immersive 3D web experiences and high-performance applications with React, Three.js, and
              algorithmic precision.
            </p>
            <a className="landingExploreButton" href="#">
              <span>Explore Projects</span>
              <img src={linkArrowSvg} alt="" />
            </a>
          </div>
        </section>

        <aside className="landingRail" aria-hidden="true">
          <img className="landingRailImage" src={railVectorSvg} alt="" data-node-id="54:13" />
        </aside>
      </main>
      <RecentHighlights />
      <ProjectArchive />
      <ProjectsSlider />
      <AboutAmanGangwar />
      <Footer />
    </>
  )
}
