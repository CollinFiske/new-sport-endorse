"use client";
import '../../styles/aboutUs.css';
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/utils/translations";
import Head from 'next/head';
import Image from 'next/image';

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export default function AboutUs() {
  const { language } = useLanguage();
  const t = translations[language].aboutUs;

  const teamMembers = [
    {
      name: "Trevor Twamley",
      role: "Founder and CEO",
      country: "Ireland",
      imageUrl: "/images/teamPhotos/Trevor Twanley, Founder and CEO.png"
    },
    {
      name: "Declan Bourke", 
      role: "Founder and COO",
      country: "Ireland",
      imageUrl: "/images/teamPhotos/Declan Bourke, Founder and COO.png"
    },
    {
      name: "Manav Bhatia", 
      role: "Global Marketing Manager",
      country: "Dubai",
      imageUrl: "/images/teamPhotos/Manav Bhatia, Global Marketing Manager.jpg"
    },
    {
      name: "Martin Nutty",
      role: "CDO",
      country: "USA",
      imageUrl: "/images/teamPhotos/Martin Nutty, CDO.jpeg"
    },
    {
      name: "Allison Melting",
      role: "Content Marketing Manager",
      country: "USA", 
      imageUrl: "/images/teamPhotos/Allison Melting, Content Marketing Manager.jpeg"
    },
    {
      name: "Liam Forster",
      role: "Lead Generation Manager",
      country: "Ireland",
      imageUrl: "/images/teamPhotos/Liam Forster, Lead Generation Manager.jpeg"
    },
    {
      name: "Taisa Gwaj",
      role: "Bookkeeper",
      country: "Ireland",
      imageUrl: "/images/teamPhotos/Taisa Gwaj, Bookkeeper.jpg"
    },
    {
      name: "Collin Fiske",
      role: "Full Stack Developer",
      country: "USA",
      imageUrl: "/images/teamPhotos/Collin Fiske, Full Stack Developer.jpg"
    },
    {
      name: "Sean Armadà",
      role: "Markets Development Manager",
      country: "Spain",
      imageUrl: "/images/teamPhotos/Sean Armadà, Markets Development Manager.jpg"
    },
    {
      name: "Jack Sampson",
      role: "Data Analyst",
      country: "USA",
      imageUrl: "/images/teamPhotos/Jack Sampson, Data Analysist.jpeg"
    },
    {
      name: "Karl Napper",
      role: "Customer Success Manager",
      country: "Ireland",
      imageUrl: "/images/teamPhotos/Karl Napper, Customer Success Manager.jpeg"
    },
    {
      name: "Oscar Quinn Hunt",
      role: "Customer Success Manager",
      country: "Ireland",
      imageUrl: "/images/teamPhotos/Oscar Quinn Hunt, Customer Success Manager.jpeg"
    }
  ];

  return (
    <>
      <Head>
        <title>{t.metadata.title}</title>
        <meta name="description" content={t.metadata.description} />
        <link rel="alternate" hrefLang="en" href="https://www.sportendorse.com/aboutUs" />
        <link rel="alternate" hrefLang="es" href="https://www.sportendorse.com/es/aboutUs" />
        <link rel="alternate" hrefLang="de" href="https://www.sportendorse.com/de/aboutUs" />
        <link rel="alternate" hrefLang="x-default" href="https://www.sportendorse.com/aboutUs" />
        <meta property="og:title" content={t.metadata.title} />
        <meta property="og:description" content={t.metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'es' ? 'es_ES' : language === 'de' ? 'de_DE' : 'en_US'} />
        <meta property="og:site_name" content="Sport Endorse" />
        <html lang={language} />
      </Head>

    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-us-hero-section">
        <div className="about-us-hero-overlay"></div>
        <div className="about-us-hero-bg-element-1"></div>
        <div className="about-us-hero-bg-element-2"></div>
        
        <div className="about-us-hero-container">
          <div className="about-us-hero-content">
            <h1 className="about-us-hero-title">
              {t.hero.title}
              <span className="about-us-hero-title-span">{t.hero.titleSpan}</span>
            </h1>
            <p className="about-us-hero-subtitle">
              {t.hero.subtitle}
            </p>
            <div className="about-us-hero-description">
              <p className="about-us-hero-description-text">
                {t.hero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="about-us-values-section">
        <div className="about-us-container">
          <div className="about-us-section-header">
            <h2 className="about-us-section-title">
              {t.values.title} <span className="about-us-section-title-span">{t.values.titleSpan}</span>
            </h2>
            <p className="about-us-section-subtitle">
              {t.values.subtitle}
            </p>
          </div>

          <div className="about-us-values-grid">
            {t.values.items.map((value: ValueItem, index: number) => (
              <div key={index} className="about-us-value-card">
                <div className="about-us-value-card-content">
                  <div className="about-us-value-icon">
                    <span className="about-us-value-icon-text">{value.icon}</span>
                  </div>
                  <h3 className="about-us-value-title">
                    {value.title}
                  </h3>
                </div>
                <p className="about-us-value-description">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="about-us-team-section">
        <div className="about-us-container">
          <div className="about-us-section-header">
            <h2 className="about-us-section-title">
              {t.team.title} <span className="about-us-section-title-span">{t.team.titleSpan}</span>
            </h2>
            <p className="about-us-section-subtitle">
              {t.team.subtitle}
            </p>
          </div>

          <div className="about-us-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="about-us-team-card">
                <div className="about-us-team-photo-container">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="about-us-team-photo"
                  />
                </div>
                <div className="about-us-team-info">
                  <h3 className="about-us-team-name">{member.name}</h3>
                  <p className="about-us-team-role">{member.role}</p>
                  <p className="about-us-team-role" style={{marginTop:"5px"}}>{member.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="about-us-careers-section" id='careers'>
        <div className="about-us-container">
          <div className="about-us-section-header">
            <h2 className="about-us-section-title">
              <span className="about-us-section-title-span">{t.careers.title}</span>{t.careers.titleSpan}
            </h2>
            <p className="about-us-section-subtitle">
              {t.careers.subtitle}
            </p>
          </div>

          <div className="about-us-careers-container">
            <div className="about-us-careers-card">
              <div className="about-us-careers-content">
                <h3 className="about-us-careers-title">{t.careers.cardTitle}</h3>
                <p className="about-us-careers-description">
                  {t.careers.cardDescription}
                </p>
                <a href="mailto:hello@sportendorse.com?subject=Career Inquiry&body=Hi Sport Endorse team,%0D%0A%0D%0AI'm interested in exploring career opportunities with your company. Please let me know about any current or upcoming positions that might be a good fit.%0D%0A%0D%0AThank you!">
                  <button className="about-us-careers-button">
                    {t.careers.buttonText}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="about-us-partners-section">
        <div className="about-us-container">
          <div className="about-us-section-header">
            <h2 className="about-us-section-title">
              {t.partners.title} <span className="about-us-section-title-span">{t.partners.titleSpan}</span>
            </h2>
            <p className="about-us-section-subtitle">
              {t.partners.subtitle}
            </p>
          </div>

          <div className="about-us-partners-container">
            <div className="about-us-partner-card">
              <div className="about-us-partner-content">
                <div className="about-us-partner-logo">
                  <a href="https://www.add-victor.com/" target="_blank" rel="noopener">
                    <Image src="/images/add-victor.webp" alt="add-victor logo" width={150} height={150} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }} />
                  </a>
                </div>
                <div className="about-us-partner-info">
                  <h3 className="about-us-partner-name">
                    add-victor
                  </h3>
                  <p className="about-us-partner-description">
                    As a valued partner of Sport Endorse, <strong>add-victor</strong> is at the forefront of connecting high-performing athletes & military individuals with exceptional career opportunities. With a growing talent pool of over 5,500 individuals, spanning from Olympians, Paralympians, and Student-Athletes to Military Veterans, add-victor plays a pivotal role in bridging the gap between sporting experience, military expertise, and the corporate world - elevating organisations culture & performance.
                  </p>
                  <p className="about-us-partner-description-secondary">
                    <strong>add-victor&apos;s</strong> mission aligns with Sport Endorse commitment to excellence, empowering individuals to find their ideal career paths and assisting brands in discovering top-tier talent that can excel, both in marketing campaigns and within their organisations. Together with Sport Endorse, we&apos;re reshaping the future of talent acquisition and career advancement.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-us-partner-card">
              <div className="about-us-partner-content">
                <div className="about-us-partner-logo">
                  <a href="https://3bigwheels.com/" target="_blank" rel="noopener">
                    <Image src="/images/3 big wheels.png" alt="3 big wheels logo" width={150} height={150} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }} />
                  </a>
                </div>
                <div className="about-us-partner-info">
                  <h3 className="about-us-partner-name">
                    3 Big Wheels
                  </h3>
                  <p className="about-us-partner-description">
                    As a valued partner of Sport Endorse, <strong>3 Big Wheels</strong> is a creative international marketing agency that helps brands expand their reach. Their expertise in blending creativity with strategic planning ensures campaigns not only look great but also deliver measurable results.
                  </p>
                  <p className="about-us-partner-description-secondary">
                    <strong>3 Big Wheels&apos;</strong> mission to empower businesses to thrive globally aligns with Sport Endorse&apos;s commitment to excellence, assisting brands in discovering top-tier talent and elevating their marketing campaigns. Together, we are bridging the gap between talent acquisition and international market success.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-us-partner-card">
              <div className="about-us-partner-content">
                <div className="about-us-partner-logo" style={{ backgroundColor:"black"}}>
                  <a href="https://thesportingclub.ie/" target="_blank" rel="noopener">
                    <Image src="/images/The Sporting Club Ireland.webp" alt="The Sporting Club Ireland logo" width={150} height={150} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }} />
                  </a>
                </div>
                <div className="about-us-partner-info">
                  <h3 className="about-us-partner-name">
                    The Sporting Club Ireland
                  </h3>
                  <p className="about-us-partner-description">
                    As a valued partner of Sport Endorse, <strong>The Sporting Club Ireland</strong> is at the forefront of connecting leaders in sport and business. Their community brings together decision-makers, entrepreneurs, and sports personalities to create a platform for meaningful connections and new opportunities.
                  </p>
                  <p className="about-us-partner-description-secondary">
                    Their expertise in building relationships aligns with Sport Endorse&apos;s commitment to empowering individuals and brands. By bringing together influential professionals who share a passion for sport, <strong>The Sporting Club Ireland</strong> plays a pivotal role in expanding networks and driving new business ventures. Together, we are reshaping how the sports industry does business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <br/>
    </div>
    </>
  );
}