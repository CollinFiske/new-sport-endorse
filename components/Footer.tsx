// components/Footer.tsx
"use client";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="modern-footer">
      <div className="newsletter">
        <h2>Keep up with us</h2>
        <p>Get news, photos, events, and business updates</p>
        <form>
          <input type="email" placeholder="Email address" />
          <button type="submit">SUBSCRIBE</button>
        </form>
        <label className="terms">
          <input type="checkbox" defaultChecked />
          I agree to Sport Endorse’s <a href="#">Privacy policy</a> and <a href="#">Terms and Conditions</a>.
        </label>
        <div className="footer-socials">
          <a href="#">📘</a>
          <a href="#">📸</a>
          <a href="#">🎵</a>
          <a href="#">▶️</a>
          <a href="#">🐦</a>
          <a href="#">💼</a>
        </div>
        <p>📞 +353 1 546 1103</p>
        <p>📧 hello@sportendorse.com</p>
      </div>
      <div className="footer-links">
        <div>
          <p>01] <a href="#">Athletes</a></p>
          <p>02] <a href="#">Brands</a></p>
          <p>03] <a href="#">Multiple Brands</a></p>
          <p>04] <a href="#">Agencies</a></p>
        </div>
        <div>
          <p>05] <a href="#">Subscription</a></p>
          <p>06] <a href="#">Blog</a></p>
          <p>07] <a href="#">Guides</a></p>
          <p>08] <a href="#">Podcast</a></p>
        </div>
        <div className="store-badges">
          <img src="/images/appstore.png" alt="App Store" />
          <img src="/images/playstore.png" alt="Google Play" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>©Copyright 2025 Sport Endorse. All Rights Reserved</p>
        <div className="footer-meta">
          <a href="#">Privacy Centre</a>
          <a href="#">Terms and Conditions</a>
        </div>
        <img src="/images/footer-logos.png" alt="Support Logos" />
      </div>
    </footer>
  );
}