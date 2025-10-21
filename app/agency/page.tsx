"use client";
import Community from "@/components/Community";
import "../../styles/agency.css";
import Image from 'next/image';
import AgencyHowItWorks from "@/components/AgencyHowItWorks";
import SuccessStories from "@/components/SuccessStories";
import CalendlyDemo from "@/components/CalendlyDemo";
import CategoryDropdownFAQ from "@/components/CategoryDropdownFAQ";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/utils/translations";
import { agencyFAQs } from "@/utils/faqData";
import Head from 'next/head';

export default function AgencyPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Head>
        <title>{t.agency.metadata.title}</title>
        <meta name="description" content={t.agency.metadata.description} />
        <link rel="alternate" hrefLang="en" href="https://www.sportendorse.com/agency" />
        <link rel="alternate" hrefLang="es" href="https://www.sportendorse.com/es/agency" />
        <link rel="alternate" hrefLang="de" href="https://www.sportendorse.com/de/agency" />
        <link rel="alternate" hrefLang="x-default" href="https://www.sportendorse.com/agency" />
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
            <div className="agency-dashboard-wrapper">
              <Image 
                src="/images/agency_dashboard.png" 
                alt={t.agency.imageAlt}
                width={800} 
                height={600}
                className="agency-dashboard-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Community showAgencies={true} />

      <AgencyHowItWorks />

      <CalendlyDemo agencies={true} />

      <SuccessStories />

      <CategoryDropdownFAQ 
        title="Sports Agency FAQs"
        faqs={agencyFAQs}
        color="#f59e0b"
      />
    </>
  );
}
