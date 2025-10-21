"use client";
import "../../styles/talent.css";
import AppStores from "@/components/AppStores";
import SuccessStories from "@/components/SuccessStories";
import BrandsGrid from "@/components/BrandsGrid";
import TalentHowItWorks from "@/components/TalentHowItWorks";
import WhyAthletesChooseUs from "@/components/WhyAthletesChooseUs";
import BrandReviews from "@/components/BrandReviews";
import TrustedSportAgencyPartners from "@/components/TrustedSportAgencyPartners";
import CategoryDropdownFAQ from "@/components/CategoryDropdownFAQ";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/utils/translations";
import { talentFAQs } from "@/utils/faqData";
import Head from 'next/head';

export default function TalentPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentTalentFAQs = talentFAQs[language] || talentFAQs.en;

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
        <meta property="og:locale" content={language === 'en' ? 'en_US' : language === 'es' ? 'es_ES' : 'de_DE'} />
        <meta property="og:site_name" content="Sport Endorse" />
      </Head>

      <section className="heroSection">
        <div className="container">
          <div className="content">
            <span className="badge">
              ⦿ {t.talent.badge}
            </span>
            
            <h1 
              className="title"
              dangerouslySetInnerHTML={{ __html: t.talent.title }}
            />
            
            <p className="description">
              {t.talent.description}
            </p>
            
            <div className="talent-apps">
              <AppStores />
            </div>
          </div>
             
          <div className="imageContainer">
            <BrandsGrid variant="5x4" label="" />
          </div>
        </div>
      </section>

      <TalentHowItWorks />

      <WhyAthletesChooseUs />

      <SuccessStories />

      <BrandReviews />

      <TrustedSportAgencyPartners />

      <CategoryDropdownFAQ 
        title={t.components.faqs.categories.talent}
        faqs={currentTalentFAQs}
        color="#10b981"
      />

      <br/>
      <br/>
    </>
  );
}
