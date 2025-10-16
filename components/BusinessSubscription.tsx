"use client";
import "../styles/businessSubscription.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";

export default function BusinessSubscription() {
  const { language } = useLanguage();
  const t = translations[language].components.businessSubscription;
  const features = [
    { name: t.features[0], trial: true, quarterly: true, annual: true },
    { name: t.features[1], trial: true, quarterly: true, annual: true },
    { name: t.features[2], trial: true, quarterly: true, annual: true },
    { name: t.features[3], trial: true, quarterly: true, annual: true },
    { name: t.features[4], trial: true, quarterly: true, annual: true },
    { name: t.features[5], trial: false, quarterly: true, annual: true },
    { name: t.features[6], trial: false, quarterly: true, annual: true },
    { name: t.features[7], trial: false, quarterly: true, annual: true },
    //{ name: "Post unlimited number of opportunities", trial: false, quarterly: true, annual: true },
    { name: t.features[8], trial: false, quarterly: true, annual: true },
    { name: t.features[9], trial: false, quarterly: false, annual: true }
  ];

  return (
    <section className="sub-subscription-section">
      <div className="sub-container sub-vertical"> {/** comment here */}
        <div className="sub-top-content-row">
          <div className="sub-top-left">
            <h2 className="sub-title">
              {t.title}
            </h2>
            <p className="sub-description">
              {t.subtitle}
            </p>
          </div>
          <div className="sub-top-right">
            <div className="sub-consultation-section">
              <div className="sub-consultation-text">
                <h3>{t.consultation.title}</h3>
                <p>{t.consultation.subtitle}</p>
              </div>
            </div>
            <a target="_blank" href="https://calendly.com/d/dzw-nc4-57b/sport-endorse-demo?month=2025-07">
              <button className="sub-schedule-button">
                {t.consultation.buttonText}
                <svg className="faq-schedule-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l10 10M7 17l10-10" />
                </svg>
              </button>
            </a>
          </div>
        </div>

        <div className="sub-pivot-table">
          {/* Header Row */}
          <div className="sub-pivot-header">
            <div className="sub-pivot-feature-header">Features</div>
            <div className="sub-pivot-plan-header sub-trial-header">
              <div className="sub-plan-badge sub-trial-badge">Free!</div>
              <h3>FREE TRIAL</h3>
              <div className="sub-price">
                <span className="sub-amount-trial">$0</span>
                <span className="sub-period">/month</span>
              </div>
              <p className="sub-billing">1 month free trial</p>
              <a target="_blank" href="https://platform.sportendorse.com/signup/brand?subscription=trial">
                <button className="sub-pivot-button sub-trial-button">START FREE TRIAL</button>
              </a>
            </div>
            <div className="sub-pivot-plan-header">
              <h3>QUARTERLY RATE</h3>
              <div className="sub-price">
                <span className="sub-amount">$700</span>
                <span className="sub-period">/quarter*</span>
              </div>
              <p className="sub-billing">*Paid every 3 months, +VAT</p>
              <a target="_blank" href="https://platform.sportendorse.com/signup/brand?subscription=quarterly">
                <button className="sub-pivot-button sub-quarterly-button">START SUBSCRIPTION</button>
              </a>
            </div>
            <div className="sub-pivot-plan-header sub-annual-header">
              <div className="sub-plan-badge sub-annual-badge">Save 35%</div>
              <h3>ANNUAL RATE</h3>
              <div className="sub-price">
                <span className="sub-amount">$1,799</span>
                <span className="sub-period">/year*</span>
              </div>
              <p className="sub-billing">*Paid every 12 months, +VAT</p>
              <a target="_blank" href="https://platform.sportendorse.com/signup/brand?subscription=annual">
                <button className="sub-pivot-button sub-annual-button">START SUBSCRIPTION</button>
              </a>
            </div>
          </div>

          {/* Feature Rows */}
          {features.map((feature, index) => (
            <div key={index} className="sub-pivot-row">
              <div className="sub-pivot-feature">{feature.name}</div>
              <div className="sub-pivot-cell">
                {feature.trial ? <span className="sub-checkmark sub-trial-check">✓</span> : <span>-</span>}
              </div>
              <div className="sub-pivot-cell">
                {feature.quarterly ? <span className="sub-checkmark sub-quarterly-check">✓</span> : <span>-</span>}
              </div>
              <div className="sub-pivot-cell">
                {feature.annual ? <span className="sub-checkmark sub-annual-check">✓</span> : <span>-</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}