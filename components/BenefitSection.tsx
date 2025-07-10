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
  color?: string;
}

export default function BenefitSection({ title, subtitle, image, label, background = "#e8f2fd", item1="item1", item2="item2", item3="item3", color="#008cfa" }: BenefitProps) {
  return (
    <section className="benefit-section" style={{ background }}>
      <div className="benefit-left">
        {label && <span className="benefit-label" style={{ color }}>◉ {label}</span>}
        <h2 style={label ? undefined: { marginTop: 0 }}>{title}</h2>
        <p>{subtitle}</p>
        <ul>
          <li>💛 {item1}</li>
          <li>🟡 {item2}</li>
          <li>⭐ {item3}</li>
        </ul>
        <div className="button-group">
          <a href="/talent"><button className="benefit-button">LEARN MORE</button></a>
          <a href="/"><button className="demo-button">DEMO FOR BUSINESS</button></a>
        </div>
      </div>
      <div className="benefit-right">
        <img src={image} alt="Benefit Example Image" className="benefit-right img" />
      </div>
    </section>
  );
}