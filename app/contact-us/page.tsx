"use client";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../utils/translations";
import "../../styles/contactUs.css";
import Head from 'next/head';

export default function ContactUsPage() {
  const { language } = useLanguage();
  const t = translations[language].components.contactUs;
  
  const [formData, setFormData] = useState({
    name: "",
    clientType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.clientType) {
      alert(t.form.requiredFieldsError);
      return;
    }

    const subject = t.emailSubject;
    const body = `${t.emailBody.greeting}

${t.emailBody.intro}

${t.emailBody.nameField} ${formData.name}
${t.emailBody.clientTypeField} ${formData.clientType}

${t.emailBody.messageField}
${formData.message}

${t.emailBody.closing}`;

    const mailtoLink = `mailto:hello@sportendorse.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    // Clear the form after sending
    setFormData({
      name: "",
      clientType: "",
      message: ""
    });
  };

  return (
    <>
      <Head>
        <title>Contact Sport Endorse | Get in Touch with Our Sports Marketing Team</title>
        <meta name="description" content="Get in touch with Sport Endorse for sports marketing partnerships, athlete sponsorships, and influencer collaborations. Contact our team in Dublin, Ireland." />
        <link rel="alternate" href="https://www.sportendorse.com/contact-us" hrefLang="en-gb" />
        <link rel="alternate" href="https://www.sportendorse.com/es/contact-us" hrefLang="es-es" />
        <link rel="alternate" href="https://www.sportendorse.com/de/contact-us" hrefLang="de-de" />
        <link rel="alternate" href="https://www.sportendorse.com/contact-us" hrefLang="x-default" />
        <link rel="canonical" href="https://www.sportendorse.com/contact-us" />
        <meta property="og:title" content="Contact Sport Endorse | Get in Touch with Our Sports Marketing Team" />
        <meta property="og:description" content="Get in touch with Sport Endorse for sports marketing partnerships, athlete sponsorships, and influencer collaborations. Contact our team in Dublin, Ireland." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'es' ? 'es_ES' : language === 'de' ? 'de_DE' : 'en_US'} />
        <meta property="og:site_name" content="Sport Endorse" />
        <html lang={language} />
      </Head>

    <div className="contact-us-container">
      <div className="contact-us-content">
        <div className="contact-us-left">
          <h1 className="contact-us-title">{t.title}</h1>
          <p className="contact-us-description">
            {t.description}
          </p>

          <div className="contact-us-info">
            <div className="contact-us-info-section">
              <h3>{t.contactInfo.telephone}</h3>
              <p>+353 1 546 1103</p>
            </div>

            <div className="contact-us-info-section">
              <h3>{t.contactInfo.email}</h3>
              <p>hello@sportendorse.com</p>
            </div>

            <div className="contact-us-info-section">
              <h3>{t.contactInfo.address}</h3>
              <p>
                10 Fitzwilliam Street Upper,<br />
                Dublin 2, D02 T024, Ireland
              </p>
            </div>
          </div>

          <div className="contact-us-socials">
            <h3>{t.followUs}</h3>
            <div className="contact-us-social-logos">
              <span><a target="_blank" href="https://www.facebook.com/SportEndorseLtd/"><img src="/images/facebookLogo.jpg" alt="facebook logo" className="contact-us-social-logo" /></a></span>
              <span><a target="_blank" href="https://www.instagram.com/sport_endorse/"><img src="/images/instagramLogo.webp" alt="instagram logo" className="contact-us-social-logo" /></a></span>
              <span><a target="_blank" href="https://www.linkedin.com/company/sportendorse/"><img src="/images/linkedinLogo.webp" alt="linkedin logo" className="contact-us-social-logo" /></a></span>
              <span><a target="_blank" href="https://www.tiktok.com/@sportendorse"><img src="/images/tiktokLogo.webp" alt="tiktok logo" className="contact-us-social-logo" /></a></span>
              <span><a target="_blank" href="https://open.spotify.com/show/2c2mWOkxmUpeGyFI2dZgC5"><img src="/images/spotify.png" alt="spotify logo" className="contact-us-social-logo" /></a></span>
              <span><a target="_blank" href="https://www.youtube.com/channel/UCwHt-_eNBHav6TSihoirZIA"><img src="/images/youtube icon.png" alt="youtube logo" className="contact-us-social-logo" /></a></span>
            </div>
          </div>
        </div>

        <div className="contact-us-right">
          <form onSubmit={handleSubmit} className="contact-us-form">
            <div className="contact-us-form-group">
              <label htmlFor="name" className="contact-us-label">{t.form.nameLabel}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t.form.namePlaceholder}
                className="contact-us-input"
                required
              />
            </div>

            <div className="contact-us-form-group">
              <label htmlFor="clientType" className="contact-us-label">{t.form.clientTypeLabel}</label>
              <select
                id="clientType"
                name="clientType"
                value={formData.clientType}
                onChange={handleInputChange}
                className="contact-us-select"
                required
              >
                <option value="">{t.form.clientTypePlaceholder}</option>
                <option value={t.form.clientTypes.talent}>{t.form.clientTypes.talent}</option>
                <option value={t.form.clientTypes.brand}>{t.form.clientTypes.brand}</option>
                <option value={t.form.clientTypes.agency}>{t.form.clientTypes.agency}</option>
                <option value={t.form.clientTypes.other}>{t.form.clientTypes.other}</option>
              </select>
            </div>

            <div className="contact-us-form-group">
              <label htmlFor="message" className="contact-us-label">{t.form.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t.form.messagePlaceholder}
                className="contact-us-textarea"
                rows={5}
              />
            </div>

            <button type="submit" className="contact-us-submit-btn">
              {t.form.submitButton}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}