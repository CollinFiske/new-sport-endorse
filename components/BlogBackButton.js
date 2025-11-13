"use client"

export default function BlogBackButton() {
  const handleBack = () => {
    if (document.referrer && document.referrer.includes('/blog')) {
      window.history.back();
    } else {
      const path = window.location.pathname;
      if (path.startsWith('/es')) {
        window.location.href = '/es/blog';
      } else if (path.startsWith('/de')) {
        window.location.href = '/de/blog';
      } else {
        window.location.href = '/blog';
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