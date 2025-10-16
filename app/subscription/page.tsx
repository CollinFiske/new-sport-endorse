import BusinessSubscription from "@/components/BusinessSubscription";
import CalendlyDemo from "@/components/CalendlyDemo";
import FAQs from "@/components/FAQs";
import SuccessStories from "@/components/SuccessStories";
import { Metadata } from "next";


export const metadata: Metadata = {
  //metadataBase: new URL("put the home url here later"),
  title: "Subscribe to Sport Endorse's Athlete Sponsorship Platform | Sport Endorse",
  description: "Explore how Sport Endorse's platform simplifies sponsorship management. Request a demo to connect with elite athletes, brand ambassadors, and sports influencers.",
  openGraph:{ // og:title and so on
    title: "Subscribe to Sport Endorse's Athlete Sponsorship Platform | Sport Endorse",
    description: "Explore how Sport Endorse's platform simplifies sponsorship management. Request a demo to connect with elite athletes, brand ambassadors, and sports influencers.",
    type:"website",
    locale:"en_US",
    //url:"" to be added later
    siteName:"Sport Endorse"
  },
};


export default function Subscription(){
    return (
        <main style={{maxWidth:"1200px", margin:"0 auto"}}>
            <br/>
            <BusinessSubscription />

            <CalendlyDemo />

            <SuccessStories />

            <FAQs />
        
        </main>
    );
    
}