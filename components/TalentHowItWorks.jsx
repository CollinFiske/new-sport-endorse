"use client"
import '../styles/talentHowItWorks.css';

export default function TalentHowItWorks() {
  const steps = [
    {
      image: "03.png",
      title: "Create Your Profile",
      number: "[01]",
      description: "Build a compelling athlete profile showcasing your achievements, stats, and personal brand to attract sponsors."
    },
    {
      image: "04.png", 
      title: "Browse Opportunities",
      number: "[02]",
      description: "Explore brand partnerships, sponsorship deals, and collaboration opportunities that match your interests."
    },
    {
      image: "05.png",
      title: "Connect & Negotiate", 
      number: "[03]",
      description: "Connect directly with brands, discuss partnership terms, and negotiate deals that work for both parties."
    },
    {
      image: "06.png",
      title: "Get Paid",
      number: "[04]", 
      description: "Complete campaigns, deliver results, and receive secure payments through our trusted platform."
    }
  ];

  return (
    <section className='talent-how-it-works-bg'>
      <div className="talent-how-it-works">
        <h2>How It Works</h2>
        <p className="subtitle">
          Join thousands of elite athletes who are monetizing their personal brand and building meaningful partnerships with top brands worldwide.
        </p>
        <div className="talent-steps-container">
          {steps.map((step, index) => (
            <div className="talent-step-card" key={index}>
              <div className="talent-step-image">
                <img src={`/images/${step.image}`} alt={step.title} className="step-image" />
              </div>
              <div className="talent-step-content">
                <div className="talent-step-header">
                  <h3 className="talent-step-title">{step.title}</h3>
                  <span className="talent-step-number">{step.number}</span>
                </div>
                <hr className="talent-divider" />
                <p className="talent-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a target="_blank" href="https://platform.sportendorse.com/signup/talent" className="talent-start-link">
          <button className="talent-start-button">START NOW</button>
        </a>
      </div>
    </section>
  );
}
