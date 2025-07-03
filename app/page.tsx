/*"use client";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section>
      <h1>{t.welcome}</h1>
      <p>{t.description}</p>
    </section>
  );
}*/

export default function Page() {
  return <h1>Hello, Next.js!</h1>
}