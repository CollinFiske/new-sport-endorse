"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../context/LanguageContext";
import "../styles/header.css";
import "../styles/mainLogo.css";
import translations from "@/utils/translations";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
        if (languageDropdownOpen) {
          setLanguageDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen, languageDropdownOpen]);

  const getFlagImage = (lang: string) => {
    switch(lang) {
      case 'en': return '/images/flags/UK_flag.png';
      case 'es': return '/images/flags/spanish_flag.svg';
      case 'de': return '/images/flags/german_flag.png';
      default: return '/images/flags/UK_flag.png';
    }
  };

  const handleLanguageChange = (newLanguage: Language) => {
    changeLanguage(newLanguage);
    setLanguageDropdownOpen(false);
  };

  return (
    <header className="modern-header" ref={headerRef}>
      <div className="logo-area">
        <Link href="/">
          <img src="/images/sportEndorseLogo.png" alt="sport endorse logo"></img>
          <h3>SPORT ENDORSE</h3>
        </Link>
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
        <div 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span>Resources {dropdownOpen ? "▴" : "▾"}</span>
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
        <div className="custom-language-dropdown">
          <button 
            className="language-selector"
            onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
          >
            <img src={getFlagImage(language)} alt={language} width="30" height="20" />
            <span className="dropdown-arrow">{languageDropdownOpen ? "▴" : "▾"}</span>
          </button>
          {languageDropdownOpen && (
            <div className="language-dropdown-content">
              <button onClick={() => handleLanguageChange('en')}>
                <img src="/images/flags/UK_flag.png" alt="English" width="30" height="20" />
              </button>
              <button onClick={() => handleLanguageChange('es')}>
                <img src="/images/flags/spanish_flag.svg" alt="Español" width="30" height="20" />
              </button>
              <button onClick={() => handleLanguageChange('de')}>
                <img src="/images/flags/german_flag.png" alt="Deutsch" width="30" height="20" />
              </button>
            </div>
          )}
        </div>
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