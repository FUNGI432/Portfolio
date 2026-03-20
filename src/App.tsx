import './App.css'
import RecentHighlights from './RecentHighlights'
import CodeCreateConquer from './CodeCreateConquer'
import ProjectArchive from './ProjectArchive'
import ProjectsSlider from './ProjectsSlider'
import AboutAmanGangwar from './AboutAmanGangwar'
import Footer from './Footer'
import JeskoModel from './JeskoModel'

const logoSvg = 'https://www.figma.com/api/mcp/asset/6eebde48-48de-47f8-9b77-4f776666fff0'
const linkArrowSvg = 'https://www.figma.com/api/mcp/asset/f4d25014-e68a-43ea-84d6-a1870fff5cb5'
const discordSvg = 'https://www.figma.com/api/mcp/asset/f5825bff-1823-4235-afd8-35a583eb4ac0'
const instagramSvg = 'https://www.figma.com/api/mcp/asset/498c1240-bb13-40f2-a3f9-2e5d95244dbc'
const xSvg = 'https://www.figma.com/api/mcp/asset/1dd1fbfe-45eb-4a8b-b314-226c2524f969'
const heroVideoFallbackImagePng = 'https://www.figma.com/api/mcp/asset/c0f1c6c4-56eb-45d9-a6cf-2d7b0f63a448'
const playIconSvg = 'https://www.figma.com/api/mcp/asset/cc5c67f7-57c7-4107-a780-6aec7d850ec3'
const railVectorSvg = 'https://www.figma.com/api/mcp/asset/bcd1e03d-6b48-4d64-95c2-d81a90bc2594'

function App() {
  const navLinks = ['Case Studies', 'Experience', 'Stack', 'Contact']

  return (
    <>
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
    </>
  )
}

export default App
