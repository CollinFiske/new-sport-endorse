"use client"

export default function BackButton() {
  const handleBack = () => {
    if (document.referrer && document.referrer.includes('success-stories')) {
      window.history.back();
    } else {
      const path = window.location.pathname;
      if (path.startsWith('/es')) {
        window.location.href = '/es/success-stories';
      } else if (path.startsWith('/de')) {
        window.location.href = '/de/success-stories';
      } else {
        window.location.href = '/success-stories';
      }
    }
  };

  return (
    <button 
      className="back-button"
      onClick={handleBack}
    >
      <span className="back-button-icon">←</span>
      Back
    </button>
  );
}