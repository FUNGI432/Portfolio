import './MobileLayout.css'

const mobileLogoSvg = '/mcp/mobile_logo.svg'
const linkArrowSvg = '/mcp/BmZmY1Y2I1.svg'
const mobileHeroBg = '/mcp/mobile_hero_bg.png'
const mobileHeroVector = '/mcp/mobile_hero_vector.svg'
const mobileHeroArrow = '/mcp/mobile_hero_arrow.svg'

export default function MobileLayout() {
  return (
    <div className="mobile-layout">
      <header className="mobile-navbar">
        <a href="#" className="mobile-navbar-logo">
          <img src={mobileLogoSvg} alt="FUNGI432" />
        </a>
        
        <a href="#" className="mobile-hire-button">
          <span>hire me</span>
          <img src={linkArrowSvg} alt="" />
        </a>
      </header>
      
      <main className="mobile-landing">
        <section className="mobile-hero-bg">
          <img className="mobile-hero-image" src={mobileHeroBg} alt="" />
          <div className="mobile-hero-vector">
            <img src={mobileHeroVector} alt="" />
          </div>
        </section>

        <section className="mobile-info-panel">
          <h1>Aman Gangwar</h1>
          <p>
            Building immersive 3D web experiences and high-performance applications with React, Three.js, and Algorithmic Precision.
          </p>
          <a href="#" className="mobile-landing-button">
            <span>Explore Projects</span>
            <img src={mobileHeroArrow} alt="" />
          </a>
        </section>
      </main>
    </div>
  )
}
