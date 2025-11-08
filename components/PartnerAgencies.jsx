"use client";
import { useState } from "react";
import "../styles/partnerAgencies.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";

export default function PartnerAgencies() {
  const { language } = useLanguage();
  const t = translations[language].components.partnerAgencies;
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    mobileNumber: "",
    professionalEmail: "",
    agencyName: "",
    region: "",
    sport: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Partner agency form submitted:", formData);
    // Close popup after submission
    setShowPopup(false);
    // Reset form
    setFormData({
      firstName: "",
      surname: "",
      mobileNumber: "",
      professionalEmail: "",
      agencyName: "",
      region: "",
      sport: ""
    });
  };

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
            
            <h3 className="popup-title">{t.popup.title}</h3>
            <p className="popup-subtitle">
              {t.popup.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="partner-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">{t.popup.form.firstName} *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="surname">{t.popup.form.surname} *</label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="mobileNumber">{t.popup.form.mobileNumber} *</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="professionalEmail">{t.popup.form.professionalEmail} *</label>
                  <input
                    type="email"
                    id="professionalEmail"
                    name="professionalEmail"
                    value={formData.professionalEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="agencyName">{t.popup.form.agencyName} *</label>
                  <input
                    type="text"
                    id="agencyName"
                    name="agencyName"
                    value={formData.agencyName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="region">{t.popup.form.region} *</label>
                  <input
                    type="text"
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    placeholder="e.g., North America, Europe"
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="sport">{t.popup.form.sport} *</label>
                <input
                  type="text"
                  id="sport"
                  name="sport"
                  value={formData.sport}
                  onChange={handleInputChange}
                  placeholder="e.g., Football, Basketball, Multiple Sports"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                {t.popup.form.submitButton}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}