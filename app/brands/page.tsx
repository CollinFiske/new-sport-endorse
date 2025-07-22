"use client"
import Statistics from "@/components/Statistics";
import "../../styles/brands.css";
import Image from 'next/image';
import BusinessSubscription from "@/components/BusinessSubscription";
import FAQs from "@/components/FAQs";
import ServerSuccessStories from "@/components/ServerSuccessStories";
import BenefitSection from "@/components/BenefitSection";
import AgencyHowItWorks from "@/components/AgencyHowItWorks";

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
            Get the highest{' '}
            <span className="gradientText">talent </span> to boost{' '}
            your brand
          </h1>
          
          <p className="description">
            Join our diverse team of elite student-athletes to curate your 
            brand and monetize your talent. Grow your influence through 
            in-person appearances, social media promotions, and branded 
            sponsorships, connecting with influential brands worldwide.
          </p>
        </div>
        
        <div className="imageContainer">
          <Image  // have featured brands scrolled thru in the image here instead - would match the talent one but with brands, not athletes
            src="/images/brandHero.png" 
            alt="Athlete in action"
            width={600}
            height={500}
            className="heroImage"
            priority
          />
        </div>
      </div>
    </section>

    <Statistics 
      athletes={6500}
      brands={650}
      sports={3282}
      nationalities={201}
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
    
    <ServerSuccessStories />

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

    <FAQs />

    </>
  );
}
