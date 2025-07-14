"use client";
import "../styles/businessSubscription.css";

export default function BusinessSubscription() {
  return (
    <section className="sub-subscription-section">
      <div className="sub-container sub-vertical">
        <div className="sub-top-content-row">
          <div className="sub-top-left">
            <h2 className="sub-title">
              Business Subscription
            </h2>
            <p className="sub-description">
              Get sorted and harness the power of collaboration with elite athletes that are all about performance. Pay easily and automatically either every quarterly, or annually. Simply subscribe below!
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
                SCHEDULE →
              </button>
            </a>
          </div>
        </div>
        <div className="sub-pricing-cards">
          <div className="sub-pricing-card sub-free-trial-card">
            <div className="sub-free-badge">
              Free Trial
            </div>
            <div className="sub-card-header">
              <h3 className="sub-free-trial-plan-type">FREE TRIAL</h3>
              <div className="sub-price">
                <span className="sub-free-amount">$0</span>
                <span className="sub-period">/month</span>
              </div>
              <p className="sub-billing">1 month free trial<br /><br /></p>
            </div>
            <a target="_blank" href="https://platform.sportendorse.com/signup/brand?subscription=trial">
              <button className="sub-free-trial-button">
                START FREE TRIAL
              </button>
            </a>
            <ul className="sub-features">
              <li>A month's access to Sport Endorse</li>
              <li>Suite of tools and filters to support your search</li>
              <li>Talent ID verification included</li>
              <li>Built-in instant messaging feature</li>
              <li>Target one country of your choice</li>
              <li>Share your opportunities with all talent in that market</li>
              <li>Easily advertise your marketing opportunity</li>
              <li>Access up to 50 athletes' profiles</li>
              <li>Post at least 1 opportunity</li>
              <li>Dedicated onboarding support</li>
            </ul>
          </div>
          <div className="sub-pricing-card">
            <div className="sub-card-header">
              <h3 className="sub-plan-type">QUARTERLY RATE</h3>
              <div className="sub-price">
                <span className="sub-amount">$700</span>
                <span className="sub-period">/quarter*</span>
              </div>
              <p className="sub-billing">*Paid every 3 months,<br />+VAT</p>
            </div>
            <a target="_blank" href="https://platform.sportendorse.com/signup/brand?subscription=quarterly">
              <button className="sub-trial-button">
                START SUBSCRIPTION
              </button>
            </a>
            <ul className="sub-features">
              <li>Three month's access to Sport Endorse</li>
              <li>Full access to advanced tools and search filters</li>
              <li>Talent ID verification included</li>
              <li>Built-in instant messaging feature</li>
              <li>Target unlimited countries</li>
              <li>Share opportunities with all talent in any market</li>
              <li>Easily advertise your marketing opportunity</li>
              <li>Unlimited access to athletes' profiles</li>
              <li>Post an unlimited number of opportunities</li>
              <li>Personalized Onboarding support</li>
            </ul>
          </div>
          <div className="sub-pricing-card sub-popular-card">
            <div className="sub-popular-badge">
              Save 35%
            </div>
            <div className="sub-card-header">
              <h3 className="sub-plan-type">ANNUAL RATE</h3>
              <div className="sub-price">
                <span className="sub-amount">$1,799</span>
                <span className="sub-period">/year*</span>
              </div>
              <p className="sub-billing">*Paid every 12 months,<br />+VAT</p>
            </div>
            <a target="_blank" href="https://platform.sportendorse.com/signup/brand?subscription=annual">
              <button className="sub-trial-button">
                START SUBSCRIPTION
              </button>
            </a>
            <ul className="sub-features">
              <li>A year's access to Sport Endorse</li>
              <li>Full access to advanced tools and search filters</li>
              <li>Talent ID verification included</li>
              <li>Built-in instant messaging feature</li>
              <li>Target unlimited countries</li>
              <li>Share opportunities with all talent in any market</li>
              <li>Easily advertise your marketing opportunity</li>
              <li>Unlimited access to athletes' profiles</li>
              <li>Post an unlimited number of opportunities</li>
              <li><i>Personal onboarding support and monthly check-ins with your dedicated Customer Success Manager</i></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}