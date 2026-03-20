import './ProjectsSlider.css';
import DomeGallery from './DomeGallery';
import { useMediaQuery } from './hooks/useMediaQuery';

const bgTitantech = "/mcp/c6785b1fd698d3514fc4417b19fc4ceba85009a3.png";
const bgSenera = "/mcp/e37aadf09efb655a371c3e71c29096bee7d805ea.png";
const arrowWhite = "/mcp/276c3551c4be3171577d6a19dae569774735a47d.svg";
const arrowBlack = "/mcp/f8cad7aed88d65ea819c51c45509e6501fe81acf.svg";

export default function ProjectsSlider() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className="ps-section">
      
      {/* Zone 1: Titantech */}
      <div className="ps-slide">
        <img src={bgTitantech} alt="Titantech" className="ps-bg" />
        <div className="ps-info-container bottom-left">
          <div className="ps-info-shadow bg-purple"></div>
          <div className="ps-info-box border-green text-black bg-white">
            <span className="ps-pre-title">PRECISION ARCHITECTURE // WEALTH REDEFINED</span>
            <h2 className="ps-title">TITANTECH INVESTMENTS</h2>
            <p className="ps-desc">
              A masterclass in rapid, high-precision execution. Following a rigorous 60-day design evolution, the final infrastructure was pushed to production in a high-stakes 7-day sprint by a specialized squad of three. This deployment features a complete wealth management ecosystem, integrating complex data streams into a seamless, high-performance client dashboard.
            </p>
            <a href="https://testoftitan.vercel.app/" target="_blank" rel="noopener noreferrer" className="ps-btn btn-black">
              EXPLORE DEPLOYMENT <img src={arrowWhite} alt="" className="ps-arrow" />
            </a>
          </div>
        </div>
      </div>

      {/* Zone 2: Senera */}
      <div className="ps-slide">
        <img src={bgSenera} alt="Senera" className="ps-bg" />
        <div className="ps-info-container bottom-left">
          <div className="ps-info-shadow bg-green"></div>
          <div className="ps-info-box border-purple text-black bg-white">
            <span className="ps-pre-title">DETERMINISTIC ENGINE</span>
            <h2 className="ps-title">SENERA:<br/>DETERMINISTIC ENGINE</h2>
            <p className="ps-desc">
              Engineered a high-stakes landing experience for SENERA, a direct competitor to Perplexity and Comet. The goal was to translate complex, deterministic action-block technology into a clean, high-performance UI that prioritizes speed and user clarity.
            </p>
          </div>
        </div>
      </div>

      {/* Zone 3: Visual Intelligence */}
      <div className="ps-slide">
        <div className="ps-bg">
          <DomeGallery
            fit={isMobile ? 0.3 : 0.5}
            minRadius={isMobile ? 1200 : 2000}
            maxVerticalRotationDeg={8}
            segments={34}
            dragDampening={5}
            grayscale
          />
        </div>
        <div className="ps-info-container bottom-right">
          <div className="ps-info-shadow bg-green"></div>
          <div className="ps-info-box border-purple text-white bg-black dark-border">
            <span className="ps-pre-title">DEATH HANGS ABOVE</span>
            <h2 className="ps-title">VISUAL <span className="text-green">INTELLIGENCE</span></h2>
            <p className="ps-desc">
              A vast repository of graphic artifacts curated from years of multidisciplinary exploration. These frames represent more than just static design; they are the fragmented data points of a visual identity in constant evolution. From minimalist branding to complex digital layouts, every asset is engineered to cut through the noise and deliver high-impact clarity. Study the patterns. Analyze the composition. Find the signal.
            </p>
            <a href="https://drive.google.com/drive/folders/10XaL9UDlKPBt4lRQW3HagFD9ctXxDvi3?usp=sharing" target="_blank" rel="noopener noreferrer" className="ps-btn btn-white">
              VIEW FULL ARCHIVE <img src={arrowBlack} alt="" className="ps-arrow" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
