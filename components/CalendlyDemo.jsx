"use c;ient"
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function CalendlyWidget() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  const initializeCalendly = () => {
    if (window.Calendly && !isCalendlyLoaded) {
      setIsCalendlyLoaded(true);
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/d/dzw-nc4-57b/sport-endorse-demo',
        parentElement: document.querySelector('.calendly-inline-widget')
      });
    }
  };

  useEffect(() => {
    // If Calendly is already loaded (e.g., from previous navigation)
    if (window.Calendly) {
      initializeCalendly();
    }
  }, []);

  const handleScriptLoad = () => {
    // Initialize the widget after script loads
    initializeCalendly();
  };

  return (
    <>
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/d/dzw-nc4-57b/sport-endorse-demo" 
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
    </>
  );
}