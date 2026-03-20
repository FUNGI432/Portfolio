import './CodeCreateConquer.css'
import Dither from './Dither';

const arrowSvg = "http://localhost:3845/assets/f34f49f15c3440f7feab8043317cb4b596a84b91.svg";
const textSvg = "http://localhost:3845/assets/1eb590c01b2762a53db2d6b9d3a443a97c071fcf.svg";

export default function CodeCreateConquer() {
  return (
    <section className="ccc-section">
      <div className="ccc-left">
        <img src={textSvg} alt="I like to CODE, CREATE, CONQUER." className="ccc-text-svg" />

        <div className="ccc-info-box">
          <h3>A PLAYGROUND OF PIXELS & LOGIC.</h3>
          <p>
            Bridging the gap between the canvas and the compiler. Navigate through the rugged landscapes of Figma designs and the security outposts of backend architecture. I don't just build websites; I engineer digital worlds that are powerful, configurable, and built to withstand the scrutiny of the "next run."
          </p>
          <a href="#" className="ccc-youtube-btn">
            Watch on Youtube
            <img src={arrowSvg} alt="" />
          </a>
        </div>
      </div>

      <div className="ccc-right" style={{ width: '100%', minHeight: '600px', position: 'relative' }}>
        <Dither
          waveColor={[0.5,0,1]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.9}
          colorNum={3.7}
          waveAmplitude={0.19}
          waveFrequency={3}
          waveSpeed={0.03}
        />
      </div>
    </section>
  )
}
