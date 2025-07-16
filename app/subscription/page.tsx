"use client"

import BusinessSubscription from "@/components/BusinessSubscription";
import CalendlyDemo from "@/components/CalendlyDemo";
import FAQs from "@/components/FAQs";
import SuccessStories from "@/components/SuccessStories";


export default function Subscription(){
    return (
        <main style={{maxWidth:"1200px", margin:"0 auto"}}>
        <br/>
        <BusinessSubscription />

        <div>
            <h3>See Sport Endorse in action</h3>
            <p>
                Select a time that suits to learn more about our innovative solution and revolutionary platform, set up your account, and use athletes to endorse products and services.
            </p>
            <CalendlyDemo />
        </div>

        <SuccessStories />

        <FAQs />
        
        </main>
    );
    
}