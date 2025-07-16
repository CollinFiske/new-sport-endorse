"use client"

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import "../styles/faqs.css"

export default function FAQs(){
    const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "HOW MUCH DOES IT COST?",
      answer: "A subscription for brands/companies/agencies costs $/£/€ 700 (+VAT if applicable) for 3 months, or $/£/€ 1,799 (+VAT if applicable) for 12months. The final cost for an opportunity is the budget that you set for the opportunity (+VAT if applicable), plus any relevant bank processing charges."
    },
    {
      question: "WHAT ARE SPORT ENDORSE'S PAYMENT TERMS?",
      answer: "When a client and star agree to work together, Sport Endorse requires a 50% deposit to confirm the booking. Booking deposits are non-refundable if you cancel after booking a star. If a star cancels and Sport Endorse is unable to find a suitable replacement, we will refund the full amount you have paid us. If you book within 14 days of your event, we will require the full payment within 7 days and prior to the event to confirm the booking. If the sports star does not turn up to the event, Sport Endorse will provide a full refund. Marketing agencies and approved clients may qualify for customised payment terms. Contact us to discuss."
    },
    {
      question: "WHAT PAYMENT SYSTEM IS USED?",
      answer: "We offer flexible payment options by Corporate Credit Card, via Stripe. Stripe is an Irish-American financial services company specialising in online payment processing, similar to Paypal. Payments can also be made by bank transfer. In both cases the platform will automatically generate an invoice. You may also choose to part-pay the athlete with some of your products or services."
    },
    {
      question: "DO WE HAVE ACCESS TO THE FULL DATABASE OF ATHLETES?",
      answer: "Yes. As soon as you sign up, you will gain full access to a comprehensive database of current and former elite talent"
    },
    {
      question: "I'M A SMALL BUSINESS. IS SPONSORSHIP ALSO POSSIBLE FOR SMALL BUDGETS?",
      answer: "Yes, Sport Endorse provides opportunities for all types of companies and budgets. Our vision is to create “A better sports representation world for all through accessible technology”."
    },
    {
      question: "CAN I RESET MY PASSWORD?",
      answer: "Yes, you can reset your password – by using the ‘Forgot Password?’ link on the login page – at anytime, and in fact we recommended that you do so at least once per quarter."
    },
    {
      question: "CAN I RESET MY PROFILE?",
      answer: "Yes, you have full ownership over your Brand Profile, so you can edit and update as often as you wish."
    },
    {
      question: "WHAT IF I HAVE A COMPLAINT?",
      answer: "We offer a full support system in the event of any complaints or queries, and in addition, there is a rating system feature for feedback on the platform."
    },
    {
      question: "WHAT HAPPENS IN THE EVENT OF A CANCELLATION/NO SHOW BY A TALENT?",
      answer: "Please contact customer support at platform.hello@www.sportendorse.com and we will assist you."
    },
    {
      question: "WHAT HAPPENS IF MY COMPANY OR VENUE MUST CANCEL THE EVENT DUE TO UNFORESEEN CIRCUMSTANCES?",
      answer: "Please contact customer support at platform. hello@sportendorse.com and we will assist you."
    },
    {
      question: "CAN I WRITE IN SPECIAL CONDITIONS/REQUESTS OF MY OWN?",
      answer: "Yes, this can be done in the description of the opportunity or it can be discussed directly with the talent via the messenger within the platform. Please note also some talent may have some restrictions of their own due to sponsorship arrangements."
    },
    {
      question: "CAN I TARGET INDIVIDUAL TALENT VIA THE PLATFORM WITHOUT HAVING TO SET UP A LIVE OPPORTUNITY?",
      answer: "Currently no, but this ability is in the development road map for a future release. However, when creating an opportunity you can target athletes based on various different factors such as their sport, gender, age and country. You can also ‘favourite’ Talent to keep track of what profiles you think might be suitable for your needs."
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-content">
        <div className="faq-left-section">
          <h1 className="faq-title">FAQs</h1>
          
          <div className="faq-questions-section">
            <div className="faq-avatars">
              <div className="faq-avatar"></div>
              <div className="faq-avatar"></div>
              <div className="faq-avatar"></div>
            </div>
            <span className="faq-questions-text">ANY QUESTIONS LEFT?</span>
          </div>
          
          <p className="faq-description">
            Schedule a 15-min Call with Our Expert Team of<br />
            Sports Marketing!
          </p>
          
          <a target="_blank" href="https://calendly.com/d/dzw-nc4-57b/sport-endorse-demo?month=2025-07">
            <button className="faq-schedule-button">
              SCHEDULE 
              <svg className="faq-schedule-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l10 10M7 17l10-10" />
              </svg>
            </button>
          </a>
        </div>
        
        <div className="faq-right-section">
          <div className="faq-items-list">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <button 
                  onClick={() => toggleItem(index)}
                  className="faq-item-button"
                >
                  <span className="faq-item-text">{item.question}</span>
                  <div className="faq-item-icon">
                    {openItems[index] ? (
                      <Minus className="faq-icon" />
                    ) : (
                      <Plus className="faq-icon" />
                    )}
                  </div>
                </button>
                
                {openItems[index] && (
                  <div className="faq-item-content">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
}