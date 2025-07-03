"use client";
import "../styles/businessSubscription.css";

export default function BusinessSubscription() {
  return (
    <section className="sub-subscriptionSection">      
      <div className="sub-container">
        <div className="sub-leftContent">
          <h2 className="sub-title">
            Business<br />
            Subscription
          </h2>
          
          <p className="sub-description">
            Get sorted and harness the power of collaboration with 
            elite athletes that are all about performance. Pay easily 
            and automatically either every quarterly, or annually. 
            Simply subscribe below!
          </p>
          
          <div className="sub-consultationSection">
            <div className="sub-consultationText">
              <h3>ANY QUESTIONS LEFT?</h3>
              <p>Schedule a 15-min Call with Our Expert Team of Sports Marketing!</p>
            </div>
          </div>
          
          <button className="sub-scheduleButton">
            SCHEDULE →
          </button>
        </div>
        
        <div className="sub-pricingCards">
          <div className="sub-pricingCard sub-freeTrialCard">
            <div className="sub-freeBadge">
              Free Trial
            </div>
            
            <div className="sub-cardHeader">
              <h3 className="sub-freeTrialPlanType">FREE TRIAL</h3>
              <div className="sub-price">
                <span className="sub-freeAmount">$0</span>
                <span className="sub-period">/month</span>
              </div>
              <p className="sub-billing">1 month free trial<br /><br /></p>
            </div>
            
            <button className="sub-freeTrialButton">
              START FREE TRIAL
            </button>
            
            <ul className="sub-features">
              <li>Full access to all features</li>
              <li>Built-in instant messaging feature</li>
              <li>Easily advertise your marketing opportunity</li>
              <li>Unlimited access to athletes' profiles</li>
              <li>Post up to 3 opportunities</li>
              <li>Basic onboarding support</li>
            </ul>
          </div>
          
          <div className="sub-pricingCard">
            <div className="sub-cardHeader">
              <h3 className="sub-planType">QUARTERLY RATE</h3>
              <div className="sub-price">
                <span className="sub-amount">$50</span>
                <span className="sub-period">/month*</span>
              </div>
              <p className="sub-billing">*Paid every 3 months,<br />+VAT</p>
            </div>
            
            <button className="sub-trialButton">
              START SUBSCRIPTION
            </button>
            
            <ul className="sub-features">
              <li>A Comprehensive set of tools and filters to assist you in your search</li>
              <li>Built-in instant messaging feature</li>
              <li>Easily advertise your marketing opportunity</li>
              <li>Unlimited access to athletes' profiles</li>
              <li>Post an unlimited number of opportunities</li>
              <li>Onboarding support</li>
            </ul>
          </div>
          
          <div className="sub-pricingCard sub-popularCard">
            <div className="sub-popularBadge">
              Save 25%
            </div>
            
            <div className="sub-cardHeader">
              <h3 className="sub-planType">ANNUAL RATE</h3>
              <div className="sub-price">
                <span className="sub-amount">$37.5</span>
                <span className="sub-period">/month*</span>
              </div>
              <p className="sub-billing">*Paid every 12 months,<br />+VAT</p>
            </div>
            
            <button className="sub-trialButton">
              START SUBSCRIPTION
            </button>
            
            <ul className="sub-features">
              <li>A Comprehensive set of tools and filters to assist you in your search</li>
              <li>Built-in instant messaging feature</li>
              <li>Easily advertise your marketing opportunity</li>
              <li>Unlimited access to athletes' profiles</li>
              <li>Post an unlimited number of opportunities</li>
              <li>Onboarding support, and once-a-month account management check-in</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}