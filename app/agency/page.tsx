"use client"
import Community from "@/components/Community";
import "../../styles/agency.css";
import Image from 'next/image';
import BusinessSubscription from "@/components/BusinessSubscription";
import BenefitSection from "@/components/BenefitSection";
import AgencyHowItWorks from "@/components/AgencyHowItWorks";
import SuccessStories from "@/components/SuccessStories";
import FAQs from "@/components/FAQs";

export default function AgencyPage() {
  return (
    <>
    <section className="heroSection">
      <div className="container">
        <div className="content">
          <div className="badge">
            ⦿ FOR AGENCIES
          </div>
          
          <h1 className="title">
            Book sports {' '}
            <span className="gradientText">celebrities</span>
          </h1>
          
          <p className="description">
            Our cutting-edge technological solutions reduce the steps needed to score sensational sponsorship deals for athletes.
            Sport Endorse is a simple, user-friendly platform connecting agencies with top global athletes and ambassadors
            guaranteed to take your client's marketing campaigns to the next level.
          </p>
        </div>
        
        <div className="imageContainer">
          <Image 
            src="/images/placeholder.png" 
            alt="Athlete in action"
            width={600}
            height={500}
            className="heroImage"
            priority
          />
        </div>
      </div>
    </section>

    <Community />

    <BenefitSection 
      title="Book Iconic Sports Ambassadors for Your Clients"
      subtitle="Our user-friendly platform seamlessly connects agencies with top global athletes and ambassadors, reducing the steps to secure exceptional sponsorship deals and amplify your clients' marketing campaigns."
      image="/images/agencyPhonePic.png"
      label=""
      background="white"
      item1="Managing multiple sponsorship deals efficiently"
      item2="Finding the right athletes or influencers for specific campaigns"
      item3="Ensuring authentic brand-athlete alignment"
      color="#F6B014"
    />

    <AgencyHowItWorks />

    <BusinessSubscription />

    <SuccessStories />

    {/* removing the featured podcast part per Liam's feedback in doc 7/28
    <div style={{ textAlign: 'left', margin: '0 auto 40px', maxWidth: '570px', backgroundColor:"#E5F1FF", padding:"2rem", borderRadius: "20px" }}>
      <p><strong>The Sitdown with Sport Endorse</strong></p>
      <br />
      <h2>Kevin Brown</h2>
      <p style={{color:"#414a4c"}}>Director of Business Development & Sponsorship at Staten Island Entertainment</p>
      <br />
      <iframe src="https://www.podomatic.com/embed/html5/episode/10593667?style=normal&width=504&height=208" width="504" height="208" frameBorder="0" allow="encrypted-media" style={{backgroundColor:"#FBFAF5"}}></iframe>
      <p style={{marginTop:"15px"}}>
        Ever considered launching a pro-baseball team, trying to build rapidly while maximizing the positive impact of the team and its stadium for the community and sponsors? In this episode of &apos;The Sitdown with Sport Endorse&apos;, our guest is Kevin Brown, Director of Business Development and Sponsorship for Staten Island Entertainment, a dynamic firm that is bringing Pro baseball, concerts, and community entertainment to Staten Island in New York. 
      </p>
    </div>
    */}

    <FAQs />
    
    </>
  );
}
