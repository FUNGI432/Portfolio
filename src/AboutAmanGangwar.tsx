import './AboutAmanGangwar.css';
const profileImg = "/me.png";

const frameSvg = "/mcp/eb94ed8e71a81e921acac6f06dbef3fea29f0183.svg";
const fungiLogo = "/mcp/6b97ddf3c76f07f6db8e047255c8e50459b888ef.svg";

export default function AboutAmanGangwar() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Side: Frame & Image */}
        <div className="about-left">
          <img src={frameSvg} alt="Profile Frame" className="about-frame-svg" />
          <div className="about-image-wrapper">
            <img src={profileImg} alt="Aman Gangwar" className="about-profile-img" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="about-right">
          <img src={fungiLogo} alt="FUNGI Logo" className="about-logo" />
          
          <h2 className="about-title">Aman gangwar</h2>
          <h3 className="about-subtitle">FUNGI432</h3>

          <div className="about-desc">
            <p>
              A multidisciplinary operative specialized in converting high-level concepts into clean, <span className="text-green font-bold">high-performance visual experiences</span>. Having led creative squads as <span className="text-green font-bold">President of the Fullstack Club and Design Head for ACM</span>, I have successfully architected and deployed over eight projects for high-stakes startups in a single cycle. My deployments focus on absolute clarity, recently boosting user engagement by <span className="text-green font-bold">30%</span> through innovative UI architecture for entities like Titan Tech Investments.
            </p>
            
            <p className="text-green font-bold about-hobbies-title">OFF-DUTY INTEL // HOBBIES</p>
            
            <ul className="about-hobbies-list">
              <li>Competitive Logic: Optimizing algorithmic performance and solving complex constraints on CodeChef.</li>
              <li>Immersive Rendering: Engineering 3D web environments and high-fidelity car showrooms.</li>
              <li>Algorithmic Mastery: Analyzing time complexity and mastering Data Structures and Algorithms (DSA) for $O(n)$ efficiency.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
