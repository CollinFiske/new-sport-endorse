"use client"
import "../styles/calendly.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";

export default function CalendlyDemo({ agencies = false }) {
  const { language } = useLanguage();
  const t = translations[language];
  
  const demoUrl = agencies 
    ? "https://calendly.com/d/cwcj-xx7-2xn/sport-endorse-demo-agency"
    : "https://calendly.com/d/dzw-nc4-57b/sport-endorse-demo?month=2025-07";
    
  const buttonText = agencies ? "Demo for Agencies" : t.header.demoBtn;

  return (
    <div className="calendly-demo-section">
      <div className="calendly-demo-container">
        <div className="calendly-demo-header">
          <h2 className="calendly-demo-title">See Sport Endorse in Action</h2>
        </div>

        <div className="calendly-demo-content">
          <div className="calendly-demo-image">
            <img src="/images/calendar image.webp" alt="Calendar demo" className="calendar-image" />
          </div>

          <div className="calendly-demo-right">
            <p className="calendly-demo-description">
              Select a time that suits to learn more about our innovative solution and revolutionary platform, 
              set up your account, and use athletes to endorse products and services.
            </p>
            <div className="calendly-demo-button">
              <a target="_blank" href={demoUrl}>
                <button className="agenecy-demo-btn">{buttonText}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}