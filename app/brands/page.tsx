"use client"
import Statistics from "@/components/Statistics";
import "../../styles/brands.css";
import Image from 'next/image';
import BusinessSubscription from "@/components/BusinessSubscription";

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
            Get the highest{' '}
            <span className="gradientText">talent </span> to boost{' '}
            your brand
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
            src="/images/brandHero.png" 
            alt="Athlete in action"
            width={600}
            height={500}
            className="heroImage"
            priority
          />
        </div>
      </div>
    </section>

    <BusinessSubscription />

    <Statistics 
      athletes={6500}
      brands={650}
      sports={3282}
      nationalities={201}
    />
    </>
  );
}
