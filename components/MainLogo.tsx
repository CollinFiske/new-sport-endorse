"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import "../styles/mainLogo.css";

export default function MainLogo() {
  const { language } = useLanguage();

  const getNavLink = (path: string) => {
    // Ensure path starts with /
    const cleanPath = path.startsWith('/') ? path : '/' + path;
    
    if (language === 'en') {
      return cleanPath;
    }
    return `/${language}${cleanPath}`;
  };

  return (
    <div>
        <Link href={getNavLink("/home")}>
            <img className="main-logo-img" src="/images/sportEndorseLogo.png" alt="sport endorse logo"></img>
            <h3>SPORT ENDORSE</h3>
        </Link>
    </div>
  );
}