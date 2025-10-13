

"use client"
import '../styles/brandKeyFeatures.css';

export default function BrandKeyFeatures() {
  const features = [
    {
      icon: "location.png",
      title: "Global Reach",
      description: "Book multiple athletes, in multiple markets, and pay in multiple currencies—all through one platform.",
    },
    {
      icon: "trophy.png", 
      title: "Precision Targeting",
      description: "Target specific sports, demographics, and markets to find the perfect fit for your campaigns.",
    },
    {
      icon: "heart_icon.png",
      title: "Dedicated Support",
      description: "Our customer success team is on hand to ensure your campaigns run smoothly.",
    }
  ];

  return (
    <section className="brand-key-features">
      <div className="features-container">
        <h2>Key Features</h2>
        <p>Discover what makes Sport Endorse the ultimate platform for connecting brands with elite athletes worldwide.</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <img src={`/images/${feature.icon}`} alt={feature.title} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}