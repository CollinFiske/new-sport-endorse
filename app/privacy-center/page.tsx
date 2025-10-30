import Script from 'next/script'

export default function PrivacyCenter() {
  return (
    <>
      {/* Head Script */}
      <Script id="dataships-pc-head" strategy="afterInteractive">
        {`
          (function(w, d){ 
            var s=d.createElement('script'), f=d.getElementsByTagName('script')[0]; 
            s.async=true;
            s.defer=true; 
            s.src="https://api.dataships.io/js/pc.js?apikey=YDf7ngeS_q4cFkPgNcinQ_IqQ2rJBKT1&v=" + Date.now(); 
            s.id = 'dataships-pc-head'; 
            f.parentNode.insertBefore(s,f); 
          })(window, document);
        `}
      </Script>

      <br/>
      <br/>
      <br/>
      <br/>

      {/* Privacy Center iFrame */}
      <iframe 
        data-cookieconsent="ignore"
        style={{
          position: 'fixed',
          border: 'none',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        src="https://app.dataships.io/privacycenter/YDf7ngeS_q4cFkPgNcinQ_IqQ2rJBKT1"
        title="Privacy Center"
      />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </>
  )
}