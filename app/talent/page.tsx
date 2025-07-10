"use client"
import Statistics from "@/components/Statistics";
import "../../styles/talent.css";
import Image from 'next/image';
import AppStores from "@/components/AppStores";

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
    </>
  );
}
