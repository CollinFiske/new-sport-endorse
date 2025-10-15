"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../context/LanguageContext";
import "../styles/header.css";
import "../styles/mainLogo.css";
import translations from "@/utils/translations";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
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

  // Detect language from URL and update context
  useEffect(() => {
    let detectedLanguage: Language = 'en'; // default
    
    // Only check the first path segment for language
    const pathSegments = pathname.split('/').filter(segment => segment);
    const firstSegment = pathSegments[0];
    
    if (firstSegment === 'es') {
      detectedLanguage = 'es';
    } else if (firstSegment === 'de') {
      detectedLanguage = 'de';
    }
    
    if (detectedLanguage !== language) {
      changeLanguage(detectedLanguage);
    }
  }, [pathname, language, changeLanguage]);

  const getFlagImage = (lang: string) => {
    switch(lang) {
      case 'en': return '/images/flags/UK_flag.png';
      case 'es': return '/images/flags/spanish_flag.svg';
      case 'de': return '/images/flags/german_flag.png';
      default: return '/images/flags/UK_flag.png';
    }
  };

  const getLocalizedPath = (newLanguage: Language, currentPath: string) => {
    // Remove any existing language prefix
    let cleanPath = currentPath;
    
    // Remove language prefixes (handle multiple potential prefixes)
    if (cleanPath.startsWith('/es/')) {
      cleanPath = cleanPath.substring(3);
    } else if (cleanPath.startsWith('/de/')) {
      cleanPath = cleanPath.substring(3);
    }
    
    // Ensure cleanPath starts with / if it's not empty
    if (cleanPath && !cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath;
    }
    
    // If cleanPath is empty, default to home page
    if (!cleanPath || cleanPath === '/') {
      cleanPath = '';
    }
    
    // Add new language prefix (except for English which is default)
    if (newLanguage === 'en') {
      return cleanPath || '/';
    } else {
      return `/${newLanguage}${cleanPath || ''}`;
    }
  };

  const handleLanguageChange = (newLanguage: Language) => {
    changeLanguage(newLanguage);
    const newPath = getLocalizedPath(newLanguage, pathname);
    router.push(newPath);
    setLanguageDropdownOpen(false);
  };

  const getNavLink = (path: string) => {
    // Ensure path starts with /
    const cleanPath = path.startsWith('/') ? path : '/' + path;
    
    if (language === 'en') {
      return cleanPath;
    }
    return `/${language}${cleanPath}`;
  };

  return (
    <header className="modern-header" ref={headerRef}>
      <div className="logo-area">
        <Link href={getNavLink("/")}>
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
        <Link href={getNavLink("/talent")} onClick={() => setMobileMenuOpen(false)}>Talent</Link>
        <Link href={getNavLink("/brands")} onClick={() => setMobileMenuOpen(false)}>Brands</Link>
        <Link href="/wp/successStories" onClick={() => setMobileMenuOpen(false)}>Success Stories</Link>
        <div 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span>Resources {dropdownOpen ? "▴" : "▾"}</span>
          <div className="dropdown-content">
            <Link href={getNavLink("/agency")} onClick={() => setMobileMenuOpen(false)}>Agencies</Link>
            <Link href={getNavLink("/subscription")} onClick={() => setMobileMenuOpen(false)}>Subscription</Link>
            <Link href="/wp/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/wp/podcasts" onClick={() => setMobileMenuOpen(false)}>Podcasts</Link>
            <Link href={getNavLink("/aboutUs")} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
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