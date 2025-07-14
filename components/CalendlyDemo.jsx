import Script from 'next/script';

export default function CalendlyWidget() {
  return (
    <>
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/d/dzw-nc4-57b/sport-endorse-demo" 
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
    </>
  );
}