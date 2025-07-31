"use client"
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

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
          style={{ minWidth: '320px', height: '700px' }}
        />
      );
    };
    return Component;
  });
}, { ssr: false }); // no server-side rendering

export default function CalendlyWidget() {
  const widgetRef = useRef(null);

  return <CalendlyInlineWidget widgetRef={widgetRef} />;
}