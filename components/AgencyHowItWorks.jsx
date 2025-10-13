"use client"
import '../styles/howItWorks.css';


export default function AgencyHowItWorks() {
    const steps = [
        {
        icon: "testmessage.png",
        title: "Expand Your Earning Potential",
        number: "[01]",
        description: "A pipeline of opportunities to help you secure more paid deals.",
        },
        {
        icon: "volume.png",
        title: "A Partner, Not a Competitor",
        number: "[02]",
        description: "We're transparent about our commission split on every paid deal.",
        },
        {
        icon: "startwithyellow.png",
        title: "Streamlined Management & Support",
        number: "[03]",
        description: "A secure platform and dedicated team to help you manage your roster and find more deals.",
        }
    ];

  return (
    <section className='bgGrid'>
        <div className="how-it-works">
            <h2>Why Agents Choose Sport Endorse</h2>
            <p className="subtitle">
                We're more than just a platform—we're a dedicated partner.
            </p>
            <div className="how-it-works-content">
                <div className="steps-container">
                {steps.map((step, index) => (
                    <div className="step-card" key={index}>
                    <div className="step-header">
                        <span className="icon">
                            <img src={`/images/${step.icon}`} alt={step.title} className={`step-icon step-${index}`} />
                        </span>
                        <div className="title-row">
                        <h3 className="step-title">{step.title}</h3>
                        <span className="step-number">{step.number}</span>
                        </div>
                    </div>
                    <hr className="divider" />
                    <p className="step-description">{step.description}</p>
                    </div>
                ))}
                </div>
                <a target="_blank" href="https://platform.sportendorse.com/signup/brand" className="start-link">
                    <button className="start-button">START NOW</button>
                </a>
            </div>
        </div>
    </section>
  );
};


