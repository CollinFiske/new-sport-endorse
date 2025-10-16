import '../../styles/aboutUs.css';
import { Metadata } from "next";


export const metadata: Metadata = {
  //metadataBase: new URL("put the home url here later"),
  title: "Sports sponsorship agency | About us | Sport Endorse",
  description: "We are a multicultural, multinational team passionate about sport in all of its forms. Choose an athlete representation agency that genuinely cares.",
  openGraph:{ // og:title and so on
    title: "Sports sponsorship agency | About us | Sport Endorse",
    description: "We are a multicultural, multinational team passionate about sport in all of its forms. Choose an athlete representation agency that genuinely cares.",
    type:"website",
    locale:"en_US",
    //url:"" to be added later
    siteName:"Sport Endorse"
  },
};

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
      description: "At Sport Endorse, we pride ourselves on our transparency. This means open and honest communication about everything. It saves time, removes stress and leads to better relationships all round. You've guessed it, it's another must for us!"
    },
    {
      icon: "IV",
      title: "Diversity",
      description: "We take immense pride in the diverse cultures and people we work with daily in Sport Endorse. Our team is geographically dispersed, which brings together individuals from various cultures and diverse backgrounds. We strive to ensure we provide a work environment in which every employee feels valued and included in all decisions, opportunities, and challenges."
    }
  ];

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
              Sport Endorse is an online sports marketing platform reshaping how brands and athletes connect. Our powerful platform facilitates authentic commercial partnerships, supporting the entire world of sport—from the athletes who play it to the brands and businesses who back it.
            </p>
            <div className="about-us-hero-description">
              <p className="about-us-hero-description-text">
                Our global team brings decades of sports marketing expertise to the table. Reflecting the diversity and inclusivity of our platform, our team members come from a wide range of sports and backgrounds. We are passionate about combining our deep industry knowledge with our excellent technology to deliver success for our clients, creating a truly global and inclusive experience for brands and athletes in every kind of sport.
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
                <div className="about-us-team-photo-container">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
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
      <section className="about-us-careers-section">
        <div className="about-us-container">
          <div className="about-us-section-header">
            <h2 className="about-us-section-title">
              <span className="about-us-section-title-span">Careers</span> At Sport Endorse
            </h2>
            <p className="about-us-section-subtitle">
              Are you passionate about <strong>sports marketing</strong> and want to be part of our growing team? We&apos;re always looking for talented individuals who share our values and vision.
            </p>
          </div>

          <div className="about-us-careers-container">
            <div className="about-us-careers-card">
              <div className="about-us-careers-content">
                <h3 className="about-us-careers-title">Ready to Make an Impact?</h3>
                <p className="about-us-careers-description">
                  At Sport Endorse, we believe in fostering talent and providing opportunities for growth. 
                  If you&apos;re looking for a dynamic environment where you can contribute to connecting athletes 
                  with brands and make a real difference in the sports industry, we&apos;d love to hear from you.
                </p>
                <a href="mailto:hello@sportendorse.com?subject=Career Inquiry&body=Hi Sport Endorse team,%0D%0A%0D%0AI'm interested in exploring career opportunities with your company. Please let me know about any current or upcoming positions that might be a good fit.%0D%0A%0D%0AThank you!">
                  <button className="about-us-careers-button">
                    Get in Touch
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
                  <a href="https://www.add-victor.com/" target="_blank" rel="noopener">
                    <img src="/images/add-victor.webp" alt="add-victor logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }} />
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
                    <img src="/images/3 big wheels.png" alt="3 big wheels logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }} />
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
                    <strong>3 Big Wheels&apos;</strong> mission to empower businesses to thrive globally aligns with Sport Endorse's commitment to excellence, assisting brands in discovering top-tier talent and elevating their marketing campaigns. Together, we are bridging the gap between talent acquisition and international market success.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-us-partner-card">
              <div className="about-us-partner-content">
                <div className="about-us-partner-logo" style={{ backgroundColor:"black"}}>
                  <a href="https://thesportingclub.ie/" target="_blank" rel="noopener">
                    <img src="/images/The Sporting Club Ireland.webp" alt="The Sporting Club Ireland logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }} />
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
                    Their expertise in building relationships aligns with Sport Endorse's commitment to empowering individuals and brands. By bringing together influential professionals who share a passion for sport, <strong>The Sporting Club Ireland</strong> plays a pivotal role in expanding networks and driving new business ventures. Together, we are reshaping how the sports industry does business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <br/>
    </div>
  );
}