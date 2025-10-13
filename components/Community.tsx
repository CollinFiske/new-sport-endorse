"use client";
import "../styles/community.css";

interface CommunityProps {
  showAgencies?: boolean;
}

export default function Community({ showAgencies = false }: CommunityProps) {
  // Hard-coded values
  const athletes = "6500+";
  const brands = "650+";
  const agencies = "20+";
  const sports = "150+";
  const nationalities = "100+";

  return (
    <section className="statistics-section">
      <div className="live-badge">
        <span className="dot"></span> Live
      </div>
      <div className="statistics-header">
        <h2>Our Growing Community</h2>
        {/*<p style={{width:"50%"}}>
          Unlock actionable insights with our advanced analytics, empowering you to optimize your sports marketing strategies.
        </p>*/}
      </div>
      <div className="statistics-grid">
        <div className="stat-box">
          <div className="stat-content">
            <img src="/images/statistics/athlete.png" alt="Athletes icon" style={{backgroundColor:"#18A0FB"}}/>
            <h3>{athletes.toLocaleString()}</h3>
          </div>
          <hr className="stats-bar"/>
          <p>Athletes</p>
        </div>
        <div className="stat-box">
          <div className="stat-content">
            <img src="/images/statistics/price-tag.png" alt={showAgencies ? "Agencies icon" : "Brands icon"} style={{backgroundColor:"#F6B014"}}/>
            <h3>{showAgencies ? agencies : brands}</h3>
          </div>
          <hr className="stats-bar"/>
          <p>{showAgencies ? "Agencies" : "Brands"}</p>
        </div>
        <div className="stat-box">
          <div className="stat-content">
            <img src="/images/statistics/soccer-ball.png" alt="Sports icon" style={{backgroundColor:"#83BF24"}}/>
            <h3>{sports.toLocaleString()}</h3>
          </div>
          <hr className="stats-bar"/>
          <p>Sports Represented</p>
        </div>
        <div className="stat-box">
          <div className="stat-content">
            <img src="/images/statistics/languages.png" alt="Nationalities icon" style={{backgroundColor:"#FF5151"}}/>
            <h3>{nationalities.toLocaleString()}</h3>
          </div>
          <hr className="stats-bar"/>
          <p>Nationalities</p>
        </div>
      </div>
    </section>
  );
}
