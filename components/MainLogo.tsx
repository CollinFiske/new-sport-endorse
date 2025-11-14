"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import "../styles/mainLogo.css";

export default function MainLogo() {
  const { language } = useLanguage();

  return (
    <div>
        <Link href={language === 'en' ? '/' : `/${language}`}>
            <Image 
              className="main-logo-img" 
              src="/images/sportEndorseLogo.png" 
              alt="sport endorse logo"
              width={50}
              height={50}
              priority
            />
            <h3>SPORT ENDORSE</h3>
        </Link>
    </div>
  );
}