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
import AppStores from "@/components/AppStores";

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
        <AppStores />
        <br/>
        <div style={{display:"flex"}}>
          <div className="rating">⭐⭐⭐⭐⭐ 4.9</div>
          <img style={{marginLeft:200}} src="/images/appforathletes.png" alt="app for athletes text" />
        </div>
      </div>
      <div className="home-right">
        <Image src="/images/homeHero.png" alt="Athlete Hero" width={500} height={500} />
      </div>

    </main>

     <p style={{color:"grey"}}>JOIN 50+ BRANDS & ELITE ATHLETES IN AUTHENTIC SPORTS PARTNERSHIPS</p><br /><br />
     <div>
        <table>
          <tbody>
            <tr>
              <td><img src="/images/homePageTable/Alpro_Logo_Slider.webp" alt="Alpro logo" /></td>
              <td><img src="/images/homePageTable/bunq.webp" alt="Bunq logo" /></td>
              <td><img src="/images/homePageTable/Energia.webp" alt="Energia logo" /></td>
              <td><img src="/images/homePageTable/Factor.webp" alt="Factor logo" /></td>
              <td><img src="/images/homePageTable/GrantThornton.webp" alt="Grant Thornton logo" /></td>
              <td><img src="/images/homePageTable/Green_Isle_Foods.webp" alt="Green Isle Foods logo" /></td>
              <td><img src="/images/homePageTable/INDI_Supplements.webp" alt="INDI Supplements logo" /></td>
              <td><img src="/images/homePageTable/LIERAC.webp" alt="LIERAC logo" /></td>
            </tr>
            <tr>
              <td><img src="/images/homePageTable/Irish_Citylink.webp" alt="Irish Citylink logo" /></td>
              <td><img src="/images/homePageTable/JTM_logo.webp" alt="JTM logo" /></td>
              <td><img src="/images/homePageTable/FutureProofPro.webp" alt="FutureProofPro logo" /></td>
              <td><img src="/images/homePageTable/Kelloggs_Logo_Slider.webp" alt="Kellogg's logo" /></td>
              <td><img src="/images/homePageTable/Lovable.webp" alt="Lovable logo" /></td>
              <td><img src="/images/homePageTable/Millennium_Communications.webp" alt="Millennium Communications logo" /></td>
              <td><img src="/images/homePageTable/National-Dairy-Council.webp" alt="National Dairy Council logo" /></td>
              <td><img src="/images/homePageTable/Pure_Pharmacy.webp" alt="Pure Pharmacy logo" /></td>
            </tr>
            <tr>
              <td><img src="/images/homePageTable/Popeyes_Supplements.webp" alt="Popeyes Supplements logo" /></td>
              <td><img src="/images/homePageTable/PricewaterhouseCoopers_Logo.webp" alt="PricewaterhouseCoopers logo" /></td>
              <td><img src="/images/homePageTable/ptsb-logo-1.webp" alt="PTSB logo" /></td>
              <td><img src="/images/homePageTable/puma.webp" alt="Puma logo" /></td>
              <td><img src="/images/homePageTable/Red_Bull.webp" alt="Red Bull logo" /></td>
              <td><img src="/images/homePageTable/RemusUomo.webp" alt="Remus Uomo logo" /></td>
              <td><img src="/images/homePageTable/Shokz.webp" alt="Shokz logo" /></td>
              <td><img src="/images/homePageTable/Hard_Rock_Cafe.webp" alt="Hard Rock Cafe logo" /></td>
            </tr>
            <tr>
              <td><img src="/images/homePageTable/shuzgroup.webp" alt="Shuz Group logo" /></td>
              <td><img src="/images/homePageTable/skechers.webp" alt="Skechers logo" /></td>
              <td><img src="/images/homePageTable/Specsaver.webp" alt="Specsavers logo" /></td>
              <td><img src="/images/homePageTable/Sports-Direct_Logo_Slider.webp" alt="Sports Direct logo" /></td>
              <td><img src="/images/homePageTable/SuperValu.webp" alt="SuperValu logo" /></td>
              <td><img src="/images/homePageTable/Tula.webp" alt="Tula logo" /></td>
              <td><img src="/images/homePageTable/VHI_Logo_Slider.webp" alt="VHI logo" /></td>
              <td style={{backgroundColor:"#007bff"}}  onClick={() => { window.location.href = '/'; }}/* this would eventually link to the brand sign up page */>
                <img src="/images/whiteSportEndorseLogo.webp" alt="sport endorse logo" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Statistics 
        athletes={6500}
        brands={650}
        sports={250}
        nationalities={85}
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