"use client";
import "../styles/successStories.css";

export default function SuccessStories() {
  return (
    <section className="success-stories">
      <h2>Success <span className="highlight">stories</span></h2>
      <p>Learn how brands and athletes have been winning together</p>
      <div className="stories-scroll">
        {[...Array(3)].map((_, i) => (
          <div className={`success-card ${i === 1 ? "active" : "faded"}`} key={i}>
            <img src="/images/placeholder.png" alt="success story image"></img>
            {i >= 0 && (
              <div className="success-info">
                <p className="success-title">POPEYE'S SUPPLEMENTS IN CANADA WAS LOOKING TO</p>
                <p className="success-text">
                  align with a well known ice hockey player to promote their products and used the Sport Endorse Platform.
                </p>
                <a className="read-more" href="#">READ MORE →</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}