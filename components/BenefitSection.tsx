"use client";
import "../styles/benefitSection.css";
import AppStores from "./AppStores";

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

export default function BenefitSection({ title, subtitle, image, label, background = "#e8f2fd", item1="item1", item2="item2", item3="item3", color="#008cfa", learnMoreLink = "/talent" }: BenefitProps) {
  return (
    <section className="benefit-section" style={{ background, paddingBottom: label === "FOR BRANDS" ? "40px" : undefined }}>
      <div className="benefit-left">
        {label && <a href={learnMoreLink}><span className="benefit-label" style={{ color }}>◉ {label}</span></a>}
        <h2 style={label ? undefined: { marginTop: 0 }}>{title}</h2>
        <p>{subtitle}</p>
        <ul>
          <li>💛 {item1}</li>
          <li>🟡 {item2}</li>
          <li>⭐ {item3}</li>
        </ul>
        <div className="button-group">
          {title && (title !== "Join our Talented Team of Athletes" && title !== "Boost your personal brand") ? (
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
        <img src={image} alt="Benefit Example Image" className="benefit-right img" />
      </div>
    </section>
  );
}