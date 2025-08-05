"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../context/LanguageContext";
import "../styles/header.css";
import MainLogo from "./MainLogo";
import translations from "@/utils/translations";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="modern-header">
      <div className="logo-area">
        <MainLogo />
      </div>
      <button
        className="mobile-menu-icon"
        aria-label="Open menu"
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        <span className="menu-bar" />
        <span className="menu-bar" />
        <span className="menu-bar" />
      </button>
      <nav className={`main-nav${mobileMenuOpen ? " open" : ""}`}>
        <Link href="/talent" onClick={() => setMobileMenuOpen(false)}>Talent</Link>
        <Link href="/brands" onClick={() => setMobileMenuOpen(false)}>Brands</Link>
        <Link href="/wp/successStories" onClick={() => setMobileMenuOpen(false)}>Success Stories</Link>
        <div className="dropdown">
          <span>Resources ▾</span>
          <div className="dropdown-content">
            <Link href="/agency" onClick={() => setMobileMenuOpen(false)}>Agencies</Link>
            <Link href="/subscription" onClick={() => setMobileMenuOpen(false)}>Subscription</Link>
            <Link href="/wp/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/wp/podcasts" onClick={() => setMobileMenuOpen(false)}>Podcasts</Link>
            <Link href="/aboutUs" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
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