"use client";
import "../styles/featuredTalents.css";

export default function FeaturedTalents() {
  const talents = [
    {
      name: "Fabian Pecher",
      image: "/images/placeholder.png",
      followingInstagram: "257k",
      followingTiktok: "643k",
      sport: "⚽ Freestyle Football",
      teamOrCollege: "🎯 Professional",
      location: "📍 Augsburg"
    },
    {
      name: "Emily Cole",
      image: "/images/placeholder.png",
      followingInstagram: "18.4k",
      followingTiktok: "316.9k",
      sport: "🏃 Athletics",
      teamOrCollege: "🎯 Duke & Team USA",
      location: "📍 North Carolina, USA"
    },
    {
      name: "Abby Berner",
      image: "/images/placeholder.png",
      followingInstagram: "1.9M+",
      followingTiktok: "6M",
      sport: "💪 Fitness",
      teamOrCollege: "🎯 Professional",
      location: "📍 Kansas, USA"
    },
    {
      name: "Amir Abedzadeh",
      image: "/images/placeholder.png",
      followingInstagram: "869k",
      followingTiktok: null,
      sport: "⚽ Football",
      teamOrCollege: "🎯 Professional",
      location: "📍 Valencia"
    },
    {
      name: "Sergio Sanchez",
      image: "/images/placeholder.png",
      followingInstagram: "104k",
      followingTiktok: "146.2k",
      sport: "⚽ Football",
      teamOrCollege: "🎯 Professional",
      location: "📍 Barcelona"
    },
    {
      name: "Jordi Garcia",
      image: "/images/placeholder.png",
      followingInstagram: "10.5k",
      followingTiktok: null,
      sport: "🏊 Triathlon",
      teamOrCollege: "🎯 Professional",
      location: "📍 Barcelona"
    },
    {
      name: "Tyler Sandoval",
      image: "/images/placeholder.png",
      followingInstagram: "45.4k",
      followingTiktok: "294.4k",
      sport: "🥍 Lacrosse",
      teamOrCollege: "🎯 Princeton",
      location: "📍 New Jersey, USA"
    },
    {
      name: "John Dawe",
      image: "/images/placeholder.png",
      followingInstagram: "1.4k",
      followingTiktok: null,
      sport: "🏉 Rugby 7s",
      teamOrCollege: "🎯 Professional",
      location: "📍 Heidelberg"
    },
    {
      name: "Kayden McDonald",
      image: "/images/placeholder.png",
      followingInstagram: "8.2k",
      followingTiktok: null,
      sport: "🏈 Football",
      teamOrCollege: "🎯 Ohio State",
      location: "📍 Ohio, USA"
    },
    {
      name: "Roman Alegre",
      image: "/images/placeholder.png",
      followingInstagram: "18.4k",
      followingTiktok: null,
      sport: "⚽ Football",
      teamOrCollege: "🎯 Professional",
      location: "📍 Barcelona"
    },
    {
      name: "Peter Plavec",
      image: "/images/placeholder.png",
      followingInstagram: "10.2k",
      followingTiktok: null,
      sport: "🏊 Ice and Open Water Marathon Swimming",
      teamOrCollege: "🎯 Professional",
      location: "📍 Vienna"
    },
    {
      name: "Noble Johnson",
      image: "/images/placeholder.png",
      followingInstagram: "27.4k",
      followingTiktok: "12.0k",
      sport: "🏈 Football",
      teamOrCollege: "🎯 Clemson",
      location: "📍 South Carolina, USA"
    },
    {
      name: "Amaya Gainer",
      image: "/images/placeholder.png",
      followingInstagram: "9.4k",
      followingTiktok: null,
      sport: "⚾ Softball",
      teamOrCollege: "🎯 Florida A&M",
      location: "📍 Florida, USA"
    },
    {
      name: "Javante McCoy",
      image: "/images/placeholder.png",
      followingInstagram: "9.3k",
      followingTiktok: null,
      sport: "🏀 Basketball",
      teamOrCollege: "🎯 Professional",
      location: "📍 LA, USA"
    },
    {
      name: "Alex Adams",
      image: "/images/placeholder.png",
      followingInstagram: "9.3k",
      followingTiktok: null,
      sport: "🏈 Football",
      teamOrCollege: "🎯 Akron",
      location: "📍 Ohio, USA"
    },
    {
      name: "Matthias Bühler",
      image: "/images/placeholder.png",
      followingInstagram: "130k",
      followingTiktok: null,
      sport: "🏃 Athletics",
      teamOrCollege: "🎯 Professional",
      location: "📍 Stuttgart"
    },
    {
      name: "Jose Manuel Ruiz",
      image: "/images/placeholder.png",
      followingInstagram: "10.1k",
      followingTiktok: null,
      sport: "⛵ Sailing",
      teamOrCollege: "🎯 Professional",
      location: "📍 Murcia"
    },
    {
      name: "Greg Gurenlian",
      image: "/images/placeholder.png",
      followingInstagram: "225k",
      followingTiktok: "8.5k",
      sport: "🥍 Lacrosse",
      teamOrCollege: "🎯 Influencer",
      location: "📍 New York, USA"
    },
    {
      name: "Akeem Dent",
      image: "/images/placeholder.png",
      followingInstagram: "9.2k",
      followingTiktok: null,
      sport: "🏈 Football",
      teamOrCollege: "🎯 Florida State University",
      location: "📍 Florida, USA"
    },
    {
      name: "Javier Mira",
      image: "/images/placeholder.png",
      followingInstagram: "12.7k",
      followingTiktok: null,
      sport: "🏊 Triathlon",
      teamOrCollege: "🎯 Professional",
      location: "📍 Valencia"
    },
    {
      name: "Martí Ruiz García",
      image: "/images/placeholder.png",
      followingInstagram: "12.5k",
      followingTiktok: "1.5k",
      sport: "🎪 Event Host",
      teamOrCollege: "🎯 Barcelona, Spain",
      location: "📍 Barcelona"
    }
  ];

  return (
    <section className="featured-talents">
      <div className="header">
        <div>
          <h2>Our Featured Talents</h2>
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
                <span>{talent.sport}</span>
                <span>{talent.teamOrCollege}</span>
                <span>{talent.location}</span>
              </div>
            </div>
          </div>
        ))}
        
        {/* CTA Card */}
        <a href="/signup" className="cta-card">
          <img src="/images/whiteSportEndorseLogo.webp" alt="Sport Endorse logo" />
          <h3>Sign up to view more!</h3>
        </a>
      </div>
    </section>
  );
}