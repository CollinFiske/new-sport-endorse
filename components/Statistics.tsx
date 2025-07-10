
"use client";
import "../styles/statistics.css";

interface StatisticsProps {
  athletes: number;
  brands: number;
  sports: number;
  nationalities: number;
}

export default function StatisticsSection({ athletes, brands, sports, nationalities }: StatisticsProps) {
  return (
    <section className="statistics-section">
      <div className="statistics-header">
        <h2>Statistics</h2>
        <p style={{width:"50%"}}>
          Unlock actionable insights with our advanced analytics, empowering you to optimize your sports marketing strategies.
        </p>
        <div className="live-badge">
          <span className="dot"></span> Live
        </div>
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
            <img src="/images/statistics/price-tag.png" alt="Brands icon" style={{backgroundColor:"#F6B014"}}/>
            <h3>{brands.toLocaleString()}</h3>
          </div>
          <hr className="stats-bar"/>
          <p>Brands</p>
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
