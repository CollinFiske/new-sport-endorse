"use client"

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import "../styles/faqs.css"

interface FAQItem {
  question: string;
  answer: string;
}

interface SingleCategoryFAQProps {
  title: string;
  faqs: FAQItem[];
  color?: string;
}

export default function SingleCategoryFAQ({ title, faqs, color = '#0078c1' }: SingleCategoryFAQProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (faqs.length === 0) {
    return null;
  }

  return (
    <div className="single-category-faq-container">
      <div className="single-category-faq-content">
        <h2 className="single-category-faq-title" style={{ color: color }}>
          {title}
        </h2>
        
        <div className="single-category-faq-items">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item">
              <button 
                onClick={() => toggleItem(index)}
                className="faq-item-button"
                aria-expanded={openItems[index]}
                aria-controls={`faq-content-${index}`}
              >
                <span className="faq-item-text">{item.question}</span>
                <div className="faq-item-icon">
                  {openItems[index] ? (
                    <Minus 
                      className="faq-icon" 
                      style={{ color: color, transform: 'rotate(0deg)', transition: 'transform 0.2s ease' }} 
                    />
                  ) : (
                    <Plus 
                      className="faq-icon" 
                      style={{ color: color, transform: 'rotate(0deg)', transition: 'transform 0.2s ease' }} 
                    />
                  )}
                </div>
              </button>
              
              {openItems[index] && (
                <div 
                  id={`faq-content-${index}`}
                  className="faq-item-content"
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}