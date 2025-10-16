"use client";
import { useState } from "react";
import "../styles/trustedSportAgencyPartners.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";

export default function TrustedSportAgencyPartners() {
  const { language } = useLanguage();
  const t = translations[language].components.trustedSportAgencyPartners;
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    gender: "",
    nationality: "",
    currentLocation: "",
    sport: "",
    dateOfBirth: ""
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
    console.log("Form submitted:", formData);
    // Close popup after submission
    setShowPopup(false);
    // Reset form
    setFormData({
      firstName: "",
      surname: "",
      email: "",
      phoneNumber: "",
      gender: "",
      nationality: "",
      currentLocation: "",
      sport: "",
      dateOfBirth: ""
    });
  };

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

          <button 
            className="referral-button"
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

            <form onSubmit={handleSubmit} className="referral-form">
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
                  <label htmlFor="email">{t.popup.form.email} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">{t.popup.form.phoneNumber}</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="gender">{t.popup.form.gender}</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">{t.popup.form.selectGender}</option>
                    <option value="male">{t.popup.form.male}</option>
                    <option value="female">{t.popup.form.female}</option>
                    <option value="other">{t.popup.form.other}</option>
                    <option value="prefer-not-to-say">{t.popup.form.preferNotToSay}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="nationality">{t.popup.form.nationality}</label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    placeholder="e.g., American, British"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="currentLocation">{t.popup.form.currentLocation} *</label>
                  <input
                    type="text"
                    id="currentLocation"
                    name="currentLocation"
                    value={formData.currentLocation}
                    onChange={handleInputChange}
                    placeholder="City, Country"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sport">{t.popup.form.sport} *</label>
                  <input
                    type="text"
                    id="sport"
                    name="sport"
                    value={formData.sport}
                    onChange={handleInputChange}
                    placeholder="e.g., Football, Basketball"
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="dateOfBirth">{t.popup.form.dateOfBirth}</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
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
