"use client"
import '../../styles/aboutUs.css';

export default function AboutUs() {
  const values = [
    {
      icon: "I",
      title: "Integrity",
      description: "This is the backbone of Sport Endorse and as a company we want to reflect that same integrity into all our business dealings. Our team members believe in treating people right, and in taking responsibility for their actions. We ensure our moral compass is used in every decision we make. Simply put, integrity is a must!"
    },
    {
      icon: "II",
      title: "Relentlessness",
      description: "We see this value in the elite athletes, leading brands and agencies we work with. As a team we have a bias towards action and always exhibit a sense of urgency to get things done. We NEVER give up. Never reckless, always relentless. And yes, it is a must!"
    },
    {
      icon: "III",
      title: "Transparency", 
      description: "At Sport Endorse, we pride ourselves on our transparency. This means open and honest communication about everything. It saves time, removes stress and leads to better relationships all round. You&apos;ve guessed it, it&apos;s another must for us!"
    },
    {
      icon: "IV",
      title: "Diversity",
      description: "We take immense pride in the diverse cultures and people we work with daily in Sport Endorse. Our team is geographically dispersed, which brings together individuals from various cultures and diverse backgrounds. We strive to ensure we provide a work environment in which every employee feels valued and included in all decisions, opportunities, and challenges. Diversity is one of our most important values and is a must!"
    }
  ];

  const teamMembers = [
    {
      name: "Trevor Twamley",
      role: "Co-Founder",
      videoUrl: "https://www.youtube.com/embed/sb67T8pYyz8"
    },
    {
      name: "Declan Bourke", 
      role: "Co-Founder",
      videoUrl: "https://www.youtube.com/embed/ewo7-iOQT_o"
    },
    {
      name: "Mavav Bhatia",
      role: "Leadership Team",
      videoUrl: "https://www.youtube.com/embed/ikTrqDTIhTk"
    }
  ];

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-us-hero-section">
        <div className="about-us-hero-overlay"></div>
        <div className="about-us-hero-bg-element-1"></div>
        <div className="about-us-hero-bg-element-2"></div>
        
        <div className="about-us-hero-container">
          <div className="about-us-hero-content">
            <h1 className="about-us-hero-title">
              About 
              <span className="about-us-hero-title-span"> Sport Endorse</span>
            </h1>
            <p className="about-us-hero-subtitle">
              The Sport Endorse team has exceptional experience in sports sponsorships, brand ambassador deals, athlete selection, and sports marketing
            </p>
            <div className="about-us-hero-description">
              <p className="about-us-hero-description-text">
                We serve the world of sport across the globe and are a group of people that have been participants in a diverse range of sports. We are fans of all sports, all sports people, and all brands that engage with sport. Our team is multinational, and multicultural, and we are passionate about delivering success for you – our clients!
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
              Our <span className="about-us-section-title-span">Values</span>
            </h2>
            <p className="about-us-section-subtitle">
              These core values guide every decision we make and every relationship we build
            </p>
          </div>

          <div className="about-us-values-grid">
            {values.map((value, index) => (
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
              Meet Our <span className="about-us-section-title-span">Team</span>
            </h2>
            <p className="about-us-section-subtitle">
              Get to know the passionate individuals driving Sport Endorse forward
            </p>
          </div>

          <div className="about-us-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="about-us-team-card">
                <div className="about-us-team-video-container">
                  <iframe
                    width="100%"
                    height="100%"
                    src={member.videoUrl}
                    title={member.name + " video"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ aspectRatio: '16/9', width: '100%', height: '100%', borderRadius: '16px', background: '#111827' }}
                  ></iframe>
                </div>
                <div className="about-us-team-info">
                  <h3 className="about-us-team-name">{member.name}</h3>
                  <p className="about-us-team-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="about-us-partners-section">
        <div className="about-us-container">
          <div className="about-us-section-header">
            <h2 className="about-us-section-title">
              Our <span className="about-us-section-title-span">Partners</span>
            </h2>
            <p className="about-us-section-subtitle">
              We collaborate with industry leaders to deliver exceptional results
            </p>
          </div>

          <div className="about-us-partners-container">
            <div className="about-us-partner-card">
              <div className="about-us-partner-content">
                <div className="about-us-partner-logo">
                  <a href="https://www.add-victor.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/add-victor.webp" alt="add-victor logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }} />
                  </a>
                </div>
                <div className="about-us-partner-info">
                  <h3 className="about-us-partner-name">
                    add-victor
                  </h3>
                  <p className="about-us-partner-description">
                    As a valued partner of Sport Endorse, <strong>add-victor</strong> is at the forefront of connecting high-performing athletes & military individuals with exceptional career opportunities. With a growing talent pool of over 5,500 individuals, spanning from Olympians, Paralympians, and Student-Athletes to Military Veterans, add-victor plays a pivotal role in bridging the gap between sporting experience, military expertise, and the corporate world – elevating organisations culture & performance.
                  </p>
                  <p className="about-us-partner-description-secondary">
                    add-victor&apos;s mission aligns with Sport Endorse commitment to excellence, empowering individuals to find their ideal career paths and assisting brands in discovering top-tier talent that can excel, both in marketing campaigns and within their organisations. Together with Sport Endorse, we&apos;re reshaping the future of talent acquisition and career advancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}