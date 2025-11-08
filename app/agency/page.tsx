"use client";
import Community from "@/components/Community";
import "../../styles/agency.css";
import BrandsGrid from "@/components/BrandsGrid";
import AgencyHowItWorks from "@/components/AgencyHowItWorks";
import SuccessStories from "@/components/SuccessStories";
import CalendlyDemo from "@/components/CalendlyDemo";
import PartnerAgencies from "@/components/PartnerAgencies";
import CategoryDropdownFAQ from "@/components/CategoryDropdownFAQ";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/utils/translations";
import { agencyFAQs } from "@/utils/faqData";
import Head from 'next/head';

export default function AgencyPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentAgencyFAQs = agencyFAQs[language] || agencyFAQs.en;

  return (
    <>
      <Head>
        <title>{t.agency.metadata.title}</title>
        <meta name="description" content={t.agency.metadata.description} />
        <link rel="alternate" href="https://www.sportendorse.com/agency" hrefLang="en-gb" />
        <link rel="alternate" href="https://www.sportendorse.com/es/agency" hrefLang="es-es" />
        <link rel="alternate" href="https://www.sportendorse.com/de/agency" hrefLang="de-de" />
        <link rel="alternate" href="https://www.sportendorse.com/agency" hrefLang="x-default" />
        <link rel="canonical" href="https://www.sportendorse.com/agency" />
        <meta property="og:title" content={t.agency.metadata.title} />
        <meta property="og:description" content={t.agency.metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'en' ? 'en_US' : language === 'es' ? 'es_ES' : 'de_DE'} />
        <meta property="og:site_name" content="Sport Endorse" />
      </Head>

      <section className="agency-heroSection">
        <div className="agency-container">
          <div className="agency-content">
            <div className="agency-badge">
              ⦿ {t.agency.badge}
            </div>
            
            <h1 
              className="agency-title"
              dangerouslySetInnerHTML={{ __html: t.agency.title }}
            />
            
            <p className="agency-description">
              {t.agency.description}
            </p>
          </div>
          
          <div className="agency-imageContainer">
            <BrandsGrid variant="5x4" label="" />
          </div>
        </div>
      </section>

      <Community showAgencies={true} />

      <AgencyHowItWorks />

      <CalendlyDemo agencies={true} />

      <SuccessStories />

      <PartnerAgencies />

      <CategoryDropdownFAQ 
        title={t.components.faqs.categories.agency}
        faqs={currentAgencyFAQs}
        color="#f59e0b"
      />
    </>
  );
}
