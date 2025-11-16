"use client"

import { useLanguage } from "@/context/LanguageContext";
import translations from "@/utils/translations";

export default function BackButton() {
  const { language } = useLanguage();
  const t = translations[language];

  const handleBack = () => {
    const path = window.location.pathname;
    if (path.startsWith('/es')) {
      window.location.href = '/es/success-stories';
    } else if (path.startsWith('/de')) {
      window.location.href = '/de/success-stories';
    } else {
      window.location.href = '/success-stories';
    }
  };

  return (
    <button 
      className="back-button"
      onClick={handleBack}
    >
      <span className="back-button-icon">←</span>
      {t.common.back}
    </button>
  );
}