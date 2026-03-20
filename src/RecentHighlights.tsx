import './RecentHighlights.css'

const highlightsData = [
  {
    date: "03.10.2026",
    title: "JESKO SHOWROOM:\n3D WEB\nARCHITECTURE",
    image: "/mcp/d4f7946d8baee214f1cfdb5f5f8ff9ca87f86aeb.png",
    url: "https://github.com/FUNGI432/Portfolio"
  },
  {
    date: "03.11.2026",
    title: "CODECHEF: FUNGI432\n6* FINALLY!!",
    image: "/mcp/4d6f9c1962883a2eea5577937f38c59ed31cd486.png",
    url: "https://www.codechef.com/users/fungi432"
  },
  {
    date: "23:01:26",
    title: "STUDIES REGARDING\nAI QUANTISATION :\nAIMING FOR A*",
    image: "/mcp/c4fb9e00c4c9701079ac9ed51be59411ff949490.png",
    url: "https://docs.google.com/spreadsheets/d/1zkHnapxbNmib-A3pxFlRZhF1OiQ6TJLSLydV6tk2Eoc/edit?usp=sharing"
  },
  {
    date: "03.06.2026",
    title: "UI/UX LEAD FOR\nFINTECH : FIRST BIG\nROLE",
    image: "/mcp/2064e7d87e688fc0a5785d338955664516968efc.png",
    url: "https://www.linkedin.com/in/aman-gangwar-300822292/?skipRedirect=true"
  }
];

const arrowIcon = "/mcp/f34f49f15c3440f7feab8043317cb4b596a84b91.svg";

export default function RecentHighlights() {
  return (
    <section className="recent-highlights">
      <div className="recent-highlights-header">
        <h2>Recent Highlights</h2>
        <a href="#" className="all-news-btn">
          All news
          <img src={arrowIcon} alt="" className="all-news-icon" />
        </a>
      </div>
      <div className="highlights-grid">
        {highlightsData.map((item, index) => (
          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="highlight-card" 
            key={index}
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            <div className="highlight-image-container">
              <img src={item.image} alt="" className="highlight-image" />
            </div>
            <div className="highlight-content">
              <span className="highlight-date">{item.date}</span>
              <h3 className="highlight-title">
                {item.title.split('\n').map((line, i) => (
                  <span key={i}>{line}<br/></span>
                ))}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
