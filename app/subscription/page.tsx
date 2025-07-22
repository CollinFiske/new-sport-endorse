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

            <div style={{ textAlign: 'center', padding: '0', margin: '0' }}>
                <h2 style={{ fontSize: '2rem', margin: '60px 0 20px', color: '#333' }}>See Sport Endorse in Action</h2>
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