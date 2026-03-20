import './Footer.css';
import MetallicPaint from './MetallicPaint';

const imgRight = "/mcp/223e479e9cfecd464afc2d23ab1bdf6aaf5e6b1e.svg";
const imgLogoAnim = "/mcp/6b97ddf3c76f07f6db8e047255c8e50459b888ef.svg";
const imgArrowW = "/mcp/1860badccf318a3a0082315591e809b5996b147a.svg";
const imgArrowG = "/mcp/366010e44f520854f6275354264f5906a520ba73.svg";
const imgFungiText = "/mcp/90ee2288c309969f736ee99f78c7f44709be9896.svg";
const imgCookie = "/mcp/8c23c2cd0effd1cd1a84f553c3195b530ea6cb59.svg";
const mobileHeroVector = '/mcp/mobile_hero_vector.svg';

export default function Footer() {
  return (
    <footer className="footer-v2-section">
      {/* Background Graphic */}
      <img src={imgRight} alt="" className="footer-right-mesh" />

      <div className="f2-container">

        {/* UPPER ROW GRID */}
        <div className="f2-upper-grid">

          {/* Logo Anim Box */}
          <div className="f2-box f2-logo-box">
            <div className="f2-logo-anim relative overflow-hidden">
              <MetallicPaint
                imageSrc={imgLogoAnim}
                seed={42}
                scale={4}
                patternSharpness={0.3}
                noiseScale={0.5}
                speed={0.25}
                liquid={1}
                mouseAnimation={false}
                brightness={2}
                contrast={0.5}
                refraction={0.01}
                blur={0.015}
                chromaticSpread={2}
                fresnel={2}
                angle={-9}
                waveAmplitude={1}
                distortion={0.4}
                contour={0.2}
                lightColor="#C0FE04"
                darkColor="#000000"
                tintColor="#C0FE04"
              />
            </div>
          </div>

          {/* Socials & Quotes Column */}
          <div className="f2-col-mid">
            {/* Socials Box */}
            <div className="f2-box border-green f2-socials-box">
              <ul className="f2-list text-white">
                <li><img src={imgArrowW} alt=">" className="f2-icon" /> DISCORD</li>
                <li><img src={imgArrowW} alt=">" className="f2-icon" /> INSTAGRAM</li>
                <li><img src={imgArrowW} alt=">" className="f2-icon" /> X</li>
                <li><img src={imgArrowW} alt=">" className="f2-icon" /> WHATSAPP</li>
              </ul>
            </div>
            {/* Quotes Box */}
            <div className="f2-box border-green f2-quote-box">
              <p className="f2-quote-small">COMPLEXITY IS THE ENEMY OF EXECUTION. I BUILD FOR</p>
              <h3 className="f2-quote-large">CLARITY<br />PERFORMANCE<br />AND <span className="text-purple">IMPACT.</span></h3>
            </div>
          </div>

          {/* Right Links Column */}
          <div className="f2-box border-white f2-links-box">
            <ul className="f2-list text-green">
              <li><img src={imgArrowG} alt=">" className="f2-icon" /> CONTACT</li>
              <li><img src={imgArrowG} alt=">" className="f2-icon" /> LEGAL</li>
              <li><img src={imgArrowG} alt=">" className="f2-icon" /> TERMS OF USE</li>
              <li><img src={imgArrowG} alt=">" className="f2-icon" /> CAREERS</li>
              <li><img src={imgArrowG} alt=">" className="f2-icon" /> PRESS</li>
              <li><img src={imgArrowG} alt=">" className="f2-icon" /> CREATORS</li>
              <li><img src={imgArrowG} alt=">" className="f2-icon" /> DO NOT SELL MY PERSONAL INFORMATION</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="f2-bottom-row">
          <div className="f2-fungi-text-box">
            <img src={imgFungiText} alt="FUNGI432" className="f2-fungi-graphic desktop-only-footer-logo" />
            <div className="mobile-only-footer-logo">
              <img src={mobileHeroVector} alt="FUNGI432" />
            </div>
          </div>
          <div className="f2-cookie-box">
            <img src={imgCookie} alt="Cookie" className="f2-cookie-img" />
            <p className="f2-cookie-text">
              YOU GET A <span className="text-green font-semibold">COOKIE</span> FOR COMING THIS FAR ALONG MY WEBSITE!! AREN'T YOU HAPPY? WAIT... WHO TOOK A <span className="text-purple font-bold">BITE?</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
