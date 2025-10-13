import Community from "@/components/Community";
import "../../styles/brands.css";
import BusinessSubscription from "@/components/BusinessSubscription";
import SuccessStories from "@/components/SuccessStories";
import BrandHowItWorks from "@/components/BrandHowItWorks";
import CalendlyDemo from "@/components/CalendlyDemo";
import BrandKeyFeatures from "@/components/BrandKeyFeatures";
import BrandReviews from "@/components/BrandReviews";
import { Metadata } from "next";


export const metadata: Metadata = {
  //metadataBase: new URL("put the home url here later"),
  title: "Find Elite Athletes & Sports Influencers for Your Brand | Sport Endorse",
  description: "Discover elite athletes and sports influencers to enhance your brand's visibility. Sport Endorse helps you manage athlete sponsorships and sports marketing campaigns.",
  openGraph:{ // og:title and so on
    title: "Find Elite Athletes & Sports Influencers for Your Brand | Sport Endorse",
    description: "Discover elite athletes and sports influencers to enhance your brand's visibility. Sport Endorse helps you manage athlete sponsorships and sports marketing campaigns.",
    type:"website",
    locale:"en_US",
    //url:"" to be added later
    siteName:"Sport Endorse"
  },
};

export default function BrandsPage() {
  return (
    <>
    <section className="heroSection">
      <div className="container">
        <div className="content">
          <div className="badge">
            ⦿ FOR BRANDS
          </div>
          
          <h1 className="title">
            Find the Right <span className="gradientText">Talent </span>
            for Your Marketing Campaigns
          </h1>
          
          <p className="description">
            Sport Endorse&apos;s global platform connects you with thousands of elite athletes and influencers for marketing campaigns and events, making it easy to find perfect talent and deliver real results.
          </p>
        </div>
        
        <div className="imageContainer">
          <div className="talent-showcase">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#333', marginBottom: '1rem' }}>Featured Athletes</h3>
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
                  <p style={{ fontSize: '0.75rem', color: '#666', margin: '0' }}>Freestyle Football</p>
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
                  <p style={{ fontSize: '0.75rem', color: '#666', margin: '0' }}>Fitness</p>
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
                  <p style={{ fontSize: '0.75rem', color: '#666', margin: '0' }}>Athletics</p>
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
                  <p style={{ fontSize: '0.75rem', color: '#666', margin: '0' }}>Football</p>
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
                  <p style={{ fontSize: '0.75rem', color: '#666', margin: '0' }}>Triathlon</p>
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
                <p style={{ fontSize: '0.85rem', fontWeight: '600', margin: '0', textTransform: 'uppercase' }}>View All</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*<BenefitSection 
      title="Book Iconic Sports Ambassadors"
      subtitle="Our user-friendly platform seamlessly connects agencies with top global athletes and ambassadors, reducing the steps to secure exceptional sponsorship deals and amplify your clients' marketing campaigns."
      image="/images/agencyPhonePic.png"
      label=""
      background="white"
      item1="Managing multiple sponsorship deals efficiently"
      item2="Finding the right athletes or influencers for specific campaigns"
      item3="Ensuring authentic brand-athlete alignment"
      color="#F6B014"
      learnMoreLink="/wp/successStories"
    /> removed as per doc 9/25*/}

    <BrandHowItWorks />

    <BrandKeyFeatures />

    <SuccessStories />

    <BusinessSubscription />

    <CalendlyDemo />

    {/*<FAQs /> removed as per doc 9/25*/}

    <BrandReviews />

    </>
  );
}
