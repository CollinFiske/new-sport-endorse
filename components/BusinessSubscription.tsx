"use client";
import "../styles/businessSubscription.css";

export default function BusinessSubscription() {
  const features = [
    { name: "Access to Sport Endorse platform", trial: true, quarterly: true, annual: true },
    { name: "Suite of tools and filters to support your search", trial: true, quarterly: true, annual: true },
    { name: "Talent ID verification included", trial: true, quarterly: true, annual: true },
    { name: "Built-in instant messaging feature", trial: true, quarterly: true, annual: true },
    { name: "Dedicated onboarding support", trial: true, quarterly: true, annual: true },
    { name: "Target unlimited countries", trial: false, quarterly: true, annual: true },
    { name: "Access unlimited athletes' profiles", trial: false, quarterly: true, annual: true },
    { name: "Share opportunities with all talent in any market", trial: false, quarterly: true, annual: true },
    //{ name: "Post unlimited number of opportunities", trial: false, quarterly: true, annual: true },
    { name: "Full access to advanced tools and search filters", trial: false, quarterly: true, annual: true },
    { name: "Monthly check-ins with Dedicated Customer Success Manager", trial: false, quarterly: false, annual: true }
  ];

  return (
    <section className="sub-subscription-section">
      <div className="sub-container sub-vertical"> {/** comment here */}
        <div className="sub-top-content-row">
          <div className="sub-top-left">
            <h2 className="sub-title">
              Business Subscription
            </h2>
            <p className="sub-description">
              Get sorted and harness the power of collaboration with elite athletes that are all about performance. Pay easily and automatically either every quarterly, or annually. Subscribe below!
            </p>
          </div>
          <div className="sub-top-right">
            <div className="sub-consultation-section">
              <div className="sub-consultation-text">
                <h3>ANY QUESTIONS LEFT?</h3>
                <p>Schedule a 15-min Call with Our Expert Team of Sports Marketing!</p>
              </div>
            </div>
            <a target="_blank" href="https://calendly.com/d/dzw-nc4-57b/sport-endorse-demo?month=2025-07">
              <button className="sub-schedule-button">
                SCHEDULE
                <svg className="faq-schedule-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l10 10M7 17l10-10" />
                </svg>
              </button>
            </a>
          </div>
        </div>

        <div className="sub-pivot-table">
          {/* Header Row */}
          <div className="sub-pivot-header">
            <div className="sub-pivot-feature-header">Features</div>
            <div className="sub-pivot-plan-header sub-trial-header">
              <div className="sub-plan-badge sub-trial-badge">Free Trial</div>
              <h3>FREE TRIAL</h3>
              <div className="sub-price">
                <span className="sub-amount-trial">$0</span>
                <span className="sub-period">/month</span>
              </div>
              <p className="sub-billing">1 month free trial</p>
              <a target="_blank" href="https://platform.sportendorse.com/signup/brand?subscription=trial">
                <button className="sub-pivot-button sub-trial-button">START FREE TRIAL</button>
              </a>
            </div>
            <div className="sub-pivot-plan-header">
              <h3>QUARTERLY RATE</h3>
              <div className="sub-price">
                <span className="sub-amount">$700</span>
                <span className="sub-period">/quarter*</span>
              </div>
              <p className="sub-billing">*Paid every 3 months, +VAT</p>
              <a target="_blank" href="https://platform.sportendorse.com/signup/brand?subscription=quarterly">
                <button className="sub-pivot-button sub-quarterly-button">START SUBSCRIPTION</button>
              </a>
            </div>
            <div className="sub-pivot-plan-header sub-annual-header">
              <div className="sub-plan-badge sub-annual-badge">Save 35%</div>
              <h3>ANNUAL RATE</h3>
              <div className="sub-price">
                <span className="sub-amount">$1,799</span>
                <span className="sub-period">/year*</span>
              </div>
              <p className="sub-billing">*Paid every 12 months, +VAT</p>
              <a target="_blank" href="https://platform.sportendorse.com/signup/brand?subscription=annual">
                <button className="sub-pivot-button sub-annual-button">START SUBSCRIPTION</button>
              </a>
            </div>
          </div>

          {/* Feature Rows */}
          {features.map((feature, index) => (
            <div key={index} className="sub-pivot-row">
              <div className="sub-pivot-feature">{feature.name}</div>
              <div className="sub-pivot-cell">
                {feature.trial ? <span className="sub-checkmark sub-trial-check">✓</span> : <span>-</span>}
              </div>
              <div className="sub-pivot-cell">
                {feature.quarterly ? <span className="sub-checkmark sub-quarterly-check">✓</span> : <span>-</span>}
              </div>
              <div className="sub-pivot-cell">
                {feature.annual ? <span className="sub-checkmark sub-annual-check">✓</span> : <span>-</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}