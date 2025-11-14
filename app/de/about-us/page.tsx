"use client";
import { useState, useEffect } from 'react';
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

export default function AboutUsDE() {
  const { changeLanguage } = useLanguage();
  const t = translations.de.aboutUs;
  const [showCareerForm, setShowCareerForm] = useState(false);
  const [hubspotLoaded, setHubspotLoaded] = useState(false);

  useEffect(() => {
    changeLanguage('de');
  }, [changeLanguage]);

  useEffect(() => {
    // Load HubSpot script when component mounts
    const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/embed/4025606.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/4025606.js';
      script.defer = true;
      script.onload = () => {
        setHubspotLoaded(true);
      };
      document.body.appendChild(script);
    } else {
      setHubspotLoaded(true);
    }

    return () => {
      // Cleanup script on unmount
      const scriptToRemove = document.querySelector('script[src="https://js.hsforms.net/forms/embed/4025606.js"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const closeCareerForm = () => {
    setShowCareerForm(false);
  };

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
        <link rel="canonical" href="https://www.sportendorse.com/de/about-us" />
        <meta property="og:title" content={t.metadata.title} />
        <meta property="og:description" content={t.metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="Sport Endorse" />
        <html lang="de" />
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
                <button 
                  className="about-us-careers-button"
                  onClick={() => setShowCareerForm(true)}
                >
                  {t.careers.buttonText}
                </button>
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
                    Als geschätzter Partner von Sport Endorse steht <strong>add-victor</strong> an der Spitze der Verbindung von leistungsstarken Athleten und Militärpersonal mit außergewöhnlichen Karrieremöglichkeiten. Mit einem wachsenden Talentpool von über 5.500 Personen, der von Olympioniken, Paralympioniken und Studienathleten bis hin zu Militärveteranen reicht, spielt add-victor eine entscheidende Rolle bei der Überbrückung der Kluft zwischen Sporterfahrung, militärischer Expertise und der Geschäftswelt - wodurch die Kultur und Leistung von Organisationen gesteigert wird.
                  </p>
                  <p className="about-us-partner-description-secondary">
                    Die Mission von <strong>add-victor</strong> entspricht Sport Endorses Engagement für Exzellenz und ermächtigt Einzelpersonen, ihre idealen Karrierewege zu finden, während sie Marken dabei unterstützt, erstklassige Talente zu entdecken, die sowohl in Marketingkampagnen als auch innerhalb ihrer Organisationen hervorragend abschneiden können. Zusammen mit Sport Endorse gestalten wir die Zukunft der Talentakquise und Karriereförderung neu.
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
                    Als geschätzter Partner von Sport Endorse ist <strong>3 Big Wheels</strong> eine kreative internationale Marketingagentur, die Marken dabei hilft, ihre Reichweite zu erweitern. Ihre Expertise in der Kombination von Kreativität mit strategischer Planung stellt sicher, dass Kampagnen nicht nur großartig aussehen, sondern auch messbare Ergebnisse liefern.
                  </p>
                  <p className="about-us-partner-description-secondary">
                    Die Mission von <strong>3 Big Wheels</strong>, Unternehmen zu befähigen, global zu gedeihen, entspricht Sport Endorses Engagement für Exzellenz und unterstützt Marken dabei, erstklassige Talente zu entdecken und ihre Marketingkampagnen zu verbessern. Zusammen überbrücken wir die Kluft zwischen Talentakquise und internationalem Markterfolg.
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
                    Als geschätzter Partner von Sport Endorse steht <strong>The Sporting Club Ireland</strong> an der Spitze der Verbindung von Führungskräften in Sport und Business. Ihre Gemeinschaft bringt Entscheidungsträger, Unternehmer und Sportpersönlichkeiten zusammen, um eine Plattform für bedeutungsvolle Verbindungen und neue Möglichkeiten zu schaffen.
                  </p>
                  <p className="about-us-partner-description-secondary">
                    Ihre Expertise im Aufbau von Beziehungen entspricht Sport Endorses Engagement, Einzelpersonen und Marken zu stärken. Durch die Zusammenführung einflussreicher Fachkräfte, die eine Leidenschaft für Sport teilen, spielt <strong>The Sporting Club Ireland</strong> eine entscheidende Rolle bei der Erweiterung von Netzwerken und der Förderung neuer Geschäftsunternehmungen. Zusammen gestalten wir neu, wie die Sportindustrie Geschäfte macht.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <br/>
    </div>

    {/* Career Form Popup */}
    {showCareerForm && (
      <div className="popup-overlay" onClick={closeCareerForm}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={closeCareerForm}>
            ×
          </button>
          
          <h3 className="popup-title">Join Our Team</h3>
          <p className="popup-subtitle">
            We&apos;re always looking for talented individuals to join our growing team.
          </p>

          <div className="hubspot-form-container">
            {hubspotLoaded ? (
              <div 
                className="hs-form-frame" 
                data-region="na1" 
                data-form-id="84e3acc5-80c1-44c9-9870-e179cc5cdfed" 
                data-portal-id="4025606"
              ></div>
            ) : (
              <div className="loading-message">Loading form...</div>
            )}
          </div>
        </div>
      </div>
    )}
    </>
  );
}