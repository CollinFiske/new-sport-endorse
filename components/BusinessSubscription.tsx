"use client";
import React from "react";
import "../styles/businessSubscription.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface BusinessSubscriptionProps {
  titleLevel?: 'h1' | 'h2';
}

export default function BusinessSubscription({ titleLevel = 'h2' }: BusinessSubscriptionProps) {
  const { language } = useLanguage();
  const t = translations[language].components.businessSubscription;
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    mobileNumber: '',
    typeOfCampaign: '',
    campaignTiming: '',
    note: ''
  });

  const featureCategories = [
    {
      category: t.categories.talentDiscovery,
      features: [
        { name: t.features.accessToPlatform, trial: true, quarterly: true, annual: true },
        { name: t.features.advancedSearchTools, trial: true, quarterly: true, annual: true },
        { name: t.features.verifiedTalentProfiles, trial: true, quarterly: true, annual: true }
      ]
    },
    {
      category: t.categories.communication,
      features: [
        { name: t.features.directMessaging, trial: true, quarterly: true, annual: true }
      ]
    },
    {
      category: t.categories.campaignManagement,
      features: [
        { name: t.features.postOpportunities, trial: false, quarterly: true, annual: true }
      ]
    },
    {
      category: t.categories.growthScale,
      features: [
        { name: t.features.unlimitedProfiles, trial: false, quarterly: true, annual: true },
        { name: t.features.targetUnlimitedMarkets, trial: false, quarterly: true, annual: true }
      ]
    },
    {
      category: t.categories.supportSuccess,
      features: [
        { name: t.features.dedicatedOnboarding, trial: true, quarterly: true, annual: true },
        { name: t.features.customerSuccessManager, trial: false, quarterly: false, annual: true }
      ]
    }
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Custom Package Inquiry";
    const body = `Hello,

I would like to learn more about your custom package options.

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Professional Email: ${formData.email}
Company: ${formData.company}
Country: ${formData.country}
Mobile Number: ${formData.mobileNumber}
Type of Campaign: ${formData.typeOfCampaign}
Campaign Timing: ${formData.campaignTiming}

Note / How Can We Help:
${formData.note}

Thank you!`;
    
    const mailtoLink = `mailto:hello@sportendorse.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    setFormData({ 
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      country: '',
      mobileNumber: '',
      typeOfCampaign: '',
      campaignTiming: '',
      note: ''
    });
    closeModal();
  };

  return (
    <>
      <section className="subscription-container">
        <div className="subscription-header">
          {titleLevel === 'h1' ? (
            <h1 className="subscription-title">{t.mainTitle}</h1>
          ) : (
            <h2 className="subscription-title">{t.mainTitle}</h2>
          )}
          <p className="subscription-subtitle">{t.mainSubtitle}</p>
        </div>

        {/* Pivot Table for Standard Subscriptions */}
        <div className="subscription-table-wrapper">
          <table className="subscription-table">
            <thead>
              <tr>
                <th className="subscription-table-title-cell">{t.sectionTitle}</th>
                <th className="subscription-plan-header trial-plan">
                  <div className="subscription-plan-name">{t.plans.freeTrial}</div>
                  <div className="subscription-plan-price">
                    <span className="currency">€/£/$</span>0<span className="period">/month</span>
                  </div>
                  <div className="subscription-billing-info">{t.billing.freeTrialInfo}</div>
                </th>
                <th className="subscription-plan-header quarterly-plan">
                  <div className="subscription-plan-name">{t.plans.quarterlyRate}</div>
                  <div className="subscription-plan-price">
                    <span className="currency">€/£/$</span>700<span className="period">/quarter</span>
                  </div>
                  <div className="subscription-billing-info">{t.billing.quarterlyInfo}</div>
                </th>
                <th className="subscription-plan-header annual-plan">
                  <div className="subscription-plan-name">{t.plans.annualRate}</div>
                  <div className="subscription-plan-price">
                    <span className="currency">€/£/$</span>1,799<span className="period">/year</span>
                  </div>
                  <div className="subscription-billing-info">{t.billing.annualInfo}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {featureCategories.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="subscription-category-row">
                    <td className="subscription-category-header" colSpan={4}>
                      {category.category}
                    </td>
                  </tr>
                  {category.features.map((feature, featureIndex) => (
                    <tr key={featureIndex} className="subscription-feature-row">
                      <td>{feature.name}</td>
                      <td>
                        {feature.trial ? (
                          <svg className="subscription-check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="subscription-x-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </td>
                      <td>
                        {feature.quarterly ? (
                          <svg className="subscription-check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="subscription-x-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </td>
                      <td>
                        {feature.annual ? (
                          <svg className="subscription-check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="subscription-x-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
              <tr className="subscription-cta-row">
                <td><strong>{t.buttons.getStarted}</strong></td>
                <td>
                  <a href="https://platform.sportendorse.com/signup/brand?subscription=trial" target="_blank" rel="noopener noreferrer" className="subscription-cta-button subscription-trial-button">
                    {t.buttons.startFreeTrial}
                  </a>
                </td>
                <td>
                  <a href="https://platform.sportendorse.com/signup/brand?subscription=quarterly" target="_blank" rel="noopener noreferrer" className="subscription-cta-button subscription-quarterly-button">
                    {t.buttons.subscribeNow}
                  </a>
                </td>
                <td>
                  <a href="https://platform.sportendorse.com/signup/brand?subscription=annual" target="_blank" rel="noopener noreferrer" className="subscription-cta-button subscription-annual-button">
                    {t.buttons.save35}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Custom Package Section */}
        <div className="subscription-custom-section">
          <h3 className="subscription-custom-title">{t.customPackage.title}</h3>
          <p className="subscription-custom-description">{t.customPackage.description}</p>
          <p className="subscription-custom-subtitle">{t.customPackage.subtitle}</p>
          <button onClick={openModal} className="subscription-cta-button subscription-custom-button">{t.buttons.talkToSales}</button>
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
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your first name"
                />
              </div>
              <div className="subscription-form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your last name"
                />
              </div>
              <div className="subscription-form-group">
                <label htmlFor="email">Professional Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your professional email address"
                />
              </div>
              <div className="subscription-form-group">
                <label htmlFor="company">Company *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your company name"
                />
              </div>
              <div className="subscription-form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Enter your country"
                />
              </div>
              <div className="subscription-form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="subscription-form-group">
                <label htmlFor="typeOfCampaign">Type of Campaign</label>
                <input
                  type="text"
                  id="typeOfCampaign"
                  name="typeOfCampaign"
                  value={formData.typeOfCampaign}
                  onChange={handleInputChange}
                  placeholder="e.g., Brand ambassador, Social media, Event sponsorship"
                />
              </div>
              <div className="subscription-form-group">
                <label htmlFor="campaignTiming">Campaign Timing</label>
                <select
                  id="campaignTiming"
                  name="campaignTiming"
                  value={formData.campaignTiming}
                  onChange={handleInputChange}
                  className="subscription-form-select"
                >
                  <option value="">Select timing</option>
                  <option value="Within 3 months">Within 3 months</option>
                  <option value="Within 6 - 12 months">Within 6 - 12 months</option>
                  <option value="In 12+ months">In 12+ months</option>
                  <option value="TBC">TBC</option>
                </select>
              </div>
              <div className="subscription-form-group">
                <label htmlFor="note">Note (Please leave any additional information) / How Can We Help?</label>
                <textarea
                  id="note"
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your specific requirements and how we can help..."
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