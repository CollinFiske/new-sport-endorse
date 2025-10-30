"use client";
import "../styles/businessSubscription.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";
import { useState } from "react";

export default function BusinessSubscription() {
  const { language } = useLanguage();
  const t = translations[language].components.businessSubscription;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const features = [
    { name: t.features[0], trial: true, quarterly: true, annual: true },
    { name: t.features[1], trial: true, quarterly: true, annual: true },
    { name: t.features[2], trial: true, quarterly: true, annual: true },
    { name: t.features[3], trial: true, quarterly: true, annual: true },
    { name: t.features[4], trial: true, quarterly: true, annual: true },
    { name: t.features[5], trial: false, quarterly: true, annual: true },
    { name: t.features[6], trial: false, quarterly: true, annual: true },
    { name: t.features[7], trial: false, quarterly: true, annual: true },
    { name: t.features[8], trial: false, quarterly: true, annual: true },
    { name: t.features[9], trial: false, quarterly: false, annual: true }
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Custom Package Inquiry";
    const body = `Hello,

I would like to learn more about your custom package options.

Full Name: ${formData.fullName}
Email: ${formData.email}

Message:
${formData.message}

Thank you!`;
    
    const mailtoLink = `mailto:hello@sportendorse.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    setFormData({ fullName: '', email: '', message: '' });
    closeModal();
  };

  return (
    <>
      <section className="subscription-container">
        <div className="subscription-header">
          <h2 className="subscription-title">{t.title}</h2>
          <p className="subscription-subtitle">{t.subtitle}</p>
        </div>

        <div className="subscription-pricing-grid">
          {/* Free Trial Card */}
          <div className="subscription-pricing-card subscription-trial-card">
            <div className="subscription-card-header subscription-trial-header">
              <div className="subscription-plan-badge subscription-trial-badge">Free!</div>
              <h3 className="subscription-plan-name">FREE TRIAL</h3>
              <div className="subscription-price-section">
                <span className="subscription-price-amount subscription-trial-price">$0</span>
                <span className="subscription-price-period">/month</span>
              </div>
              <p className="subscription-billing-info">1 month free trial</p>
            </div>
            <div className="subscription-card-body">
              <ul className="subscription-features-list">
                {features.slice(0, 5).map((feature, index) => (
                  <li key={index} className="subscription-feature-item">
                    <svg className="subscription-check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature.name}
                  </li>
                ))}
              </ul>
              <a href="https://platform.sportendorse.com/signup/brand?subscription=trial" target="_blank" rel="noopener noreferrer">
                <button className="subscription-cta-button subscription-trial-button">START FREE TRIAL</button>
              </a>
            </div>
          </div>

          {/* Quarterly Card */}
          <div className="subscription-pricing-card subscription-quarterly-card">
            <div className="subscription-card-header subscription-quarterly-header">
              <h3 className="subscription-plan-name">QUARTERLY</h3>
              <div className="subscription-price-section">
                <span className="subscription-price-amount">$700</span>
                <span className="subscription-price-period">/quarter</span>
              </div>
              <p className="subscription-billing-info">Paid every 3 months, +VAT</p>
            </div>
            <div className="subscription-card-body">
              <ul className="subscription-features-list">
                {features.slice(0, 9).map((feature, index) => (
                  <li key={index} className="subscription-feature-item">
                    <svg className="subscription-check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature.name}
                  </li>
                ))}
              </ul>
              <a href="https://platform.sportendorse.com/signup/brand?subscription=quarterly" target="_blank" rel="noopener noreferrer">
                <button className="subscription-cta-button subscription-quarterly-button">START SUBSCRIPTION</button>
              </a>
            </div>
          </div>

          {/* Annual Card */}
          <div className="subscription-pricing-card subscription-annual-card subscription-featured">
            <div className="subscription-card-header subscription-annual-header">
              <div className="subscription-plan-badge subscription-annual-badge">Save 35%</div>
              <h3 className="subscription-plan-name">ANNUAL</h3>
              <div className="subscription-price-section">
                <span className="subscription-price-amount">$1,799</span>
                <span className="subscription-price-period">/year</span>
              </div>
              <p className="subscription-billing-info">Paid every 12 months, +VAT</p>
            </div>
            <div className="subscription-card-body">
              <ul className="subscription-features-list">
                {features.map((feature, index) => (
                  <li key={index} className="subscription-feature-item">
                    <svg className="subscription-check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature.name}
                  </li>
                ))}
              </ul>
              <a href="https://platform.sportendorse.com/signup/brand?subscription=annual" target="_blank" rel="noopener noreferrer">
                <button className="subscription-cta-button subscription-annual-button">START SUBSCRIPTION</button>
              </a>
            </div>
          </div>

          {/* Custom Package Card */}
          <div className="subscription-pricing-card subscription-custom-card">
            <div className="subscription-card-header subscription-custom-header">
              <h3 className="subscription-plan-name">CUSTOM PACKAGE</h3>
              <div className="subscription-price-section">
                <span className="subscription-price-amount subscription-custom-price">Custom</span>
              </div>
              <p className="subscription-billing-info">Tailored to your needs</p>
            </div>
            <div className="subscription-card-body">
              <div className="subscription-custom-description">
                <p style={{paddingTop:".75rem"}}>Need all of this and more? Looking for full campaign management? Talk to our sales team today.</p>
                <ul className="subscription-custom-features">
                  <li>Personalized onboarding</li>
                  <li>Dedicated account manager</li>
                  <li>Custom integrations</li>
                  <li>Volume discounts available</li>
                </ul>
              </div>
              <button onClick={openModal} className="subscription-cta-button subscription-custom-button">TALK TO SALES</button>
            </div>
          </div>
        </div>
                {/*
        <div className="subscription-consultation-section">
          <div className="subscription-consultation-content">
            <h3>{t.consultation.title}</h3>
            <p>{t.consultation.subtitle}</p>
            <a href="https://calendly.com/d/dzw-nc4-57b/sport-endorse-demo?month=2025-07" target="_blank" rel="noopener noreferrer">
              <button className="subscription-schedule-button">
                {t.consultation.buttonText}
                <svg className="subscription-schedule-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </a>
          </div>
        </div>  */}
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="subscription-modal-overlay" onClick={closeModal}>
          <div className="subscription-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="subscription-modal-header">
              <h3>Custom Package Inquiry</h3>
              <button onClick={closeModal} className="subscription-close-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="subscription-modal-form">
              <div className="subscription-form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="subscription-form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              <div className="subscription-form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Tell us about your specific requirements..."
                />
              </div>
              <div className="subscription-form-actions">
                <button type="button" onClick={closeModal} className="subscription-cancel-button">Cancel</button>
                <button type="submit" className="subscription-submit-button">Send Inquiry</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}