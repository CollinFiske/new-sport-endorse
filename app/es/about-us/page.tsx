"use client";
import "../../../styles/aboutUs.css";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/utils/translations";
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export default function AboutUsES() {
  const { changeLanguage } = useLanguage();
  const t = translations.es.aboutUs;

  useEffect(() => {
    changeLanguage('es');
  }, [changeLanguage]);

  const teamMembers = [
    {
      name: "Trevor Twamley",
      role: "Founder and CEO",
      country: "Ireland",
      imageUrl: "/images/teamPhotos/trevor-twamley.png"
    },
    {
      name: "Declan Bourke", 
      role: "Founder and COO",
      country: "Ireland",
      imageUrl: "/images/teamPhotos/declan-bourke.png"
    },
    {
      name: "Manav Bhatia", 
      role: "Global Marketing Manager",
      country: "Dubai",
      imageUrl: "/images/teamPhotos/manav-bhatia.jpg"
    },
    {
      name: "Martin Nutty",
      role: "CDO",
      country: "USA",
      imageUrl: "/images/teamPhotos/martin-nutty.jpeg"
    },
    {
      name: "Allison Melting",
      role: "Content Marketing Manager",
      country: "USA", 
      imageUrl: "/images/teamPhotos/allison-melting.jpeg"
    },
    {
      name: "Liam Forster",
      role: "Lead Generation Manager",
      country: "Ireland",
      imageUrl: "/images/teamPhotos/liam-forster.jpeg"
    },
    {
      name: "Taisa Gwaj",
      role: "Bookkeeper",
      country: "Ireland",
      imageUrl: "/images/teamPhotos/taisa-gwaj.jpg"
    },
    {
      name: "Collin Fiske",
      role: "Full Stack Developer",
      country: "USA",
      imageUrl: "/images/teamPhotos/collin-fiske.jpg"
    },
    {
      name: "Sean Armadà",
      role: "Markets Development Manager",
      country: "Spain",
      imageUrl: "/images/teamPhotos/sean-armada.jpg"
    },
    {
      name: "Jack Sampson",
      role: "Data Analyst",
      country: "USA",
      imageUrl: "/images/teamPhotos/jack-sampson.jpeg"
    },
    {
      name: "Karl Napper",
      role: "Customer Success Manager",
      country: "Ireland",
      imageUrl: "/images/teamPhotos/karl-napper.jpeg"
    },
    {
      name: "Oscar Quinn Hunt",
      role: "Customer Success Manager",
      country: "Ireland",
      imageUrl: "/images/teamPhotos/oscar-quinn-hunt.jpeg"
    }
  ];

  return (
    <>
      <Head>
        <title>{t.metadata.title}</title>
        <meta name="description" content={t.metadata.description} />
        <link rel="alternate" href="https://www.sportendorse.com/about-us" hrefLang="en-gb" />
        <link rel="alternate" href="https://www.sportendorse.com/es/about-us" hrefLang="es-es" />
        <link rel="alternate" href="https://www.sportendorse.com/de/about-us" hrefLang="de-de" />
        <link rel="alternate" href="https://www.sportendorse.com/about-us" hrefLang="x-default" />
        <link rel="canonical" href="https://www.sportendorse.com/es/about-us" />
        <meta property="og:title" content={t.metadata.title} />
        <meta property="og:description" content={t.metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Sport Endorse" />
        <html lang="es" />
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
                    Como socio valioso de Sport Endorse, <strong>add-victor</strong> está a la vanguardia de conectar atletas de alto rendimiento e individuos militares con oportunidades de carrera excepcionales. Con un grupo de talentos en crecimiento de más de 5,500 individuos, que abarca desde Olímpicos, Paralímpicos y Atletas Estudiantes hasta Veteranos Militares, add-victor juega un papel fundamental en cerrar la brecha entre la experiencia deportiva, la experiencia militar y el mundo corporativo - elevando la cultura y el rendimiento de las organizaciones.
                  </p>
                  <p className="about-us-partner-description-secondary">
                    La misión de <strong>add-victor</strong> se alinea con el compromiso de Sport Endorse con la excelencia, empoderando a individuos a encontrar sus caminos de carrera ideales y asistiendo a las marcas en descubrir talento de primer nivel que puede sobresalir, tanto en campañas de marketing como dentro de sus organizaciones. Junto con Sport Endorse, estamos reformando el futuro de la adquisición de talento y el avance profesional.
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
                    Como socio valioso de Sport Endorse, <strong>3 Big Wheels</strong> es una agencia de marketing internacional creativa que ayuda a las marcas a expandir su alcance. Su experiencia en combinar creatividad con planificación estratégica asegura que las campañas no solo se vean geniales sino que también entreguen resultados medibles.
                  </p>
                  <p className="about-us-partner-description-secondary">
                    La misión de <strong>3 Big Wheels</strong> de empoderar a los negocios para prosperar globalmente se alinea con el compromiso de Sport Endorse con la excelencia, asistiendo a las marcas en descubrir talento de primer nivel y elevar sus campañas de marketing. Juntos, estamos cerrando la brecha entre la adquisición de talento y el éxito del mercado internacional.
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
                    Como socio valioso de Sport Endorse, <strong>The Sporting Club Ireland</strong> está a la vanguardia de conectar líderes en el deporte y los negocios. Su comunidad reúne a tomadores de decisiones, emprendedores y personalidades deportivas para crear una plataforma para conexiones significativas y nuevas oportunidades.
                  </p>
                  <p className="about-us-partner-description-secondary">
                    Su experiencia en construir relaciones se alinea con el compromiso de Sport Endorse de empoderar a individuos y marcas. Al reunir profesionales influyentes que comparten una pasión por el deporte, <strong>The Sporting Club Ireland</strong> juega un papel fundamental en expandir redes e impulsar nuevas empresas comerciales. Juntos, estamos reformando cómo la industria deportiva hace negocios.
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