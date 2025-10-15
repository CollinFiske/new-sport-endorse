"use client";
import "../styles/whyAthletesChooseUs.css";
import AppStores from "./AppStores";

export default function WhyAthletesChooseUs() {
  return (
    <section className="why-athletes-section">
      <div className="why-athletes-container">
        <h2 className="why-athletes-title">Why Athletes Choose Sport Endorse</h2>
        
        <div className="why-athletes-content">
          <div className="why-athletes-text">
            <div className="feature-item">
              <h3 className="feature-title">
                <img src="/images/dollarsign.png" alt="dollar" className="feature-icon" />
                Secure Paid Deals
              </h3>
              <p className="feature-description">
                Access brands seeking talent for brand ambassadorships, social media campaigns, and more.
              </p>
            </div>

            <div className="feature-item">
              <h3 className="feature-title">
                <img src="/images/trophy.png" alt="trophy" className="feature-icon" />
                Build Your Brand
              </h3>
              <p className="feature-description">
                Build a standout professional profile. Secure genuine partnerships that support your performance and grow your income, with expert guidance from us.
              </p>
            </div>

            <div className="feature-item">
              <h3 className="feature-title">
                <img src="/images/phone-talent-benefit-pic.png" alt="phone" className="feature-icon" />
                Manage on the Go
              </h3>
              <p className="feature-description">
                Our mobile app allows easy tracking of payments, communication, and deal management from your phone.
              </p>
            </div>
          </div>

          <div className="cta-section">
            <p className="cta-text">Download the app and sign up for free</p>
            <AppStores />
          </div>
        </div>
      </div>
    </section>
  );
}
