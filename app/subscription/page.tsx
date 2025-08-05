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

            <div style={{ textAlign: 'center', padding: '0', margin: '0' }}>
                <h2 style={{ fontSize: '2rem', margin: '0 0 20px', color: '#333' }}>See Sport Endorse in Action</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                    Select a time that suits to learn more about our innovative solution and revolutionary platform, set up your account, and use athletes to endorse products and services.
                </p>
                <CalendlyDemo />
            </div>

            <SuccessStories />

            <FAQs />
        
        </main>
    );
    
}