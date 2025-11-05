"use client";
import "../../../styles/talent.css";
import AppStores from "@/components/AppStores";
import SuccessStories from "@/components/SuccessStories";
import BrandsGrid from "@/components/BrandsGrid";
import TalentHowItWorks from "@/components/TalentHowItWorks";
import WhyAthletesChooseUs from "@/components/WhyAthletesChooseUs";
import TalentReviews from "@/components/TalentReviews";
import TrustedSportAgencyPartners from "@/components/TrustedSportAgencyPartners";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/utils/translations";
import Head from 'next/head';
import { useEffect } from 'react';

export default function TalentPageDE() {
  const { changeLanguage } = useLanguage();
  const t = translations.de;

  useEffect(() => {
    changeLanguage('de');
  }, [changeLanguage]);

  return (
    <>
      <Head>
        <title>{t.talent.metadata.title}</title>
        <meta name="description" content={t.talent.metadata.description} />
        <link rel="alternate" hrefLang="en" href="https://www.sportendorse.com/talent" />
        <link rel="alternate" hrefLang="es" href="https://www.sportendorse.com/es/talent" />
        <link rel="alternate" hrefLang="de" href="https://www.sportendorse.com/de/talent" />
        <link rel="alternate" hrefLang="x-default" href="https://www.sportendorse.com/talent" />
        <meta property="og:title" content={t.talent.metadata.title} />
        <meta property="og:description" content={t.talent.metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="Sport Endorse" />
        <html lang="de" />
      </Head>

      <section className="talent-heroSection">
        <div className="talent-container">
          <div className="talent-content">
            <span className="talent-badge">
              ⦿ {t.talent.badge}
            </span>
            
            <h1 
              className="talent-title"
              dangerouslySetInnerHTML={{ __html: t.talent.title }}
            />
            
            <p className="talent-description">
              {t.talent.description}
            </p>
            
            <div className="talent-apps">
              <AppStores />
            </div>
          </div>
             
          <div className="talent-imageContainer">
            <BrandsGrid variant="5x4" label="" />
          </div>
        </div>
      </section>

      <TalentHowItWorks />

      <WhyAthletesChooseUs />

      <SuccessStories />

      <TalentReviews />

      <TrustedSportAgencyPartners />

      <br/>
      <br/>
    </>
  );
}