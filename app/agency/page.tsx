import Community from "@/components/Community";
import "../../styles/agency.css";
import Image from 'next/image';
import BusinessSubscription from "@/components/BusinessSubscription";
import BenefitSection from "@/components/BenefitSection";
import AgencyHowItWorks from "@/components/AgencyHowItWorks";
import SuccessStories from "@/components/SuccessStories";
import FAQs from "@/components/FAQs";
import CalendlyDemo from "@/components/CalendlyDemo";
import { Metadata } from "next";


export const metadata: Metadata = {
  //metadataBase: new URL("put the home url here later"),
  title: "Book sports celebrities | Sport Endorse",
  description: "Our cutting-edge technological solutions reduce the steps needed to score sensational sponsorship deals for athletes. Sport Endorse is a simple, user-friendly platform connecting agencies with top global athletes and ambassadors guaranteed to take your client's marketing campaigns to the next level.",
  openGraph:{ // og:title and so on
    title: "Book sports celebrities | Sport Endorse",
    description: "Our cutting-edge technological solutions reduce the steps needed to score sensational sponsorship deals for athletes. Sport Endorse is a simple, user-friendly platform connecting agencies with top global athletes and ambassadors guaranteed to take your client's marketing campaigns to the next level.",
    type:"website",
    locale:"en_US",
    //url:"" to be added later
    siteName:"Sport Endorse"
  },
};

export default function AgencyPage() {
  return (
    <>
    <section className="agency-heroSection">
      <div className="agency-container">
        <div className="agency-content">
          <div className="agency-badge">
            ⦿ FOR AGENCIES
          </div>
          
          <h1 className="agency-title">
            Book sports {' '}
            <span className="agency-gradientText">celebrities</span>
          </h1>
          
          <p className="agency-description">
            The all-in-one platform for your sports agency to secure and manage paid collaborations at scale. Connect your entire roster with brands seeking authentic partnerships that align with their profiles and passions. 
          </p>
        </div>
        
        <div className="agency-imageContainer">
          <div className="agency-dashboard-wrapper">
            <Image 
              src="/images/agency_dashboard.png" 
              alt="Agency Dashboard - Sport Endorse Platform" 
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

    {/*<BenefitSection 
      title="Book Iconic Sports Ambassadors for Your Clients"
      subtitle="Our user-friendly platform seamlessly connects agencies with top global athletes and ambassadors, reducing the steps to secure exceptional sponsorship deals and amplify your clients' marketing campaigns."
      image="/images/agencyPhonePic.png"
      label=""
      background="white"
      item1="Managing multiple sponsorship deals efficiently"
      item2="Finding the right athletes or influencers for specific campaigns"
      item3="Ensuring authentic brand-athlete alignment"
      color="#F6B014"
    />*/}

    <AgencyHowItWorks />

    <CalendlyDemo agencies={true} />

    <SuccessStories />

    </>
  );
}
