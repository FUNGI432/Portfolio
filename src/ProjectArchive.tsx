import './ProjectArchive.css';
import DarkVeil from './DarkVeil';

const arrowSvg = "/mcp/f8cad7aed88d65ea819c51c45509e6501fe81acf.svg";
const metaSvg = "/mcp/d0d8af7f3749d9ec8179613453fa11cf7c52ce7d.svg";

export default function ProjectArchive() {
  return (
    <section className="pa-section" id="project-archive">
      <div className="pa-top-row">
        <h2 className="pa-title">
          PROJECT<br />
          ARCHIVE
        </h2>
        
        <div className="pa-desc-container">
          <h3 className="pa-desc-title">
            DEPLOYMENT DATA // <br />
            SYSTEM REPOSITORY
          </h3>
          <p className="pa-desc-text">
            The following repository contains a curated feed of high-performance design and development units. From architecting 3D web environments to engineering precision UI/UX for tech firms like Titan Tech Investments, each deployment is a tactical response to complex constraints. Accuracy is mandatory; results are verified. Review the technical specs before engagement.
          </p>
        </div>
      </div>

      <div className="pa-banner-container">
        <div className="pa-corner top-left"></div>
        <div className="pa-corner top-right"></div>
        <div className="pa-corner bottom-left"></div>
        <div className="pa-corner bottom-right"></div>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.08}
          scanlineIntensity={1}
          speed={3}
          scanlineFrequency={2.7}
          warpAmount={4.7}
        />
      </div>

      <div className="pa-bottom-row">
        <a href="https://github.com/FUNGI432" target="_blank" rel="noopener noreferrer" className="pa-deploy-btn">
          DEPLOYMENTS
          <img src={arrowSvg} alt="" className="pa-arrow" />
        </a>

        <img src={metaSvg} alt="Metadata and Logo" className="pa-meta-svg" />
      </div>

      <div className="pa-meta-footer">
        RESTRICTED TO CLEARED PERSONNEL &nbsp;&nbsp;&nbsp; MAY CONTAIN TOXIC
      </div>
    </section>
  );
}
