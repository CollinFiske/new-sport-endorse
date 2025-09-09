"use client"
import '../styles/agencyHowItWorks.css';


export default function AgencyHowItWorks() {
    const steps = [
        {
        icon: "testmessage.png",
        title: "BOOK A DEMO",
        number: "[01]",
        description: "Once you create an account with us, you can browse thousands of athlete ambassadors and connect easily to find the perfect fit for your client’s marketing needs.",
        },
        {
        icon: "volume.png",
        title: "CREATE A NEW OPPORTUNITY",
        number: "[02]",
        description: "Share marketing campaign goals with our team of sports heroes, outlining clear objectives, deliverables, and budget to ensure both parties understand their responsibilities.",
        },
        {
        icon: "startwithyellow.png",
        title: "CHOOSE THE RIGHT CANDIDATE",
        number: "[03]",
        description: "Interested athletes will engage with your opportunity and submit cover letters to make their case. Once you’ve found the perfect fit, book your chosen athlete brand ambassadors in exchange for cash, products, royalty or even equity.",
        },
        {
        icon: "dollarsign.png",
        title: "COMPLETE THE CAMPAIGN",
        number: "[04]",
        description: "Once the campaign is successfully completed, and all deliverables met, Sport Endorse will generate an accounting invoice. From there, you can make a payment directly to the athlete’s bank account using a secure payment process.",
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


