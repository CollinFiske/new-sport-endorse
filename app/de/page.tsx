"use client";
import Image from "next/image";
import BenefitSection from "../../components/BenefitSection";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../utils/translations";
import "../../styles/home.css";
import "../../styles/benefitSection.css";
import "../../styles/featuredTalents.css";
import FeaturedTalents from "@/components/FeaturedTalents";
import AppStores from "@/components/AppStores";
import BrandsGrid from "@/components/BrandsGrid";
import { useState, useEffect } from "react";
import Head from 'next/head';

export default function HomePageDE() {
  const { changeLanguage } = useLanguage();
  const t = translations.de;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    changeLanguage('de');
  }, [changeLanguage]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <Head>
        <title>Sport Endorse | Verbinde Marken mit Elite-Athleten & Sport-Influencern</title>
        <meta name="description" content="Sport Endorse ist die Plattform, die Marken und Athleten für authentische und wirkungsvolle Partnerschaften zusammenbringt. Wir machen es einfach für Marken, das richtige Talent zu finden und mit ihm zu kollaborieren, und für Athleten, sich direkt mit Marken zu verbinden und bezahlte Deals zu sichern." />
        <link rel="alternate" href="https://www.sportendorse.com/" hrefLang="en-gb" />
        <link rel="alternate" href="https://www.sportendorse.com/es/" hrefLang="es-es" />
        <link rel="alternate" href="https://www.sportendorse.com/de/" hrefLang="de-de" />
        <link rel="alternate" href="https://www.sportendorse.com/" hrefLang="x-default" />
        <link rel="canonical" href="https://www.sportendorse.com/de/" />
        <meta property="og:title" content="Sport Endorse | Verbinde Marken mit Elite-Athleten & Sport-Influencern" />
        <meta property="og:description" content="Sport Endorse ist die Plattform, die Marken und Athleten für authentische und wirkungsvolle Partnerschaften zusammenbringt. Wir machen es einfach für Marken, das richtige Talent zu finden und mit ihm zu kollaborieren, und für Athleten, sich direkt mit Marken zu verbinden und bezahlte Deals zu sichern." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="Sport Endorse" />
        <html lang="de" />
      </Head>

    <section className="heroSection">
      <div className="container">
        <div className="content">
          <h1 className="title"
            dangerouslySetInnerHTML={{ __html: t.home.welcome }}
          />
          <p className="description">
            {t.home.description}
          </p>
          <div className="home-apps">
            <AppStores />
          </div>
          <br/>
          <div className="rating-container" style={{display:"flex"}}>
            <div className="rating">
              <Image src="/images/star_icon.png" alt="star" width={20} height={20} className="star-icon" /> 
              <Image src="/images/star_icon.png" alt="star" width={20} height={20} className="star-icon" />
              <Image src="/images/star_icon.png" alt="star" width={20} height={20} className="star-icon" />
              <Image src="/images/star_icon.png" alt="star" width={20} height={20} className="star-icon" />
              <Image src="/images/star_icon.png" alt="star" width={20} height={20} className="star-icon" />
              <span className="rating-text">5.0</span>
            </div>
            <Image className="home-app-for-athletes-img" style={{marginLeft:200, width:"230px", height:"auto"}} src="/images/appforathletes.png" alt="app for athletes text" width={230} height={70} />
          </div>
        </div>
        
        <div className="imageContainer">
          <Image src="/images/homeHero.png" alt="Athlete Hero" width={600} height={500} className="heroImage" priority/>
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
      background="#E5F1FF" /* was FFFBBC */
      item1={t.home.benefitSection.brand.bullet1}
      item2={t.home.benefitSection.brand.bullet2}
      item3={t.home.benefitSection.brand.bullet3}
      color="#009ee3" /* was F6B014 */
      learnMoreLink="/de/brands"
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
      learnMoreLink="/de/talent"
    />

    {/*<BenefitSection
      title={t.home.benefitSection.agency.title}
      subtitle={t.home.benefitSection.agency.subtitle}
      image="/images/agencyBenefitPic.webp"
      label={t.home.benefitSection.agency.label}
      background="#9DE7283D"
      item1={t.home.benefitSection.agency.bullet1}
      item2={t.home.benefitSection.agency.bullet2}
      item3={t.home.benefitSection.agency.bullet3}
      color="#83BF24"
    />*/}

    {/*<BusinessSubscription /> removed as per doc 9/25*/}

    
    {/*<SuccessStories /> removed as per doc 9/25*/}

    
    </>
  );
}