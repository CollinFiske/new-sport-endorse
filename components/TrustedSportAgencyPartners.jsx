"use client";
import { useState, useEffect } from "react";
import "../styles/trustedSportAgencyPartners.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";

export default function TrustedSportAgencyPartners() {
  const { language } = useLanguage();
  const t = translations[language].components.trustedSportAgencyPartners;
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Load HubSpot script
    if (!document.querySelector('script[src="https://js.hsforms.net/forms/embed/4025606.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/4025606.js';
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section className="trusted-partners-section">
        <div className="trusted-partners-container">
          <div className="trusted-partners-label">
            <span>◉ {t.label}</span>
          </div>
          
          <h2 className="trusted-partners-title">
            {t.title}
          </h2>
          
          <p className="trusted-partners-description">
            {t.description}
          </p>

          <p className="trusted-partners-disclaimer">
            {t.disclaimer}
          </p>

          <button 
            className="referral-button"
            onClick={() => setShowPopup(true)}
          >
            {t.buttonText}
          </button>
        </div>
      </section>

      {/* HubSpot Form Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              x
            </button>
            
            {/*<h3 className="popup-title">{t.popup.title}</h3>
            <p className="popup-subtitle">
              {t.popup.subtitle}
            </p>*/}

            <div className="hs-form-frame" data-region="na1" data-form-id="64c220d8-15e4-41f0-ad21-2de63ab8377b" data-portal-id="4025606"></div>
          </div>
        </div>
      )}
    </>
  );
}
