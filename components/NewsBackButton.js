"use client"

export default function NewsBackButton() {
  const handleBack = () => {
    if (document.referrer && document.referrer.includes('/news')) {
      window.history.back();
    } else {
      const path = window.location.pathname;
      if (path.startsWith('/es')) {
        window.location.href = '/es/news';
      } else if (path.startsWith('/de')) {
        window.location.href = '/de/news';
      } else {
        window.location.href = '/news';
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