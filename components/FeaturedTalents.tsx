"use client";
import "../styles/featuredTalents.css";

export default function FeaturedTalents() {
  return (
    <section className="featured-talents">
      <div className="header">
        <div>
          <h2>Our Featured Talents</h2>
          <p>Descriptional text dedicated to talents.</p>
        </div>
        <button className="view-all">VIEW ALL (203)</button>
      </div>
      
      <div className="scrollTalents">
        {[...Array(8)].map((_, i) => (
          <div className="talent-card" key={i}>
            <img src="/images/placeholder.png" alt="featured talents image"></img>
            <div className="talent-info">
              <p className="talent-name">FULL NAME</p>
              <div className="all-social-logos">
                <span><img src="/images/instagramLogo.webp" alt="instagram logo" className="social-logo"></img></span>
                <span><img src="/images/tiktokLogo.webp" alt="tiktok logo" className="social-logo"></img></span>
              </div>
              <div className="tags">
                <span>⚽ Football</span>
                <span>🎯 College/Team</span>
                <span>📍 Ohio, USA</span>
              </div>
              <div className="stats">
                <span>📷 9.2k</span>
                <span>🎥 10.0k</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}