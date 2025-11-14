"use client";
import { useState, useEffect } from "react";
import "../styles/partnerAgencies.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";

export default function PartnerAgencies() {
  const { language } = useLanguage();
  const t = translations[language].components.partnerAgencies;
  const [showPopup, setShowPopup] = useState(false);
  const [hubspotLoaded, setHubspotLoaded] = useState(false);

  useEffect(() => {
    // Load HubSpot script when component mounts
    const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/embed/4025606.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/4025606.js';
      script.defer = true;
      script.onload = () => {
        setHubspotLoaded(true);
      };
      document.body.appendChild(script);
    } else {
      setHubspotLoaded(true);
    }

    return () => {
      // Cleanup script on unmount
      const scriptToRemove = document.querySelector('script[src="https://js.hsforms.net/forms/embed/4025606.js"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section className="partner-agencies-section">
        <div className="partner-agencies-container">
          <h2 className="partner-agencies-title">
            {t.title}
          </h2>
          
          <p className="partner-agencies-description">
            {t.description}
          </p>

          <button 
            className="partner-button"
            onClick={() => setShowPopup(true)}
          >
            {t.buttonText}
          </button>
        </div>
      </section>

      {/* Popup Form */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              ×
            </button>
            
            {/*<h3 className="popup-title">{t.popup.title}</h3>
            <p className="popup-subtitle">
              {t.popup.subtitle}
            </p>*/}

            <div className="hubspot-form-container">
              {hubspotLoaded ? (
                <div 
                  className="hs-form-frame" 
                  data-region="na1" 
                  data-form-id="b7d1a7f0-b10d-47f5-b8e0-706378e8f229" 
                  data-portal-id="4025606"
                ></div>
              ) : (
                <div className="loading-message">Loading form...</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}