"use client";
import BenefitSection from "../../../components/BenefitSection";
import { useLanguage } from "../../../context/LanguageContext";
import translations from "../../../utils/translations";
import "../../../styles/home.css";
import "../../../styles/benefitSection.css";
import "../../../styles/featuredTalents.css";
import FeaturedTalents from "@/components/FeaturedTalents";
import AppStores from "@/components/AppStores";
import BrandsGrid from "@/components/BrandsGrid";
import { useState, useEffect } from "react";
import Head from 'next/head';

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Function to get the appropriate video source based on screen size
  const getVideoSource = () => {
    if (!isClient) return "/videos/4_3 aspect ratio (wide) .MOV";
    
    if (window.innerWidth <= 480) {
      return "/videos/9_16 aspect ratio (mobile_reel_tiktok).MOV";
    } else if (window.innerWidth <= 768) {
      return "/videos/3_4 aspect ratio (in between).MOV";
    } else {
      return "/videos/4_3 aspect ratio (wide) .MOV";
    }
  };

  const homeMetadata = {
    en: {
      title: "Sport Endorse | Connect Brands with Elite Athletes & Sports Influencers",
      description: "Sport Endorse is the platform that brings brands and athletes together for authentic and impactful partnerships. We make it easy for brands to find and collaborate with the right talent, and for athletes to connect directly with brands and secure paid deals."
    },
    es: {
      title: "Sport Endorse | Conecta Marcas con Atletas de Élite e Influencers Deportivos",
      description: "Sport Endorse es la plataforma que une marcas y atletas para asociaciones auténticas e impactantes. Facilitamos que las marcas encuentren y colaboren con el talento adecuado, y que los atletas se conecten directamente con marcas y aseguren acuerdos pagados."
    },
    de: {
      title: "Sport Endorse | Verbinde Marken mit Elite-Athleten & Sport-Influencern",
      description: "Sport Endorse ist die Plattform, die Marken und Athleten für authentische und wirkungsvolle Partnerschaften zusammenbringt. Wir machen es einfach für Marken, das richtige Talent zu finden und mit ihm zu kollaborieren, und für Athleten, sich direkt mit Marken zu verbinden und bezahlte Deals zu sichern."
    }
  };

  return (
    <>
      <Head>
        <title>{homeMetadata[language].title}</title>
        <meta name="description" content={homeMetadata[language].description} />
        <link rel="alternate" hrefLang="en" href="https://www.sportendorse.com/" />
        <link rel="alternate" hrefLang="es" href="https://www.sportendorse.com/es" />
        <link rel="alternate" hrefLang="de" href="https://www.sportendorse.com/de" />
        <link rel="alternate" hrefLang="x-default" href="https://www.sportendorse.com/" />
        <meta property="og:title" content={homeMetadata[language].title} />
        <meta property="og:description" content={homeMetadata[language].description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'es' ? 'es_ES' : language === 'de' ? 'de_DE' : 'en_US'} />
        <meta property="og:site_name" content="Sport Endorse" />
        <html lang={language} />
      </Head>

    <section className="heroSection">
      <div className="videoBackground">
        <video autoPlay muted loop playsInline className="backgroundVideo">
          <source src={getVideoSource()} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container">
        <div className="content">
          <h1 className="title"
            dangerouslySetInnerHTML={{ __html: t.home.welcome }}
          />
          <p className="description">
            {t.home.description}
          </p>
        </div>
        
        <div className="appStoresContainer" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
          <AppStores />
          <div style={{display:"flex", alignItems: "center", justifyContent: "center", gap: "20px", marginLeft:"20px"}}>
            <div className="rating" style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
              <img src="/images/star_icon.png" alt="star" className="star-icon" /> 
              <img src="/images/star_icon.png" alt="star" className="star-icon" />
              <img src="/images/star_icon.png" alt="star" className="star-icon" />
              <img src="/images/star_icon.png" alt="star" className="star-icon" />
              <img src="/images/star_icon.png" alt="star" className="star-icon" />
              <span className="rating-text">5.0</span>
            </div>
            <img className="home-app-for-athletes-img" style={{width:"200px", height:"auto"}} src="/images/appforathletes.png" alt="app for athletes text" />
          </div>
        </div>
      </div>
    </section>

    <BrandsGrid variant={isMobile ? "5x4" : "8x4"} label={t.home.tableHeader} />

    <br/>
    <FeaturedTalents />

    <BenefitSection
      title={t.home.benefitSection.brand.title}
      subtitle={t.home.benefitSection.brand.subtitle}
      image="/images/Screenshot 2025-07-16 140629.png"
      label={t.home.benefitSection.brand.label} 
      background="#E5F1FF"
      item1={t.home.benefitSection.brand.bullet1}
      item2={t.home.benefitSection.brand.bullet2}
      item3={t.home.benefitSection.brand.bullet3}
      color="#009ee3"
      learnMoreLink={language === 'es' ? "/es/brands" : language === 'de' ? "/de/brands" : "/brands"}
    />

    <BenefitSection
      title={t.home.benefitSection.athlete.title}
      subtitle={t.home.benefitSection.athlete.subtitle}
      image="/images/talentBenefitPic.png"
      label={t.home.benefitSection.athlete.label}
      background="#E5F1FF"
      item1={t.home.benefitSection.athlete.bullet1}
      item2={t.home.benefitSection.athlete.bullet2}
      item3={t.home.benefitSection.athlete.bullet3}
      color="#009ee3"
      learnMoreLink={language === 'es' ? "/es/talent" : language === 'de' ? "/de/talent" : "/talent"}
    />
    
    </>
  );
}