"use client"

import { useState } from 'react';
import { Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import "../styles/faqs.css"
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";

export default function FAQs(){
    const { language } = useLanguage();
    const t = translations[language].components.faqs;
    
    const [openCategories, setOpenCategories] = useState({});
    const [openItems, setOpenItems] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const brandFAQs = [
    {
      question: "How does Sport Endorse help us find athletes for sponsorship?",
      answer: "We provide an intuitive platform with powerful filtering tools that allow you to discover athlete influencers based on sport, region, demographics, and social reach. This eliminates guesswork, helping you quickly find athletes for sponsorship that align perfectly with your campaign values."
    },
    {
      question: "What types of partnerships can we create as a brand?",
      answer: "You can create a wide variety of brand-athlete partnerships, ranging from long-term contracts for athlete sponsorship, to short-term social media campaigns, guest speaking engagements, product gifting, and event appearances."
    },
    {
      question: "Why should I join Sport Endorse?",
      answer: "By joining Sport Endorse, you will have access to over 3000 verified athletes, all of whom can help you promote your brand using their large followings, increasing your brand's public exposure, which leads to more sales."
    },
    {
      question: "I'm a small business. Is sponsorship also possible for small budgets?",
      answer: "Yes, Sport Endorse provides opportunities for all types of companies and budgets. Our vision is to create \"A better sports representation world for all through accessible technology.\""
    },
    {
      question: "Do we have access to the full database of Athletes?",
      answer: "Yes. As soon as you sign up for a subscription, you will gain full access to a comprehensive database of current and former elite talent."
    },
    {
      question: "How does your sports influencer agency verify the talent?",
      answer: "All talent who join our athlete endorsement marketplace undergo a verification process. We confirm their identity, professional status, and ensure they meet the criteria to be considered elite talent, giving you confidence when you choose to sponsor athletes."
    },
    {
      question: "Can you provide campaign insights?",
      answer: "Yes, our team can provide insights on the results of your social media campaigns. Additionally, we provide analytical insights on your potential chosen athlete prior to confirming a partnership, helping you make the most informed decision."
    },
    {
      question: "Can your team review content created by talent before it's posted?",
      answer: "Yes. If your brand requests it as part of the partnership agreement, our customer success team can review any campaign content made by the talent prior to posting to ensure it meets your requirements."
    },
    {
      question: "What is the recommended fee to pay for an athlete to get the best results on the platform?",
      answer: "Dependent on the athlete and campaign deliverables, our experience recommends a minimum fee of €500 for a paid collaboration. For gifting campaigns, we recommend a minimum gifted value of €150. Offering these fee levels significantly increases the volume of applications you receive."
    },
    {
      question: "How much does a subscription for brands cost?",
      answer: "A subscription costs $/£/€ 700 (+VAT if applicable) for 3 months, or $/£/€ 1,799 (+VAT if applicable) for 12 months."
    },
    {
      question: "How much does it cost to sponsor athletes on your platform?",
      answer: "The final cost for an opportunity is the budget that you set for the opportunity (+VAT if applicable), plus any relevant bank processing charges. You may also choose to part-pay the athlete with some of your products or services."
    },
    {
      question: "What payment system is used?",
      answer: "We offer flexible payment options by Corporate Credit Card, via Stripe (an Irish-American financial services company specializing in online payment processing). Payments can also be made by bank transfer. In both cases, the platform will automatically generate an invoice."
    },
    {
      question: "What are Sport Endorse's payment terms?",
      answer: "When a client and star agree to work together, Sport Endorse requires a 50% deposit to confirm the booking. If you book within 14 days of your event, we require the full payment within 7 days and prior to the event to confirm the booking. Marketing agencies and approved clients may qualify for customized payment terms; contact us to discuss."
    },
    {
      question: "Does Multi-Currency Support cost extra?",
      answer: "No, there is no additional cost for using Multi-Currency Support. This feature allows you to set your budget in USD ($), GBP (£), or EUR (€) when posting opportunities. The only costs are your subscription plan and the opportunity budget."
    },
    {
      question: "What is Multi-Talent Selection?",
      answer: "Multi-Talent Selection allows you to select and book multiple athletes for a single opportunity. This feature is perfect for multi-talent campaigns or reaching broader audiences with one campaign. There is no additional cost for using this feature."
    },
    {
      question: "I have a lot of applications. How do I decide who to move forward with?",
      answer: "Great news on getting good interest! Preferred criteria to consider include: High Engagement, Strong Pitch (personalized to your campaign), Value for Money, and Location (local or target market). We also help by showing you which athletes are active on Sport Endorse and their rating from previous deals."
    },
    {
      question: "Can I write in special conditions/requests of my own?",
      answer: "Yes, this can be done in the description of the opportunity or discussed directly with the talent via the messenger within the platform. Please note some talent may have restrictions of their own due to existing sponsorship arrangements."
    },
    {
      question: "Can I target individual talent via the platform without setting up a live opportunity?",
      answer: "Currently no, but this ability is on the development roadmap for a future release. However, when creating an opportunity, you can target athletes based on various different factors such as their sport, gender, age, and country. You can also 'favorite' Talent to keep track of suitable profiles."
    },
    {
      question: "What happens in the event of a cancellation/no show by a talent?",
      answer: "Please contact customer support at platform.hello@sportendorse.com. If a star cancels and Sport Endorse is unable to find a suitable replacement, we will refund the full amount you have paid us. If the sports star does not turn up to the event, Sport Endorse will provide a full refund."
    },
    {
      question: "What happens if my company or venue must cancel the event due to unforeseen circumstances?",
      answer: "Please contact customer support at platform.hello@sportendorse.com, and we will assist you with our cancellation policies."
    },
    {
      question: "What if I have a complaint?",
      answer: "We offer a full support system in the event of any complaints or queries. In addition, there is a rating system feature for feedback on the platform."
    },
    {
      question: "Can I reset my password?",
      answer: "Yes, you can reset your password – by using the 'Forgot Password?' link on the login page – at any time."
    },
    {
      question: "Can I reset my profile?",
      answer: "Yes, you have full ownership over your Brand Profile, so you can edit and update as often as you wish."
    }
  ];

  const talentFAQs = [
    {
      question: "Is Sport Endorse a talent management agency?",
      answer: "No. We are an athlete marketplace and a sports sponsorship platform that connects you (and your management) directly with athlete endorsement opportunities. We handle the booking and secure payment process through our online platform, and do not hold exclusive agreements with talent."
    },
    {
      question: "Who can register with Sport Endorse? Do I qualify as talent?",
      answer: "To register, you need to be considered elite talent in your sport—defined as being a professional or having competed at a national or international level. We also welcome sports media personalities, presenters, industry speakers, fitness professionals, and health-related influencers who are looking for paid collaborations. You can also be invited to sign up. If you are uncertain, please apply!"
    },
    {
      question: "Is there a minimum age for registering?",
      answer: "Currently, the minimum age to register a profile is 16."
    },
    {
      question: "How do I become a sponsored athlete or find a sponsor?",
      answer: "To get sponsored as an athlete, you need to complete your profile, ensure your account is verified, and set your profile to \"visible\" (not private). You can then browse and apply for sports sponsorship opportunities posted by brands and businesses."
    },
    {
      question: "How will brands see me on Sport Endorse?",
      answer: "To ensure brands can find sponsors for your sport, you must verify your account and make your profile \"visible\" (not private). Brands search our platform using filters based on your profile data."
    },
    {
      question: "Can I register on behalf of talent?",
      answer: "Currently, no. However, once the talent has set up their profile, they can grant access to a third party to oversee their account."
    },
    {
      question: "How much commission does Sport Endorse charge on deals?",
      answer: "Our commission is structured to be competitive: Platform Opportunities (processed via the app/platform): $/£/€ 0-500 @ 14% commission; $/£/€ 500-2,000 @ 16%; $/£/€ 2,000+ @ 18%. Traditional Opportunities (Off-Platform): All at 20% commission (industry standard)."
    },
    {
      question: "What advantage does Sport Endorse offer me over a traditional agency?",
      answer: "Sport Endorse is an innovative sports sponsorship platform for athletes that gives you autonomy over what brand opportunities you apply for sports sponsorship. Our maximum commission of 18% on platform deals is significantly lower than the industry standard."
    },
    {
      question: "What form of sponsorship is available?",
      answer: "There are many athlete sponsorship opportunities available, including: becoming a paid brand ambassador, paid keynote speaker, one-off paid product/company endorsement, or attending events. Brands also commonly offer products or services for free (contra deals) as a form of payment."
    },
    {
      question: "Is there a full visible list of all brands/companies on the platform?",
      answer: "You can see all brands on the platform that have opted to be visible, and there is a search function that allows you to find a brand quickly."
    },
    {
      question: "Can I get sponsored by brands I like?",
      answer: "Yes. You can apply directly to any live opportunity. To help us better match you with opportunities, please fill out our new Talent Survey to tell us about brands you use and want to work with: https://share.hsforms.com/1BqqwwhxsRoSXcf23LmBlAg2ea6e."
    },
    {
      question: "How do I hear about new opportunities?",
      answer: "The best way to hear about new athlete endorsement opportunities is by enabling notifications on your Sport Endorse app."
    },
    {
      question: "Can I use AI to create my bio quickly?",
      answer: "Yes! Our sports marketing platform utilizes AI tools that allow you to quickly draft and refine your professional bio, ensuring you present yourself as the best candidate for sponsorships for athletes."
    },
    {
      question: "How to get paid on Sport Endorse?",
      answer: "You must connect your account to Stripe during the setup process. This ensures quick, safe, and secure payment directly into your bank account."
    },
    {
      question: "What payment processing methods are used and how quickly is payment processed?",
      answer: "Payments are primarily made directly into your bank account via Stripe. Brands make payments after the event is complete. The processing time is within 14 business days of receipt of payment from the Brand."
    },
    {
      question: "What is KYC Verification via Stripe and does it cost anything?",
      answer: "KYC (Know Your Customer) Verification via Stripe is a secure, free process required to verify your identity. This is a complimentary feature that enhances trust and security for all talent and complies with international regulations for secure payments."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, the Sport Endorse app is available for download on both Android and iOS devices, allowing you to manage your athlete endorsement opportunities on the go."
    },
    {
      question: "Is there a limit to how many opportunities I can apply for?",
      answer: "No, you can browse and apply for sports sponsorship for as many live opportunities that you feel are relevant to you."
    },
    {
      question: "What happens if I must cancel last minute?",
      answer: "You can cancel online, but if it is within 48 hours of the event, you MUST contact customer services on platform.hello@www.sportendorse.com immediately."
    },
    {
      question: "What happens if the organizer/venue cancels an opportunity?",
      answer: "Please contact customer support at platform.hello@www.sportendorse.com, and we will assist you with the necessary steps."
    },
    {
      question: "Is Sport Endorse an equal opportunities platform?",
      answer: "Yes, Sport Endorse is an equal opportunities platform."
    },
    {
      question: "How safe is my information online?",
      answer: "All information on the platform is stored safely and securely, in line with GDPR legislation."
    }
  ];

  const agencyFAQs = [
    // Empty for now as requested
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
            {[
              {
                name: 'Brand FAQs',
                key: 'brands',
                faqs: brandFAQs,
                color: '#18A0FB'
              },
              {
                name: 'Talent FAQs', 
                key: 'talent',
                faqs: talentFAQs,
                color: '#10b981'
              },
              {
                name: 'Sports Agency FAQs',
                key: 'agencies', 
                faqs: agencyFAQs,
                color: '#f59e0b'
              }
            ].map((category) => (
              <div key={category.key} className="faq-category">
                <button 
                  onClick={() => toggleCategory(category.key)}
                  className="faq-category-button"
                  style={{ borderLeft: `4px solid ${category.color}` }}
                >
                  <span className="faq-category-text" style={{ color: category.color }}>{category.name}</span>
                  <div className="faq-category-icon">
                    {openCategories[category.key] ? (
                      <ChevronUp className="faq-icon" style={{ color: category.color }} />
                    ) : (
                      <ChevronDown className="faq-icon" style={{ color: category.color }} />
                    )}
                  </div>
                </button>
                
                {openCategories[category.key] && category.faqs.length > 0 && (
                  <div className="faq-category-content">
                    {category.faqs.map((item, index) => (
                      <div key={index} className="faq-item">
                        <button 
                          onClick={() => toggleItem(category.key, index)}
                          className="faq-item-button"
                        >
                          <span className="faq-item-text">{item.question}</span>
                          <div className="faq-item-icon">
                            {openItems[`${category.key}-${index}`] ? (
                              <Minus className="faq-icon" />
                            ) : (
                              <Plus className="faq-icon" />
                            )}
                          </div>
                        </button>
                        
                        {openItems[`${category.key}-${index}`] && (
                          <div className="faq-item-content">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {openCategories[category.key] && category.faqs.length === 0 && (
                  <div className="faq-category-content">
                    <div className="faq-empty-message">
                      Coming soon! Check back for updates.
                    </div>
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