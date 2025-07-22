"use client";
import Image from "next/image";
import BenefitSection from "../components/BenefitSection";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";
import "../styles/home.css";
import "../styles/benefitSection.css";
import "../styles/featuredTalents.css";
import Statistics from "../components/Statistics";
import FeaturedTalents from "@/components/FeaturedTalents";
import BusinessSubscription from "@/components/BusinessSubscription";
import AppStores from "@/components/AppStores";
import ServerSuccessStories from "@/components/ServerSuccessStories";

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
    <main className="home-section">
      <div className="home-left">
        <h1 className="title"
          dangerouslySetInnerHTML={{ __html: t.home.welcome }}
        />
        <p>
          {t.home.description}
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

    <p style={{color:"grey"}}>{t.home.tableHeader}</p><br /><br />
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
            <td><img src="/images/homePageTable/Optimum_Nutrition_Logo.png" alt="Optimum Nutrition logo" /></td>
            <td><img src="/images/homePageTable/National-Dairy-Council.webp" alt="National Dairy Council logo" /></td>
            <td><img src="/images/homePageTable/Pure_Pharmacy.webp" alt="Pure Pharmacy logo" /></td>
          </tr>
          <tr>
            <td><img src="/images/homePageTable/Popeyes_Supplements.webp" alt="Popeyes Supplements logo" /></td>
            <td><img src="/images/homePageTable/PricewaterhouseCoopers_Logo.webp" alt="PricewaterhouseCoopers logo" /></td>
            <td><img src="/images/homePageTable/ptsb-logo-1.webp" alt="PTSB logo" /></td>
            <td><img src="/images/homePageTable/puma.webp" alt="Puma logo" /></td>
            <td><img src="/images/homePageTable/Pringles-Logo.png" alt="Pringles logo" /></td>
            <td><img src="/images/homePageTable/whoop_logo.png" alt="Whoop logo" /></td>
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
            <td style={{backgroundColor:"#18A0FB"}}  onClick={() => { window.location.href = 'https://platform.sportendorse.com/signup/brand'; }}>
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
      title={t.home.benefitSection.athlete.title}
      subtitle={t.home.benefitSection.athlete.subtitle}
      image="/images/talentBenefitPic.png"
      label={t.home.benefitSection.athlete.label}
      background="#E5F1FF"
      item1={t.home.benefitSection.athlete.bullet1}
      item2={t.home.benefitSection.athlete.bullet2}
      item3={t.home.benefitSection.athlete.bullet3}
      color="#008cfa"
      learnMoreLink="/talent"
    />

    <BenefitSection
      title={t.home.benefitSection.brand.title}
      subtitle={t.home.benefitSection.brand.subtitle}
      image="/images/Screenshot 2025-07-16 140629.png"
      label={t.home.benefitSection.brand.label} 
      background="#FFFBBC"
      item1={t.home.benefitSection.brand.bullet1}
      item2={t.home.benefitSection.brand.bullet2}
      item3={t.home.benefitSection.brand.bullet3}
      color="#F6B014"
      learnMoreLink="/brands"
    />

    {/*<BenefitSection
      title={t.home.benefitSection.agency.title}
      subtitle={t.home.benefitSection.agency.subtitle}
      image="/images/agencyBenefitPic.webp"
      label={t.home.benefitSection.agency.label}
      background="#9DE7283D"
      item1={t.home.benefitSection.agency.bullet1}
      item2={t.home.benefitSection.agency.bullet2}
      item3={t.home.benefitSection.agency.bullet3}
      color="#83BF24"
    />*/}

    <BusinessSubscription />

    <FeaturedTalents />
    
    <ServerSuccessStories />


    </>
  );
}