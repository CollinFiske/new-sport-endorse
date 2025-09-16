"use client"
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import "../styles/calendly.css";

// create a client-only component
const CalendlyInlineWidget = dynamic(() => {
  return import('react').then(() => {
    const Component = ({ widgetRef }) => {
      useEffect(() => {
        const initializeCalendly = () => {
          if (window.Calendly && widgetRef.current) {
            widgetRef.current.innerHTML = '';
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/d/dzw-nc4-57b/sport-endorse-demo',
              parentElement: widgetRef.current,
              prefill: {},
              utm: {}
            });
          }
        };

        // load Calendly script if not already loaded
        if (!window.Calendly) {
          const script = document.createElement('script');
          script.src = 'https://assets.calendly.com/assets/external/widget.js';
          script.onload = initializeCalendly;
          document.head.appendChild(script);
        } else {
          initializeCalendly();
        }
      }, [widgetRef]);

      return (
        <div 
          ref={widgetRef}
          className="calendly-inline-widget" 
        />
      );
    };
    return Component;
  });
}, { ssr: false }); // no server-side rendering

export default function CalendlyDemo() {
  const widgetRef = useRef(null);

  return (
    <div className="calendly-demo-section">
      <div className="calendly-demo-container">
        <div className="calendly-demo-header">
          <h2 className="calendly-demo-title">See Sport Endorse in Action</h2>
          <p className="calendly-demo-description">
            Select a time that suits to learn more about our innovative solution and revolutionary platform, 
            set up your account, and use athletes to endorse products and services.
          </p>
        </div>
        <div className="calendly-demo-widget">
          <CalendlyInlineWidget widgetRef={widgetRef} />
        </div>
      </div>
    </div>
  );
}