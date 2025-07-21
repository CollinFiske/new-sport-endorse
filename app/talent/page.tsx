"use client"
import Statistics from "@/components/Statistics";
import "../../styles/talent.css";
import Image from 'next/image';
import AppStores from "@/components/AppStores";
import SuccessStories from "@/components/SuccessStories";
import FeaturedTalents from "@/components/FeaturedTalents";
import LetsTalk from "@/components/LetsTalk";
import AgencyHowItWorks from "@/components/AgencyHowItWorks";
import BenefitSection from "@/components/BenefitSection";

export default function TalentPage() {
  return (
    <>
    <section className="heroSection">
      <div className="container">
        <div className="content">
          <span className="badge">
            ⦿ FOR ATHLETES
          </span>
          
          <h1 className="title">
            Boost your{' '}
            <span className="gradientText">personal</span>{' '}
            brand
          </h1>
          
          <p className="description">
            Join our diverse team of elite student-athletes to curate your 
            brand and monetize your talent. Grow your influence through 
            in-person appearances, social media promotions, and branded 
            sponsorships, connecting with influential brands worldwide.
          </p>
          
          <AppStores />

        </div>
           
        <div className="imageContainer">
          <Image 
            src="/images/athleteHero.png" 
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

    {/*<p style={{textAlign:"center", margin:"200px"}}>1 2 3 4 steps here</p>*/}
    <BenefitSection 
      title="Join our Talented Team of Athletes"
      subtitle="Start curating your brand and monetizing your talent by joining our diverse team of elite student-athletes, passionate about furthering their career and connecting with influential brands around the world."
      image="/images/phone-talent-benefit-pic.png"
      label=""
      background="white"
      item1="Create a stand-out user profile"
      item2="Motivate your fans with inspiring public appearances"
      item3="Use our built-in chat messenger to communicate with brands"
      color="#F6B014"
      learnMoreLink="/wp/successStories"
    />

    <SuccessStories />

    <LetsTalk />

    <FeaturedTalents /> {/* maybe instead have it so that the featured talents are scrolled thru in the home hero picture */}

    <div style={{ textAlign: 'left', margin: '3rem auto', maxWidth: '570px', backgroundColor:"#E5F1FF", padding:"2rem", borderRadius: "20px" }}>
      <p><strong>The Sitdown with Sport Endorse</strong></p>
      <br />
      <h2>Lorna Danaher</h2>
      <p style={{color:"#414a4c"}}>Sponsorship Manager at Energia</p>
      <br />
      <iframe src="https://podomatic.com/embed/html5/episode/10764959" width="504" height="208" frameBorder="0" allow="encrypted-media" style={{backgroundColor:"#FBFAF5"}}></iframe>
      <p style={{marginTop:"15px"}}>
        For the first episode in a series where we explore the collaboration between brands and sport and what best practice looks like, we were delighted to have Lorna Danaher, Sponsorship Manager for Energia, as our guest.
      </p>
    </div>
    
    </>
  );
}
