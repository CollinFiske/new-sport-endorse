"use client";
import Image from "next/image";
import BenefitSection from "../components/BenefitSection";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";
import "../styles/home.css";
import "../styles/benefitSection.css";
import "../styles/featuredTalents.css";
import Community from "../components/Community";
import FeaturedTalents from "@/components/FeaturedTalents";
import BusinessSubscription from "@/components/BusinessSubscription";
import AppStores from "@/components/AppStores";
import SuccessStories from "@/components/SuccessStories";
import BrandsGrid from "@/components/BrandsGrid";
import { useState, useEffect } from "react";

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isMobile, setIsMobile] = useState(false);

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
              <img src="/images/star_icon.png" alt="star" className="star-icon" /> 
              <img src="/images/star_icon.png" alt="star" className="star-icon" />
              <img src="/images/star_icon.png" alt="star" className="star-icon" />
              <img src="/images/star_icon.png" alt="star" className="star-icon" />
              <img src="/images/star_icon.png" alt="star" className="star-icon" />
              <span className="rating-text">5.0</span>
            </div>
            <img className="home-app-for-athletes-img" style={{marginLeft:200, width:"230px", height:"auto"}} src="/images/appforathletes.png" alt="app for athletes text" />
          </div>
        </div>
        
        <div className="imageContainer">
          <Image src="/images/homeHero.png" alt="Athlete Hero" width={500} height={500} className="heroImage" />
        </div>
      </div>
    </section>

    <BrandsGrid variant={isMobile ? "5x4" : "8x4"} label={t.home.tableHeader} />

    <Community />

    <BenefitSection
      title={t.home.benefitSection.athlete.title}
      subtitle={t.home.benefitSection.athlete.subtitle}
      image="/images/talentBenefitPic.png"
      label={t.home.benefitSection.athlete.label}
      background="#E5F1FF"
      item1={t.home.benefitSection.athlete.bullet1}
      item2={t.home.benefitSection.athlete.bullet2}
      item3={t.home.benefitSection.athlete.bullet3}
      color="#008cfa"
      learnMoreLink="/talent"
    />

    <BenefitSection
      title={t.home.benefitSection.brand.title}
      subtitle={t.home.benefitSection.brand.subtitle}
      image="/images/Screenshot 2025-07-16 140629.png"
      label={t.home.benefitSection.brand.label} 
      background="#E5F1FF" /* was FFFBBC */
      item1={t.home.benefitSection.brand.bullet1}
      item2={t.home.benefitSection.brand.bullet2}
      item3={t.home.benefitSection.brand.bullet3}
      color="#008cfa" /* was F6B014 */
      learnMoreLink="/brands"
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

    <BusinessSubscription />

    <FeaturedTalents />

    <br/><br/>
    
{/** commenersfiesnf t - adding styles for mobile screen - here increasing documentation - goal - added more + did some more work */}
    <SuccessStories />

    
    </>
  );
}