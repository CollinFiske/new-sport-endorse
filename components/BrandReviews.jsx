'use client';

import { useState, useEffect } from 'react';
import '../styles/brandReviews.css';
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";

export default function BrandReviews() {
  const { language } = useLanguage();
  const t = translations[language].components.brandReviews;
  const reviews = [
    {
      id: 1,
      image: "/images/laura siddal.png",
      alt: "Professional headshot of Carlos Rodriguez, football player",
      text: "I've been a long-time fan of MINI. It's a brand that for me is so British and carries this heritage through its design over the years. I was delighted when through Sport Endorse I was made a Friend of the Brand for MINI UK.",
      name: "Laura Siddall",
      position: "TRIATHLON  | PROFESSIONAL"
    },
    {
      id: 2,
      image: "/images/homePageTable/shuzgroup_logo.png",
      alt: "Shuz Group company logo",
      text: "Sport Endorse has revolutionised the way ShuzGroup approaches sports brand ambassador marketing. This platform has not only simplified the process of connecting with sports talent across the nation but has also given us the freedom to choose the perfect ambassadors for our brand. This platform has truly enhanced our ability to make informed decisions when selecting sports talent and we would gladly recommend Sport Endorse.",
      name: "Rebecca Quinlan",
      position: "Marketing Director at Shuz Group"
    },
    {
      id: 3,
      image: "/images/donal healy.png",
      alt: "Donal Healy",
      text: "We were delighted to work with Sport Endorse on campaigns involving both Jack Carty and Jason Quigley - two outstanding sporting ambassadors for the West and North West of Ireland.",
      name: "Donal Healy",
      position: "IRELAND WEST AIRPORT | HEAD OF MARKETING, AVIATION BUSINESS DEVELOPMENT & COMMUNICATIONS"
    },
    {
      id: 4,
      image: "/images/john delves.png",
      alt: "John Delves",
      text: "The team at Sport Endorse were a pleasure to work with, they were on hand in the lead up to our photoshoot and on the day were more than accommodatingwith our requests. A great experience all around and one we will no doubt repeat!”",
      name: "John Delves",
      position: "MAGNET +  | MANAGING DIRECTOR"
    },
    {
      id: 5,
      image: "/images/jason quigley.png",
      alt: "Jason Quigley",
      text: "When you're on the way to being a World Champion you need a good team in your corner and Sport Endorse has been setting me up to knock out the competition for brands I work with.... .. plenty more fire power here!",
      name: "Jason Quigley",
      position: "BOXING | PROFESSIONAL & FORMER TEAM IRELAND"
    },
    {
      id: 6,
      image: "/images/daithi oconnor.png",
      alt: "Daithí O'Connor",
      text: "Working with Sport Endorse is a pleasure. We've been very happy with the partnerships we've secured and look forward to driving our business  in the UK with help from the platform.",
      name: "Daithí O'Connor",
      position: "REVIVE ACTIVE | MD & FOUNDER"
    },
    {
      id: 7,
      image: "/images/perform_nutrition.png",
      alt: "Perfom nutrition logo",
      text: "Sport Endorse is doing fantastic work in looking after athletes and helping them achieve their potential on and off the field. We are delighted to work with the Sport Endorse team to secure brand partnerships that, without them, would not have been possible.",
      name: "Aoife Cassidy",
      position: "Marketing Executive"
    },
    {
      id: 8,
      image: "/images/solestar.png",
      alt: "Solestar logo",
      text: "Sport Endorse is a great platform for connecting with brand ambassadors! It's always a plus when a platform is not only effective but also easy to use and has helpful support staff.",
      name: "Jelena Jelic",
      position: "Key Account Manager"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const currentReview = reviews[currentIndex];

  return (
    <section className="brand-reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <div className="quote-icon">"</div>
          <h2>{t.title}</h2>
          <p>
            {t.subtitle}
          </p>
        </div>

        <div className="review-card">
          <div className="review-image">
            <img src={currentReview.image} alt={currentReview.alt} />
          </div>
          <div className="review-text">
            <p>"{currentReview.text}"</p>
          </div>
          <div className="review-author">
            <h4>{currentReview.name}</h4>
            <p>{currentReview.position}</p>
          </div>
        </div>

        <div className="review-indicators">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="review-navigation">
          <button 
            className="nav-arrow prev"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)}
          >
            ←
          </button>
          <button 
            className="nav-arrow next"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}