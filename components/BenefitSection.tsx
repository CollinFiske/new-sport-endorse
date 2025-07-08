"use client";
import Image from "next/image";
import "../styles/benefitSection.css";

interface BenefitProps {
  title: string;
  subtitle: string;
  image: string;
  label?: string;
  background?: string;
  item1?: string;
  item2?: string;
  item3?: string;
}

export default function BenefitSection({ title, subtitle, image, label = "FOR ATHLETES", background = "#e8f2fd", item1="item1", item2="item2", item3="item3" }: BenefitProps) {
  return (
    <section className="benefit-section" style={{ background }}>
      <div className="benefit-left">
        <span className="benefit-label">{label}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <ul>
          <li>💛 {item1}</li>
          <li>🟡 {item2}</li>
          <li>⭐ {item3}</li>
        </ul>
        <div className="button-group">
          <button className="benefit-button">LEARN MORE</button>
          <button className="demo-button">DEMO FOR BUSINESS</button>
        </div>
      </div>
      <div className="benefit-right">
        <Image src={image} alt="Benefit Example Image" width={200} height={150} className="benefit-right img" style={{ width: "60%", height: "auto" }}/>
      </div>
    </section>
  );
}