"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import "../styles/mainLogo.css";

export default function MainLogo() {
  const { language } = useLanguage();

  return (
    <div>
        <Link href={language === 'en' ? '/' : `/${language}`}>
            <img className="main-logo-img" src="/images/sportEndorseLogo.png" alt="sport endorse logo"></img>
            <h3>SPORT ENDORSE</h3>
        </Link>
    </div>
  );
}