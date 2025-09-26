"use client"
import '../styles/howItWorks.css';


export default function BrandHowItWorks() {
    const steps = [
        {
        icon: "testmessage.png",
        title: "Create Profile",
        number: "[01]",
        description: "Tell us about your brand, industry, and location to build a profile that attracts the right talent.",
        },
        {
        icon: "volume.png",
        title: "Launch Opportunity",
        number: "[02]",
        description: "Describe the athletes you want to collaborate with and outline the requirements of your partnership.",
        },
        {
        icon: "startwithyellow.png",
        title: "Choose Athletes ",
        number: "[03]",
        description: "Chat with athletes, discuss the details, and select the ones who align with your brand and campaign goals.",
        },
        {
        icon: "dollarsign.png",
        title: "Complete Campaign",
        number: "[04]",
        description: "After confirming the partnership, you can handle payments and finalize the deal securely through the platform.",
        }
    ];

  return (
    <section className='bgGrid'>
        <div className="how-it-works">
            <h2>How it works</h2>
            <p className="subtitle">
                Our innovative platform makes finding the right athlete brand ambassador for your client's marketing campaigns easier than ever before. Here's our simple four-step process to finding the perfect sports star aligning with your client's brand values.
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


