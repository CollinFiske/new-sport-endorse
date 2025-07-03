"use client";
import Image from "next/image";
import BenefitSection from "../components/BenefitSection";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";
import "../styles/home.css";
import "../styles/benefitSection.css";
import "../styles/successStories.css";
import "../styles/featuredTalents.css";
import Statistics from "../components/Statistics";
import FeaturedTalents from "@/components/FeaturedTalents";
import SuccessStories from "@/components/SuccessStories";
import BusinessSubscription from "@/components/BusinessSubscription";

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
    <main className="home-section">
      <div className="home-left">
        <h1 className="title"
          dangerouslySetInnerHTML={{ __html: t.welcome }}
        />
        <p>
          {t.description}
        </p>
        <div className="store-badges">
          <img src="/images/appleStore.png" alt="App Store" />
          <img src="/images/googlePlay.png" alt="Google Play" />
        </div>
        <div style={{display:"flex"}}>
          <div className="rating">⭐⭐⭐⭐⭐ 4.9</div>
          <img style={{marginLeft:200}} src="/images/appforathletes.png" alt="app for athletes text" />
        </div>
      </div>
      <div className="home-right">
        <Image src="/images/homeHero.png" alt="Athlete Hero" width={500} height={500} />
      </div>

    </main>

     <p style={{marginLeft:100, color:"grey"}}>JOIN 50+ BRANDS & ELITE ATHLETES IN AUTHENTIC SPORTS PARTNERSHIPS</p><br></br>
     <div className="image-grid">
        <table>
          <tbody>
            <tr>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
            </tr>
            <tr>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
            </tr>
            <tr>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
            </tr>
            <tr>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
              <td><img src="/images/placeholder.png" alt="1" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <Statistics 
        athletes={6500}
        brands={650}
        sports={3282}
        nationalities={201}
      />

      <BenefitSection
        title="Boost your personal brand"
        subtitle="Content dedicated to target audience. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        image="/images/placeholder.png"
        label="FOR ATHLETES"
        background="#e8f2fd"
      />

      <BenefitSection
        title="Connect with global sports stars"
        subtitle="Content dedicated to target audience. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        image="/images/placeholder.png"
        label="FOR BRANDS"
        background="#ffffb3"
      />

      <BenefitSection
        title="Book sport brand ambassadors"
        subtitle="Content dedicated to target audience. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        image="/images/placeholder.png"
        label="FOR AGENCIES"
        background="#c6ffb3"
      />

      <BenefitSection
        title="Book a Demo to get more insights"
        subtitle=""
        image="/images/placeholder.png"
        label=""
        background="#3b82f6"
      />

      <BusinessSubscription />

      <FeaturedTalents />
      
      <SuccessStories />


    </>
  );
}