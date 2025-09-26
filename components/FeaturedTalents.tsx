"use client";
import "../styles/featuredTalents.css";

export default function FeaturedTalents() {
  const talents = [
    {
      name: "Fabian Pecher",
      image: "/images/featuredTalent/fabian pecher.png",
      followingInstagram: "257k",
      followingTiktok: "643k",
      sport: "Freestyle Football",
      location: "Augsburg"
    },
    {
      name: "Abby Berner",
      image: "/images/featuredTalent/abby berner.png",
      followingInstagram: "2.6M",
      followingTiktok: "6M",
      sport: "Fitness",
      location: "Kansas, USA"
    },
    {
      name: "Amir Abedzadeh",
      image: "/images/featuredTalent/amir abedzadeh.png",
      followingInstagram: "874k",
      followingTiktok: null,
      sport: "Football",
      location: "Valencia"
    },
    {
      name: "Emily Cole",
      image: "/images/featuredTalent/emily cole.webp",
      followingInstagram: "183k",
      followingTiktok: "328k",
      sport: "Athletics",
      location: "North Carolina, USA"
    },
    {
      name: "Sergio Sanchez",
      image: "/images/featuredTalent/sergio sanchez.png",
      followingInstagram: "137k",
      followingTiktok: "146.2k",
      sport: "Football",
      location: "Barcelona"
    },
    {
      name: "Jordi Garcia",
      image: "/images/featuredTalent/jordi garcia.png",
      followingInstagram: "10.5k",
      followingTiktok: null,
      sport: "Triathlon",
      location: "Barcelona"
    },
    {
      name: "Tyler Sandoval",
      image: "/images/featuredTalent/tyler sandoval.webp",
      followingInstagram: "300k",
      followingTiktok: "294.4k",
      sport: "Lacrosse",
      location: "New Jersey, USA"
    },
    {
      name: "John Dawe",
      image: "/images/featuredTalent/john dawe.png",
      followingInstagram: "1.4k",
      followingTiktok: null,
      sport: "Rugby 7s",
      location: "Heidelberg"
    },
    {
      name: "Kayden McDonald",
      image: "/images/featuredTalent/kayden mcdonald.png",
      followingInstagram: "14.7k",
      followingTiktok: null,
      sport: "Football",
      location: "Ohio, USA"
    },
    {
      name: "Roman Alegre",
      image: "/images/featuredTalent/roman alegre.png",
      followingInstagram: "18.4k",
      followingTiktok: null,
      sport: "Football",
      location: "Barcelona"
    },
    {
      name: "Peter Plavec",
      image: "/images/featuredTalent/peter plavec.png",
      followingInstagram: "102k",
      followingTiktok: null,
      sport: "Ice and Open Water Marathon Swimming",
      location: "Vienna"
    },
    {
      name: "Noble Johnson",
      image: "/images/featuredTalent/noble johnson.png",
      followingInstagram: "34k",
      followingTiktok: "12.0k",
      sport: "Football",
      location: "South Carolina, USA"
    },
    {
      name: "Javante McCoy",
      image: "/images/featuredTalent/javante mccoy.png",
      followingInstagram: "9.3k",
      followingTiktok: null,
      sport: "Basketball",
      location: "LA, USA"
    },
    {
      name: "Matthias Bühler",
      image: "/images/featuredTalent/mattias buhler.png",
      followingInstagram: "130k",
      followingTiktok: null,
      sport: "Athletics",
      location: "Stuttgart"
    },
    {
      name: "Greg Gurenlian",
      image: "/images/featuredTalent/greg gurenlian.png",
      followingInstagram: "204k",
      followingTiktok: "8.5k",
      sport: "Lacrosse",
      location: "New York, USA"
    },
    {
      name: "Alex Adams",
      image: "/images/featuredTalent/alex adams.webp",
      followingInstagram: "9.3k",
      followingTiktok: null,
      sport: "Football",
      location: "Ohio, USA"
    },
    {
      name: "Jose Manuel Ruiz",
      image: "/images/featuredTalent/jose manuel ruiz.png",
      followingInstagram: "10.1k",
      followingTiktok: null,
      sport: "Sailing",
      location: "Murcia"
    },
    {
      name: "Martí Ruiz García",
      image: "/images/featuredTalent/marti ruiz garcia.png",
      followingInstagram: "12.5k",
      followingTiktok: "1.5k",
      sport: "Event Host",
      location: "Barcelona"
    },
    {
      name: "Akeem Dent",
      image: "/images/featuredTalent/akeem dent.webp",
      followingInstagram: "10.4k",
      followingTiktok: null,
      sport: "Football",
      location: "Florida, USA"
    },
    {
      name: "Amaya Gainer",
      image: "/images/featuredTalent/amaya gainer.png",
      followingInstagram: "9.4k",
      followingTiktok: null,
      sport: "Softball",
      location: "Florida, USA"
    },
    {
      name: "Javier Mira",
      image: "/images/featuredTalent/javier mira.png",
      followingInstagram: "12.7k",
      followingTiktok: null,
      sport: "Triathlon",
      location: "Valencia"
    } // 15 talents for the spanish region
  ];

  return (
    <section className="featured-talents">
      <div className="header">
        <div>
          <h2>Featured Talent From All Over The World</h2>
          <p>We work with a diverse selection of more than 6,500 global athletes from more than 150 sporting disciplines.</p>
        </div>
      </div>
      
      <div className="scrollTalents">
        {talents.map((talent, i) => (
          <div className="talent-card" key={i}>
            <img src={talent.image} alt={`${talent.name} profile`}></img>
            <div className="talent-info">
              <p className="talent-name">{talent.name}</p>
              <div className="all-social-logos">
                {talent.followingInstagram && (
                  <div className="social-platform">
                    <img src="/images/instagramLogo.webp" alt="instagram logo" className="social-logo" />
                    <p className="follower-count">{talent.followingInstagram}</p>
                  </div>
                )}
                {talent.followingTiktok && (
                  <div className="social-platform">
                    <img src="/images/tiktokLogo.webp" alt="tiktok logo" className="social-logo" />
                    <p className="follower-count">{talent.followingTiktok}</p>
                  </div>
                )}
              </div>
              <div className="tags">
                <span><img src="/images/trophy.png" className="tag-icon"/>{talent.sport}</span>
                <span><img src="/images/location.png" className="tag-icon"/>{talent.location}</span>
              </div>
            </div>
          </div>
        ))}
        
        {/* CTA Card */}
        <a target="_blank" href="https://platform.sportendorse.com/signup/brand" className="cta-card">
          <img src="/images/whiteSportEndorseLogo.webp" alt="Sport Endorse logo" />
          <h3>Sign up to view more!</h3>
        </a>
      </div>
    </section>
  );
}