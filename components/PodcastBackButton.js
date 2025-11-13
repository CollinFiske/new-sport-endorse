"use client"

export default function PodcastBackButton() {
  const handleBack = () => {
    if (document.referrer && document.referrer.includes('/podcasts')) {
      window.history.back();
    } else {
      const path = window.location.pathname;
      if (path.startsWith('/es')) {
        window.location.href = '/es/podcasts';
      } else if (path.startsWith('/de')) {
        window.location.href = '/de/podcasts';
      } else {
        window.location.href = '/podcasts';
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