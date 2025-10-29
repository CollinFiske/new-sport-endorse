"use client";
import "../styles/featuredTalents.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";
import { getAllFeaturedTalents } from "../utils/featuredTalentsData";

export default function FeaturedTalents() {
  const { language } = useLanguage();
  const t = translations[language].components.featuredTalents;
  const talents = getAllFeaturedTalents(language as 'en' | 'es' | 'de');

  return (
    <section className="featured-talents">
      <div className="header">
        <div>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
      </div>
      
      <div className="scrollTalents">
        {talents.map((talent, i) => (
          <div className="talent-card" key={i}>
            <img src={talent.image} alt={`${talent.name} profile`}></img>
            <div className="talent-info">
              <p className="talent-name">{talent.name}</p>
              <div className="all-social-logos">
                {talent.followingInstagram && (
                  <div className="social-platform">
                    <img src="/images/instagramLogo.webp" alt="instagram logo" className="social-logo" />
                    <p className="follower-count">{talent.followingInstagram}</p>
                  </div>
                )}
                {talent.followingTiktok && (
                  <div className="social-platform">
                    <img src="/images/tiktokLogo.webp" alt="tiktok logo" className="social-logo" />
                    <p className="follower-count">{talent.followingTiktok}</p>
                  </div>
                )}
              </div>
              <div className="tags">
                <span><img src="/images/trophy.png" className="tag-icon"/>{talent.sport}</span>
                <span><img src="/images/location.png" className="tag-icon"/>{talent.location}</span>
              </div>
            </div>
          </div>
        ))}
        
        {/* CTA Card */}
        <a target="_blank" href="https://platform.sportendorse.com/signup/brand" className="cta-card">
          <img src="/images/whiteSportEndorseLogo.webp" alt="Sport Endorse logo" />
          <h3>{t.viewAll}</h3>
        </a>
      </div>
    </section>
  );
}