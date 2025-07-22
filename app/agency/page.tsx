"use client"
import Statistics from "@/components/Statistics";
import "../../styles/agency.css";
import Image from 'next/image';
import BusinessSubscription from "@/components/BusinessSubscription";
import BenefitSection from "@/components/BenefitSection";
import AgencyHowItWorks from "@/components/AgencyHowItWorks";
import ServerSuccessStories from "@/components/ServerSuccessStories";
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
            Join our diverse team of elite student-athletes to curate your 
            brand and monetize your talent. Grow your influence through 
            in-person appearances, social media promotions, and branded 
            sponsorships, connecting with influential brands worldwide.
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

    <Statistics 
      athletes={6500}
      brands={650}
      sports={3282}
      nationalities={201}
    />

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

    <ServerSuccessStories />

    <div style={{ textAlign: 'left', margin: '0 auto 40px', maxWidth: '570px', backgroundColor:"#E5F1FF", padding:"2rem", borderRadius: "20px" }}>
      <p><strong>The Sitdown with Sport Endorse</strong></p>
      <br />
      <h2>Kevin Brown</h2>
      <p style={{color:"#414a4c"}}>Director of Business Development & Sponsorship at Staten Island Entertainment</p>
      <br />
      <iframe src="https://www.podomatic.com/embed/html5/episode/10593667?style=normal&width=504&height=208" width="504" height="208" frameBorder="0" allow="encrypted-media" style={{backgroundColor:"#FBFAF5"}}></iframe>
      <p style={{marginTop:"15px"}}>
        Ever considered launching a pro-baseball team, trying to build rapidly while maximizing the positive impact of the team and its stadium for the community and sponsors? In this episode of 'The Sitdown with Sport Endorse', our guest is Kevin Brown, Director of Business Development and Sponsorship for Staten Island Entertainment, a dynamic firm that is bringing Pro baseball, concerts, and community entertainment to Staten Island in New York. 
      </p>
    </div>

    <FAQs />
    
    </>
  );
}
