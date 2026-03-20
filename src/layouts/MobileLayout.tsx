import './MobileLayout.css'

import JeskoModel from '../JeskoModel'
import RecentHighlights from '../RecentHighlights'
import ProjectArchive from '../ProjectArchive'
import ProjectsSlider from '../ProjectsSlider'
import AboutAmanGangwar from '../AboutAmanGangwar'
import Footer from '../Footer'

const mobileLogoSvg = '/mcp/mobile_logo.svg'
const mobileHeroVector = '/mcp/mobile_hero_vector.svg'
const mobileHeroArrow = '/mcp/mobile_hero_arrow.svg'

export default function MobileLayout() {
  return (
    <div className="mobile-layout">
      <header className="mobile-navbar">
        <a href="#" className="mobile-navbar-logo">
          <img src={mobileLogoSvg} alt="FUNGI432" />
        </a>

        <a href="https://wa.me/919650289104" target="_blank" rel="noopener noreferrer" className="mobile-hire-button">
          <span>hire me</span>
        </a>
      </header>

      <main className="mobile-landing">
        <section className="mobile-hero-bg">
          <JeskoModel />
        </section>

        <div className="mobile-hero-vector">
          <img src={mobileHeroVector} alt="" />
        </div>

        <section className="mobile-info-panel">
          <h1>Aman Gangwar</h1>
          <p>
            Building immersive 3D web experiences and high-performance applications with React, Three.js, and Algorithmic Precision.
          </p>
          <a href="#project-archive" className="mobile-landing-button">
            <span>Explore Projects</span>
            <img src={mobileHeroArrow} alt="" />
          </a>
        </section>
      </main>
      
      <RecentHighlights />
      <ProjectArchive />
      <ProjectsSlider />
      <AboutAmanGangwar />
      <Footer />
    </div>
  )
}
