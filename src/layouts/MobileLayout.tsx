import './MobileLayout.css'

const mobileLogoSvg = '/mcp/mobile_logo.svg'
const linkArrowSvg = '/mcp/BmZmY1Y2I1.svg'

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
      
      <main style={{ padding: '40px 24px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase' }}>
          Mobile Systems <br />
          <span style={{ color: '#c0fe04' }}>Initializing...</span>
        </h1>
        <p style={{ marginTop: '20px', fontSize: '14px', opacity: 0.6, lineHeight: 1.5 }}>
          Implementing brutalist responsive architecture for max-width 428px. Zero PC-asset overhead active.
        </p>
      </main>
    </div>
  )
}
