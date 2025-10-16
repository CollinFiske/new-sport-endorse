"use client";
import "../styles/whyAthletesChooseUs.css";
import AppStores from "./AppStores";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";

export default function WhyAthletesChooseUs() {
  const { language } = useLanguage();
  const t = translations[language].components.whyAthletesChooseUs;
  
  return (
    <section className="why-athletes-section">
      <div className="why-athletes-container">
        <h2 className="why-athletes-title">{t.title}</h2>
        
        <div className="why-athletes-content">
          <div className="why-athletes-text">
            <div className="feature-item">
              <h3 className="feature-title">
                <img src="/images/dollarsign.png" alt="dollar" className="feature-icon" />
                {t.features[0].title}
              </h3>
              <p className="feature-description">
                {t.features[0].description}
              </p>
            </div>

            <div className="feature-item">
              <h3 className="feature-title">
                <img src="/images/trophy.png" alt="trophy" className="feature-icon" />
                {t.features[1].title}
              </h3>
              <p className="feature-description">
                {t.features[1].description}
              </p>
            </div>

            <div className="feature-item">
              <h3 className="feature-title">
                <img src="/images/phone-talent-benefit-pic.png" alt="phone" className="feature-icon" />
                {t.features[2].title}
              </h3>
              <p className="feature-description">
                {t.features[2].description}
              </p>
            </div>
          </div>

          <div className="cta-section">
            <p className="cta-text">{t.ctaText}</p>
            <AppStores />
          </div>
        </div>
      </div>
    </section>
  );
}
