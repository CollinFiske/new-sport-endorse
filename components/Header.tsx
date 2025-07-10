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
        <Link href="/talent">{t.header.talent}</Link>
        <Link href="/brands">{t.header.brand}</Link>
        <Link href="/agency">{t.header.agencies}</Link>
        <Link href="#">{t.header.subscription}</Link>
        <div className="dropdown">
          <span>{t.header.resources} ▾</span>
          <div className="dropdown-content">
            <Link href="#">{t.header.blog}</Link>
            <Link href="#">{t.header.guides}</Link>
            <Link href="#">{t.header.podcast}</Link>
            <Link href="#">{t.header.aboutUs}</Link>
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
        <a target="_blank" href="https://platform.sportendorse.com/signup/talent"><button className="signup-btn">{t.header.signUpBtn}</button></a>
        <button className="demo-btn">{t.header.demoBtn}</button>
      </div>
    </header>
  );
}