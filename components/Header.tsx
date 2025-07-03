// components/Header.tsx
"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../context/LanguageContext";
import "../styles/header.css";

export default function Header() {
  const { language, changeLanguage } = useLanguage();

  return (
    <header className="modern-header">
      <div className="logo-area">
        <img src="/images/logo-modern.png" alt="Sport Endorse" />
        <span className="brand-name">SPORT ENDORSE</span>
      </div>
      <nav className="main-nav">
        <Link href="/">Athletes</Link>
        <div className="dropdown">
          <span>Brands ▾</span>
          <div className="dropdown-content">
            <Link href="/brand">For Single Brands</Link>
            <Link href="/brand">For Multiple Brands</Link>
          </div>
        </div>
        <Link href="#">Agencies</Link>
        <Link href="#">Subscription</Link>
        <Link href="#">Clients</Link>
        <div className="dropdown">
          <span>Resources ▾</span>
          <div className="dropdown-content">
            <Link href="#">Blog</Link>
            <Link href="#">Guides</Link>
            <Link href="#">Podcast</Link>
          </div>
        </div>
      </nav>
      <div className="actions">
        <select value={language} onChange={(e) => changeLanguage(e.target.value as Language)}>
          <option value="en">🇺🇸</option>
          <option value="es">🇪🇸</option>
          <option value="fr">🇫🇷</option>
          <option value="de">🇩🇪</option>
        </select>
        <button className="signup-btn">SIGN UP</button>
        <button className="demo-btn">DEMO FOR BUSINESS</button>
      </div>
    </header>
  );
}