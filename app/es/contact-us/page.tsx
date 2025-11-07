"use client";
import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import translations from "../../../utils/translations";
import "../../../styles/contactUs.css";
import Image from 'next/image';
import Head from 'next/head';
import { useEffect } from 'react';

export default function ContactUsPage() {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language].components.contactUs;

  useEffect(() => {
    changeLanguage('es');
  }, [changeLanguage]);
  
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
        <title>Contacta con Sport Endorse | Ponte en Contacto con Nuestro Equipo de Marketing Deportivo</title>
        <meta name="description" content="Ponte en contacto con Sport Endorse para asociaciones de marketing deportivo, patrocinios de atletas y colaboraciones con influencers. Contacta con nuestro equipo en Dublín, Irlanda." />
        <link rel="alternate" href="https://www.sportendorse.com/contact-us" hrefLang="en-gb" />
        <link rel="alternate" href="https://www.sportendorse.com/es/contact-us" hrefLang="es-es" />
        <link rel="alternate" href="https://www.sportendorse.com/de/contact-us" hrefLang="de-de" />
        <link rel="alternate" href="https://www.sportendorse.com/contact-us" hrefLang="x-default" />
        <link rel="canonical" href="https://www.sportendorse.com/es/contact-us" />
        <meta property="og:title" content="Contacta con Sport Endorse | Ponte en Contacto con Nuestro Equipo de Marketing Deportivo" />
        <meta property="og:description" content="Ponte en contacto con Sport Endorse para asociaciones de marketing deportivo, patrocinios de atletas y colaboraciones con influencers. Contacta con nuestro equipo en Dublín, Irlanda." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Sport Endorse" />
        <html lang="es" />
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
              <span><a target="_blank" href="https://www.facebook.com/SportEndorseLtd/"><Image src="/images/facebookLogo.jpg" alt="facebook logo" width={32} height={32} className="contact-us-social-logo" /></a></span>
              <span><a target="_blank" href="https://www.instagram.com/sport_endorse/"><Image src="/images/instagramLogo.webp" alt="instagram logo" width={32} height={32} className="contact-us-social-logo" /></a></span>
              <span><a target="_blank" href="https://www.linkedin.com/company/sportendorse/"><Image src="/images/linkedinLogo.webp" alt="linkedin logo" width={32} height={32} className="contact-us-social-logo" /></a></span>
              <span><a target="_blank" href="https://www.tiktok.com/@sportendorse"><Image src="/images/tiktokLogo.webp" alt="tiktok logo" width={32} height={32} className="contact-us-social-logo" /></a></span>
              <span><a target="_blank" href="https://open.spotify.com/show/2c2mWOkxmUpeGyFI2dZgC5"><Image src="/images/spotify.png" alt="spotify logo" width={32} height={32} className="contact-us-social-logo" /></a></span>
              <span><a target="_blank" href="https://www.youtube.com/channel/UCwHt-_eNBHav6TSihoirZIA"><Image src="/images/youtube icon.png" alt="youtube logo" width={32} height={32} className="contact-us-social-logo" /></a></span>
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