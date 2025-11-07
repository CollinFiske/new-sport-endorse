"use client";
import "../styles/benefitSection.css";
import AppStores from "./AppStores";
import Image from 'next/image';

interface BenefitProps {
  title: string;
  subtitle: string;
  image: string;
  label?: string;
  background?: string;
  item1?: string;
  item2?: string;
  item3?: string;
  color?: string;
  learnMoreLink?: string;
}

export default function BenefitSection({ title, subtitle, image, label, background = "#e8f2fd", item1="item1", item2="item2", item3="item3", color="#009ee3", learnMoreLink = "/talent" }: BenefitProps) {
  return (
    <section className="benefit-section" style={{ background, paddingBottom:  "2rem !important"}}>
      <div className="benefit-left">
        {label && <a href={learnMoreLink}><span className="benefit-label" style={{ color }}>◉ {label}</span></a>}
        <h2 style={label ? undefined: { marginTop: 0 }}>{title}</h2>
        <p>{subtitle}</p>
        <div className="icons-row">
          <Image src="/images/gold-heart-icon2.png" alt="heart" width={24} height={24} className="bullet-icon-mobile" />
          <Image src="/images/division_icon.png" alt="division" width={24} height={24} className="bullet-icon-mobile" />
          <Image src="/images/star_icon.png" alt="star" width={24} height={24} className="bullet-icon-mobile" />
        </div>
        <ul>
          <li><Image src="/images/gold-heart-icon2.png" alt="heart" width={16} height={16} className="bullet-icon" /> {item1}</li>
          <li><Image src="/images/division_icon.png" alt="division" width={16} height={16} className="bullet-icon" /> {item2}</li>
          <li><Image src="/images/star_icon.png" alt="star" width={16} height={16} className="bullet-icon" /> {item3}</li>
        </ul>
        <div className="button-group">
          {image && (image !== "/images/talentBenefitPic.png" && image !== "images/agencyBenefitPic.jpg") ? (
            <>
              <a target="_blank" href="https://platform.sportendorse.com/signup/brand?subscription=trial"><button className="benefit-button">START FREE TRIAL</button></a>
              <a target="_blank" href="https://calendly.com/d/dzw-nc4-57b/sport-endorse-demo?month=2025-07">
              <button className="demo-button">DEMO FOR BUSINESS</button>
              </a>
            </>
          ) : (
            <div><AppStores /></div>
          )}
        </div>
      </div>
      <div className="benefit-right">
        <Image src={image} alt="Benefit Example Image" width={400} height={300} className="benefit-right img" />
      </div>
    </section>
  );
}