import BrandHowItWorks from "@/components/BrandHowItWorks";
import BrandKeyFeatures from "@/components/BrandKeyFeatures";
import SuccessStories from "@/components/SuccessStories";
import BusinessSubscription from "@/components/BusinessSubscription";
import CalendlyDemo from "@/components/CalendlyDemo";
import BrandReviews from "@/components/BrandReviews";
import CategoryDropdownFAQ from "@/components/CategoryDropdownFAQ";
import { brandFAQs } from "@/utils/faqData";

interface BrandsContentProps {
  badge: string;
  title: string;
  description: string;
  featuredAthletes: string;
  viewAll: string;
  sports: {
    freestyle: string;
    fitness: string;
    athletics: string;
    football: string;
    triathlon: string;
  };
}

export default function BrandsContent({ 
  badge, 
  title, 
  description, 
  featuredAthletes, 
  viewAll, 
  sports 
}: BrandsContentProps) {
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
                <div className="talent-card" style={{ 
                  background: 'white', 
                  borderRadius: '0.75rem', 
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}>
                  <img src="/images/featuredTalent/fabian pecher.png" alt="Fabian Pecher" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                  <div style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: '600', margin: '0 0 0.5rem 0' }}>Fabian Pecher</p>
                    <p style={{ fontSize: '0.75rem', color: '#666', margin: '0' }}>{sports.freestyle}</p>
                  </div>
                </div>
                <div className="talent-card" style={{ 
                  background: 'white', 
                  borderRadius: '0.75rem', 
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}>
                  <img src="/images/featuredTalent/abby berner.png" alt="Abby Berner" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                  <div style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: '600', margin: '0 0 0.5rem 0' }}>Abby Berner</p>
                    <p style={{ fontSize: '0.75rem', color: '#666', margin: '0' }}>{sports.fitness}</p>
                  </div>
                </div>
                <div className="talent-card" style={{ 
                  background: 'white', 
                  borderRadius: '0.75rem', 
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}>
                  <img src="/images/featuredTalent/emily cole.webp" alt="Emily Cole" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                  <div style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: '600', margin: '0 0 0.5rem 0' }}>Emily Cole</p>
                    <p style={{ fontSize: '0.75rem', color: '#666', margin: '0' }}>{sports.athletics}</p>
                  </div>
                </div>
                <div className="talent-card" style={{ 
                  background: 'white', 
                  borderRadius: '0.75rem', 
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}>
                  <img src="/images/featuredTalent/sergio sanchez.png" alt="Sergio Sanchez" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                  <div style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: '600', margin: '0 0 0.5rem 0' }}>Sergio Sanchez</p>
                    <p style={{ fontSize: '0.75rem', color: '#666', margin: '0' }}>{sports.football}</p>
                  </div>
                </div>
                <div className="talent-card" style={{ 
                  background: 'white', 
                  borderRadius: '0.75rem', 
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}>
                  <img src="/images/featuredTalent/jordi garcia.png" alt="Jordi Garcia" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                  <div style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: '600', margin: '0 0 0.5rem 0' }}>Jordi Garcia</p>
                    <p style={{ fontSize: '0.75rem', color: '#666', margin: '0' }}>{sports.triathlon}</p>
                  </div>
                </div>
                <a href="https://platform.sportendorse.com/signup/brand" target="_blank" className="cta-card" style={{ 
                  background: '#18A0FB', 
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
        title="Brand FAQs"
        faqs={brandFAQs}
        color="#18A0FB"
      />
    </>
  );
}