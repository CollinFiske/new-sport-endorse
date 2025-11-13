"use client"

import { useState } from 'react';
import { Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import "../styles/faqs.css"
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";

interface FAQItem {
  question: string;
  answer: string;
}

interface CategoryDropdownFAQProps {
  title: string;
  faqs: FAQItem[];
  color?: string;
}

export default function CategoryDropdownFAQ({ title, faqs, color = '#0078c1' }: CategoryDropdownFAQProps) {
  const { language } = useLanguage();
  const t = translations[language].components.faqs;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleCategory = () => {
    setCategoryOpen(prev => !prev);
  };

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (faqs.length === 0) {
    return (
      <div className="page-faq-container">
        <div className="faq-category">
          <button 
            onClick={toggleCategory}
            className="faq-category-button"
            style={{ borderLeft: `4px solid ${color}` }}
          >
            <span className="faq-category-text" style={{ color: color }}>{title}</span>
            <div className="faq-category-icon">
              {categoryOpen ? (
                <ChevronUp className="faq-icon" style={{ color: color }} />
              ) : (
                <ChevronDown className="faq-icon" style={{ color: color }} />
              )}
            </div>
          </button>
          
          {categoryOpen && (
            <div className="faq-category-content">
              <div className="faq-empty-message">
                {t.emptyMessage}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="page-faq-container">
      <div className="faq-category">
        <button 
          onClick={toggleCategory}
          className="faq-category-button"
          style={{ borderLeft: `4px solid ${color}` }}
        >
          <span className="faq-category-text" style={{ color: color }}>{title}</span>
          <div className="faq-category-icon">
            {categoryOpen ? (
              <ChevronUp className="faq-icon" style={{ color: color }} />
            ) : (
              <ChevronDown className="faq-icon" style={{ color: color }} />
            )}
          </div>
        </button>
        
        {categoryOpen && (
          <div className="faq-category-content">
            {faqs.map((item, index) => (
              <div key={index} className="faq-item">
                <button 
                  onClick={() => toggleItem(index)}
                  className="faq-item-button"
                >
                  <h3 className="faq-item-text">{item.question}</h3>
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
        )}
      </div>
    </div>
  );
}