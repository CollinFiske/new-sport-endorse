// components/Header.tsx
"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../context/LanguageContext";
import "../styles/header.css";
import MainLogo from "./MainLogo";

export default function Header() {
  const { language, changeLanguage } = useLanguage();

  return (
    <header className="modern-header">
      <div className="logo-area">
        <MainLogo/>
      </div>
      <nav className="main-nav">
        <Link href="/talent">Talent</Link>
        <Link href="/brands">Brands</Link>
        <Link href="/agency">Agencies</Link>
        <Link href="#">Subscription</Link>
        <div className="dropdown">
          <span>Resources ▾</span>
          <div className="dropdown-content">
            <Link href="#">Blog</Link>
            <Link href="#">Guides</Link>
            <Link href="#">Podcast</Link>
            <Link href="#">About Us</Link>
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
        <a target="_blank" href="https://platform.sportendorse.com/signup/talent"><button className="signup-btn">SIGN UP</button></a>
        <button className="demo-btn">DEMO FOR BUSINESS</button>
      </div>
    </header>
  );
}