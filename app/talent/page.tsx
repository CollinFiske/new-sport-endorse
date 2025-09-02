import Community from "@/components/Community";
import "../../styles/talent.css";
import Image from 'next/image';
import AppStores from "@/components/AppStores";
import SuccessStories from "@/components/SuccessStories";
import FeaturedTalents from "@/components/FeaturedTalents";
import LetsTalk from "@/components/LetsTalk";
import BenefitSection from "@/components/BenefitSection";
import BrandsGrid from "@/components/BrandsGrid";
import { Metadata } from "next";


export const metadata: Metadata = {
  //metadataBase: new URL("put the home url here later"),
  title: "Elite Athletes: Boost Your Brand with Sponsorships | Join Sport Endorse",
  description: "Elite athletes, take control of your brand. Join Sport Endorse to connect with global brands, secure sponsorships, and enhance your visibility in sports marketing.",
  openGraph:{ // og:title and so on
    title: "Elite Athletes: Boost Your Brand with Sponsorships | Join Sport Endorse",
    description: "Elite athletes, take control of your brand. Join Sport Endorse to connect with global brands, secure sponsorships, and enhance your visibility in sports marketing.",
    type:"website",
    locale:"en_US",
    //url:"" to be added later
    siteName:"Sport Endorse"
  },
};

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
            Join our diverse team of elite athletes to curate your 
            brand and monetize your talent. Grow your influence through 
            in-person appearances, social media promotions, and branded 
            sponsorships, connecting with influential brands worldwide.
          </p>
          
          <div className="talent-apps">
            <AppStores />
          </div>
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

    <Community />

    {/*<p style={{textAlign:"center", margin:"200px"}}>1 2 3 4 steps here</p>*/}
    <BenefitSection 
      title="Join our Talented Team of Athletes"
      subtitle="Join 7000+ talent who are using Sport Endorse to find more commercial opportunities."
      image="/images/phone-talent-benefit-pic.png"
      label=""
      background="white"
      item1="Motivate your fans with inspiring public appearances"
      item2="Aid your athletic performances"
      item3="Start earning more money from your hard work!"
      color="#F6B014"
      learnMoreLink="/wp/successStories"
    />

    <section style={{ backgroundColor: '#f8f9fa', padding: '2rem', margin: '0 0 2rem' }}>
      <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <BrandsGrid variant="5x4" />
        </div>
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#333', marginBottom: '20px', lineHeight: '1.2' }}>
            <span style={{ color: '#18A0FB' }}>FREE</span> To Sign Up
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>
            Athletes can join Sport Endorse for free! Just create an account and start working with globally recognized brands to start earning!
          </p>
          <AppStores />
        </div>
      </div>
    </section>

    <SuccessStories />

    <LetsTalk />

    <FeaturedTalents /> {/* maybe instead have it so that the featured talents are scrolled thru in the home hero picture */}

    {/* removing the featured podcast part per Liam's feedback in doc 7/28
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
    */}

    <br/>
    <br/>
    
    </>
  );
}
