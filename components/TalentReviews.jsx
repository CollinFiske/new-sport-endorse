'use client';

import { useState, useEffect } from 'react';
import '../styles/talentReviews.css';
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";

export default function TalentReviews() {
  const { language } = useLanguage();
  const t = translations[language].components.talentReviews;
  const reviews = [
    {
      id: 1,
      image: "/images/laura siddal.png",
      alt: "Professional headshot of Laura Siddall, triathlon athlete",
      text: "I've been a long-time fan of MINI. It's a brand that for me is so British and carries this heritage through its design over the years. I was delighted when through Sport Endorse I was made a Friend of the Brand for MINI UK.",
      name: "Laura Siddall",
      position: "TRIATHLON  | PROFESSIONAL"
    },
    {
      id: 5,
      image: "/images/jason quigley.png",
      alt: "Jason Quigley",
      text: "When you're on the way to being a World Champion you need a good team in your corner and Sport Endorse has been setting me up to knock out the competition for brands I work with.... .. plenty more fire power here!",
      name: "Jason Quigley",
      position: "BOXING | PROFESSIONAL & FORMER TEAM IRELAND"
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
    <section className="talent-reviews">
      <div className="talent-reviews-container">
        <div className="talent-reviews-header">
          <div className="talent-quote-icon">"</div>
          <h2>{t.title}</h2>
          <p>
            {t.subtitle}
          </p>
        </div>

        <div className="talent-review-card">
          <div className="talent-review-image">
            <img src={currentReview.image} alt={currentReview.alt} />
          </div>
          <div className="talent-review-text">
            <p>"{currentReview.text}"</p>
          </div>
          <div className="talent-review-author">
            <h4>{currentReview.name}</h4>
            <p>{currentReview.position}</p>
          </div>
        </div>

        <div className="talent-review-indicators">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`talent-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="talent-review-navigation">
          <button 
            className="talent-nav-arrow prev"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)}
          >
            ←
          </button>
          <button 
            className="talent-nav-arrow next"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}