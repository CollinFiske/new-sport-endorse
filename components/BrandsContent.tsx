"use client";

import BrandHowItWorks from "@/components/BrandHowItWorks";
import BrandKeyFeatures from "@/components/BrandKeyFeatures";
import SuccessStories from "@/components/SuccessStories";
import BusinessSubscription from "@/components/BusinessSubscription";
import CalendlyDemo from "@/components/CalendlyDemo";
import BrandReviews from "@/components/BrandReviews";
import CategoryDropdownFAQ from "@/components/CategoryDropdownFAQ";
import { brandFAQs } from "@/utils/faqData";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/utils/translations";
import { getTopFeaturedTalents } from "@/utils/featuredTalentsData";

interface BrandsContentProps {
  badge: string;
  title: string;
  description: string;
  featuredAthletes: string;
  viewAll: string;
}

export default function BrandsContent({ 
  badge, 
  title, 
  description, 
  featuredAthletes, 
  viewAll
}: BrandsContentProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const currentBrandFAQs = brandFAQs[language] || brandFAQs.en;
  const topTalents = getTopFeaturedTalents(language as 'en' | 'es' | 'de');

  return (
    <>
      <section className="heroSection">
        <div className="container">
          <div className="content">
            <div className="badge">
              ⦿ {badge}
            </div>
            
            <h1 className="title" dangerouslySetInnerHTML={{ __html: title }}></h1>
            
            <p className="description">
              {description}
            </p>
          </div>
          
          <div className="imageContainer">
            <div className="talent-showcase">
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#333', marginBottom: '1rem' }}>
                {featuredAthletes}
              </h3>
              <div className="talent-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '1rem',
                background: '#f0f8ff',
                padding: '1.5rem',
                borderRadius: '1rem'
              }}>
                {topTalents.map((talent, index) => (
                  <div key={index} className="talent-card" style={{ 
                    background: 'white', 
                    borderRadius: '0.75rem', 
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                  }}>
                    <img src={talent.image} alt={talent.name} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                    <div style={{ padding: '0.75rem' }}>
                      <p style={{ fontSize: '0.85rem', fontWeight: '600', margin: '0 0 0.5rem 0' }}>{talent.name}</p>
                      <p style={{ fontSize: '0.75rem', color: '#666', margin: '0' }}>{talent.sport}</p>
                    </div>
                  </div>
                ))}
                <a href="https://platform.sportendorse.com/signup/brand" target="_blank" className="cta-card" style={{ 
                  background: '#0078c1', 
                  borderRadius: '0.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'white',
                  textAlign: 'center',
                  padding: '1rem',
                  transition: 'background 0.2s ease'
                }}>
                  <img src="/images/whiteSportEndorseLogo.webp" alt="Sport Endorse logo" style={{ maxWidth: '80px', marginBottom: '0.5rem' }} />
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', margin: '0', textTransform: 'uppercase' }}>
                    {viewAll}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandHowItWorks />
      <BrandKeyFeatures />
      <SuccessStories />
      <BusinessSubscription />
      <CalendlyDemo />
      <BrandReviews />
      
      <CategoryDropdownFAQ 
        title={t.components.faqs.categories.brand}
        faqs={currentBrandFAQs}
        color="#0078c1"
      />
    </>
  );
}