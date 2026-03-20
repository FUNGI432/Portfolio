import './App.css'
import RecentHighlights from './RecentHighlights'
import CodeCreateConquer from './CodeCreateConquer'
import ProjectArchive from './ProjectArchive'
import ProjectsSlider from './ProjectsSlider'
import AboutAmanGangwar from './AboutAmanGangwar'
import Footer from './Footer'
import JeskoModel from './JeskoModel'
import LoadingScreen from './LoadingScreen'
import { useState } from 'react'

const logoSvg = '/mcp/Y2NjZmZmYw.svg'
const linkArrowSvg = '/mcp/BmZmY1Y2I1.svg'
const discordSvg = '/mcp/gzZWI0YWMw.svg'
const instagramSvg = '/mcp/k1MjQ0ZGJj.svg'
const xSvg = '/mcp/I1MjRmOTY5.svg'
const playIconSvg = '/mcp/dkODUwZWMz.svg'
const railVectorSvg = '/mcp/kwYmMyNTk0.svg'

function App() {
  const [loading, setLoading] = useState(true);
  const navLinks = ['Case Studies', 'Experience', 'Stack', 'Contact']

  return (
    <>
      <LoadingScreen onFinished={() => setLoading(false)} />
      
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 1s ease-in-out' }}>
        <header className="navbar" data-node-id="1:502">
        <a className="navbarLogo" href="#" aria-label="Homepage">
          <img src={logoSvg} alt="" />
        </a>

        <nav className="navbarNav" aria-label="Primary">
          {navLinks.map((label) => (
            <a key={label} href="#" className="navbarLink">
              <span>{label}</span>
              <img src={linkArrowSvg} alt="" />
            </a>
          ))}
        </nav>

        <div className="navbarSocial">
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

        <a className="hireButton" href="#">
          <span>Hire Me</span>
          <img src={linkArrowSvg} alt="" />
        </a>
      </header>

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
      <CodeCreateConquer />
      <ProjectArchive />
      <ProjectsSlider />
      <AboutAmanGangwar />
      <Footer />
      </div>
    </>
  )
}

export default App
