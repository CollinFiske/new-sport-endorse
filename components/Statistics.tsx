
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
        <p>
          Unlock actionable insights with our advanced analytics, empowering you to optimize your sports marketing strategies.
        </p>
        <div className="live-badge">
          <span className="dot"></span> Live
        </div>
      </div>
      <div className="statistics-grid">
        <div className="stat-box">
          <div className="stat-content">
            <span>🏃‍♂️</span>
            <h3>{athletes.toLocaleString()}</h3>
          </div>
          <p>Athletes</p>
        </div>
        <div className="stat-box">
          <div className="stat-content">
            <span>🏷️</span>
            <h3>{brands.toLocaleString()}</h3>
          </div>
          <p>Brands</p>
        </div>
        <div className="stat-box">
          <div className="stat-content">
            <span>🌍</span>
            <h3>{sports.toLocaleString()}</h3>
          </div>
          <p>Sports Represented</p>
        </div>
        <div className="stat-box">
          <div className="stat-content">
            <span>🗣️</span>
            <h3>{nationalities.toLocaleString()}</h3>
          </div>
          <p>Nationalities</p>
        </div>
      </div>
    </section>
  );
}
