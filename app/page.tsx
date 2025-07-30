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

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
    <main className="home-section">
      <div className="home-left">
        <h1 className="title"
          dangerouslySetInnerHTML={{ __html: t.home.welcome }}
        />
        <p>
          {t.home.description}
        </p>
        <AppStores />
        <br/>
        <div style={{display:"flex"}}>
          <div className="rating">⭐⭐⭐⭐⭐4.9</div>
          <img style={{marginLeft:200, width:"230px", height:"auto"}} src="/images/appforathletes.png" alt="app for athletes text" />
        </div>
      </div>
      <div className="home-right">
        <Image src="/images/homeHero.png" alt="Athlete Hero" width={500} height={500} />
      </div>

    </main>

    <BrandsGrid variant="8x4" label={t.home.tableHeader} />

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
      background="#FFFBBC"
      item1={t.home.benefitSection.brand.bullet1}
      item2={t.home.benefitSection.brand.bullet2}
      item3={t.home.benefitSection.brand.bullet3}
      color="#F6B014"
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

    <SuccessStories />

    
    </>
  );
}