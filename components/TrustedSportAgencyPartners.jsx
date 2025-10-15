"use client";
import { useState } from "react";
import "../styles/trustedSportAgencyPartners.css";

export default function TrustedSportAgencyPartners() {
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
            <span>◉ TRUSTED AGENCY PARTNERS</span>
          </div>
          
          <h2 className="trusted-partners-title">
            Need an Agent or Legal Support?
          </h2>
          
          <p className="trusted-partners-description">
            Navigating contracts and legal issues can be complex. While we only focus on commercial opportunities, 
            we can connect you with trusted sports agency partners in your sport and region to help with your career 
            and contracts. Let us know your sport and region, and we'll make a referral.
          </p>

          <button 
            className="referral-button"
            onClick={() => setShowPopup(true)}
          >
            Get a Referral
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
            
            <h3 className="popup-title">Get Agency Referral</h3>
            <p className="popup-subtitle">
              Please fill out the form below and we'll connect you with trusted agency partners.
            </p>

            <form onSubmit={handleSubmit} className="referral-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
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
                  <label htmlFor="surname">Surname *</label>
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
                  <label htmlFor="email">Email *</label>
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
                  <label htmlFor="phoneNumber">Phone Number</label>
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
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="nationality">Nationality</label>
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
                  <label htmlFor="currentLocation">Current Location *</label>
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
                  <label htmlFor="sport">Sport *</label>
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
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit" className="submit-button">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
