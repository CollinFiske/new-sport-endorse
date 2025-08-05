"use client"
import Community from "@/components/Community";
import "../../styles/brands.css";
import BusinessSubscription from "@/components/BusinessSubscription";
import FAQs from "@/components/FAQs";
import SuccessStories from "@/components/SuccessStories";
import BenefitSection from "@/components/BenefitSection";
import AgencyHowItWorks from "@/components/AgencyHowItWorks";
import BrandsGrid from "@/components/BrandsGrid";
import CalendlyDemo from "@/components/CalendlyDemo";
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
            Get the best{' '}
            talent to<span className="gradientText"> boost</span>{' '}
            your brand
          </h1>
          
          <p className="description">
            Whatever your needs, our athletes have you covered.
            We work with over 7000 sporting heroes from over 90 disciplines, all with different passions, interests and beliefs.
            Whether you need someone passionate about mental health, coffee or nutrition, Sport Endorse&apos;s user-friendly platform
            makes it easy to find the perfect fit for your next event, guest speaker, or marketing campaign.
          </p>
        </div>
        
        <div className="imageContainer">
          <BrandsGrid variant="5x4" label="Check out our Featured Brands!" />
        </div>
      </div>
    </section>

    <Community
    />

    <BenefitSection 
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
    />

    <AgencyHowItWorks />

    <BusinessSubscription />
    
    <SuccessStories />

    {/* removing the featured podcast part per Liam's feedback in doc 7/28
    <div style={{ textAlign: 'left', margin: '0 auto 40px', maxWidth: '570px', backgroundColor:"#E5F1FF", padding:"2rem", borderRadius: "20px" }}>
      <p><strong>The Sitdown with Sport Endorse</strong></p>
      <br />
      <h2>Lorna Danaher</h2>
      <p style={{color:"#414a4c"}}>Sponsorship Manager at Energia</p>
      <br />
      <iframe src="https://www.podomatic.com/embed/html5/episode/10536784?style=normal&width=504&height=208" width="504" height="208" frameBorder="0" allow="encrypted-media" style={{backgroundColor:"#FBFAF5"}}></iframe>
      <p style={{marginTop:"15px"}}>
        For the first episode in a series where we explore the collaboration between brands and sport and what best practice looks like, we were delighted to have Lorna Danaher, Sponsorship Manager for Energia, as our guest.
      </p>
    </div>
    */}

    <div style={{ textAlign: 'center', padding: '0', margin: '0 auto', maxWidth:"1200px" }}>
      <h2 style={{ fontSize: '2rem', margin: '0 0 20px', color: '#333' }}>See Sport Endorse in Action</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto', color: '#666' }}>
          Select a time that suits to learn more about our innovative solution and revolutionary platform, set up your account, and use athletes to endorse products and services.
      </p>
      <CalendlyDemo />
    </div>

    <FAQs />

    </>
  );
}
