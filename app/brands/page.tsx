import Community from "@/components/Community";
import "../../styles/brands.css";
import BusinessSubscription from "@/components/BusinessSubscription";
import SuccessStories from "@/components/SuccessStories";
import BrandHowItWorks from "@/components/BrandHowItWorks";
import BrandsGrid from "@/components/BrandsGrid";
import CalendlyDemo from "@/components/CalendlyDemo";
import BrandKeyFeatures from "@/components/BrandKeyFeatures";
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
          <BrandsGrid variant="5x4" label="" />
        </div>
      </div>
    </section>

    <Community />

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

    <BusinessSubscription />
    
    <SuccessStories />

    <CalendlyDemo />

    {/*<FAQs /> removed as per doc 9/25*/}

    </>
  );
}
