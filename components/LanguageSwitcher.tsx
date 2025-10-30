'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { language } = useLanguage();

  const switchLanguage = (newLang: string) => {
    // Set preference cookie to override geo-detection
    document.cookie = `preferred-language=${newLang}; path=/; max-age=31536000`; // 1 year
    
    let newPath = '';
    
    if (pathname.startsWith('/es') || pathname.startsWith('/de')) {
      // Remove current language prefix and add new one
      const pathWithoutLang = pathname.substring(3);
      newPath = newLang === 'en' ? pathWithoutLang || '/' : `/${newLang}${pathWithoutLang}`;
    } else {
      // Add language prefix to current path
      newPath = newLang === 'en' ? pathname : `/${newLang}${pathname}`;
    }
    
    router.push(newPath);
  };

  return (
    <div className="language-switcher" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <button
        onClick={() => switchLanguage('en')}
        className={language === 'en' ? 'active' : ''}
        style={{
          padding: '0.25rem 0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: language === 'en' ? '#18A0FB' : 'transparent',
          color: language === 'en' ? 'white' : '#333',
          cursor: 'pointer',
          fontSize: '0.875rem',
          fontWeight: language === 'en' ? 'bold' : 'normal'
        }}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('es')}
        className={language === 'es' ? 'active' : ''}
        style={{
          padding: '0.25rem 0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: language === 'es' ? '#18A0FB' : 'transparent',
          color: language === 'es' ? 'white' : '#333',
          cursor: 'pointer',
          fontSize: '0.875rem',
          fontWeight: language === 'es' ? 'bold' : 'normal'
        }}
      >
        ES
      </button>
      <button
        onClick={() => switchLanguage('de')}
        className={language === 'de' ? 'active' : ''}
        style={{
          padding: '0.25rem 0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: language === 'de' ? '#18A0FB' : 'transparent',
          color: language === 'de' ? 'white' : '#333',
          cursor: 'pointer',
          fontSize: '0.875rem',
          fontWeight: language === 'de' ? 'bold' : 'normal'
        }}
      >
        DE
      </button>
    </div>
  );
}