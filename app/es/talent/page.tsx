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

export default function TalentPageES() {
  const { changeLanguage } = useLanguage();
  const t = translations.es;

  useEffect(() => {
    changeLanguage('es');
  }, [changeLanguage]);

  return (
    <>
      <Head>
        <title>{t.talent.metadata.title}</title>
        <meta name="description" content={t.talent.metadata.description} />
        <link rel="alternate" href="https://www.sportendorse.com/talent" hrefLang="en-gb" />
        <link rel="alternate" href="https://www.sportendorse.com/es/talent" hrefLang="es-es" />
        <link rel="alternate" href="https://www.sportendorse.com/de/talent" hrefLang="de-de" />
        <link rel="alternate" href="https://www.sportendorse.com/talent" hrefLang="x-default" />
        <link rel="canonical" href="https://www.sportendorse.com/es/talent" />
        <meta property="og:title" content={t.talent.metadata.title} />
        <meta property="og:description" content={t.talent.metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Sport Endorse" />
        <html lang="es" />
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

      <section className="talent-sponsorship-section">
        <div className="talent-sponsorship-container">
          <h2>{t.talent.sponsorshipSection.title}</h2>
          <p className="talent-sponsorship-lead">
            {t.talent.sponsorshipSection.lead}
          </p>
          <p className="talent-sponsorship-description">
            {t.talent.sponsorshipSection.description}
          </p>
          <p className="talent-sponsorship-benefits">
            {t.talent.sponsorshipSection.benefits}
          </p>
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