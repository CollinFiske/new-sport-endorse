// components/Header.tsx
"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../context/LanguageContext";
import "../styles/header.css";
import MainLogo from "./MainLogo";
import translations from "@/utils/translations";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="modern-header">

      <div className="logo-area">
        <MainLogo/>
      </div>

      <nav className="main-nav">
        <Link href="/talent">Talent</Link>
        <Link href="/brands">Brands</Link>
        {/*<Link href="/agency">{t.header.agencies}</Link>*/}
        <Link href="/wp/successStories">Success Stories</Link>
        <div className="dropdown">
          <span>Resources ▾</span>
          <div className="dropdown-content">
            <Link href="/agency">Agencies</Link>
            <Link href="/subscription">Subscription</Link>
            <Link href="/wp/blog">Blog</Link>
            <Link href="/wp/podcasts">Podcasts</Link>
            <Link href="/aboutUs">About Us</Link>
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
        <a target="_blank" href="https://platform.sportendorse.com/signup/talent">
          <button className="signup-btn">{t.header.signUpBtn}</button>
        </a>
        <a target="_blank" href="https://calendly.com/d/dzw-nc4-57b/sport-endorse-demo?month=2025-07">
          <button className="demo-btn">{t.header.demoBtn}</button>
        </a>
      </div>

    </header>
  );
}